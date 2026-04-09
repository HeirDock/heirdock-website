terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  backend "s3" {}
}

provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile

  default_tags {
    tags = {
      Project     = "heirdock-website"
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}

# 1. S3 buckets (no external dependencies)
module "s3" {
  source = "./modules/s3"

  environment = var.environment
}

# 2. DNS zone + ACM certificate (conditional — skip until Route 53 zone migrates)
module "dns" {
  source = "./modules/dns"

  domain_name = var.domain_name
  create_dns  = var.create_dns
}

# 3. CloudFront distribution (depends on S3 + DNS)
module "cloudfront" {
  source = "./modules/cloudfront"

  environment                          = var.environment
  frontend_bucket_id                   = module.s3.frontend_bucket_id
  frontend_bucket_regional_domain_name = module.s3.frontend_bucket_regional_domain_name
  domain_name                          = var.domain_name
  cdn_domain_names                     = var.cdn_domain_names
  certificate_arn                      = var.create_dns ? module.dns.certificate_arn : ""
  logs_bucket_domain                   = module.s3.logs_bucket_domain
}

# 4. IAM roles (depends on S3 + CloudFront)
module "iam" {
  source = "./modules/iam"

  environment                 = var.environment
  github_repo                 = var.github_repo
  frontend_bucket_arn         = module.s3.frontend_bucket_arn
  cloudfront_distribution_arn = module.cloudfront.distribution_arn
  create_oidc_provider        = var.create_oidc_provider
}

# 5. S3 bucket policy for CloudFront OAC
resource "aws_s3_bucket_policy" "frontend_cloudfront" {
  bucket = module.s3.frontend_bucket_id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontOAC"
        Effect    = "Allow"
        Principal = { Service = "cloudfront.amazonaws.com" }
        Action    = "s3:GetObject"
        Resource  = "${module.s3.frontend_bucket_arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = module.cloudfront.distribution_arn
          }
        }
      }
    ]
  })
}

# 6. SES domain identity + DNS records (conditional — requires Route 53)
module "ses" {
  source = "./modules/ses"

  count = var.create_dns ? 1 : 0

  environment     = var.environment
  domain          = var.domain_name
  route53_zone_id = module.dns.zone_id
}

# 7. Contact form API (Lambda + API Gateway)
module "contact_form" {
  source = "./modules/contact-form"

  environment          = var.environment
  aws_region           = var.aws_region
  ses_domain_identity_arn = var.create_dns ? module.ses[0].domain_identity_arn : var.ses_domain_identity_arn
  recaptcha_secret_key = var.recaptcha_secret_key
  lambda_source_dir    = "${path.root}/../lambda/contact-form"
  allowed_origins      = var.contact_form_allowed_origins
}

# 8. DNS records pointing to CloudFront (production only, requires Route 53)
resource "aws_route53_record" "root" {
  count   = var.create_dns && var.environment == "production" ? 1 : 0
  zone_id = module.dns.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = module.cloudfront.domain_name
    zone_id                = module.cloudfront.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "root_ipv6" {
  count   = var.create_dns && var.environment == "production" ? 1 : 0
  zone_id = module.dns.zone_id
  name    = var.domain_name
  type    = "AAAA"

  alias {
    name                   = module.cloudfront.domain_name
    zone_id                = module.cloudfront.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www" {
  count   = var.create_dns && var.environment == "production" ? 1 : 0
  zone_id = module.dns.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = module.cloudfront.domain_name
    zone_id                = module.cloudfront.hosted_zone_id
    evaluate_target_health = false
  }
}
