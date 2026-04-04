output "frontend_bucket_name" {
  description = "S3 frontend bucket name"
  value       = module.s3.frontend_bucket_id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = module.cloudfront.distribution_id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = module.cloudfront.domain_name
}

output "github_deploy_role_arn" {
  description = "IAM role ARN for GitHub Actions deployment"
  value       = module.iam.deploy_role_arn
}

output "contact_form_api_endpoint" {
  description = "Contact form API Gateway endpoint URL"
  value       = module.contact_form.api_endpoint
}
