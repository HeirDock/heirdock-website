variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "aws_profile" {
  description = "AWS CLI profile to use (set to null in CI where OIDC provides credentials)"
  type        = string
  default     = null
}

variable "environment" {
  description = "Environment name (staging, production)"
  type        = string
}

variable "domain_name" {
  description = "Primary domain name"
  type        = string
  default     = "heirdock.com"
}

variable "cdn_domain_names" {
  description = "Domain names for CloudFront distribution"
  type        = list(string)
  default     = []
}

variable "create_dns" {
  description = "Whether to create Route 53 and DNS resources (set false until zone migrates)"
  type        = bool
  default     = false
}

variable "github_repo" {
  description = "GitHub repository for OIDC (org/repo)"
  type        = string
  default     = "HeirDock/heirdock-website"
}

variable "create_oidc_provider" {
  description = "Whether to create the GitHub OIDC provider (set false if already exists in account)"
  type        = bool
  default     = true
}

variable "recaptcha_secret_key" {
  description = "Google reCAPTCHA v3 secret key"
  type        = string
  sensitive   = true
  # Pass via: terraform apply -var="recaptcha_secret_key=VALUE"
  # Do NOT commit the secret key to source control
}

variable "ses_domain_identity_arn" {
  description = "SES domain identity ARN (used when create_dns is false and SES is managed elsewhere)"
  type        = string
  default     = ""
}

variable "contact_form_allowed_origins" {
  description = "CORS allowed origins for the contact form API"
  type        = list(string)
  default     = ["https://heirdock.com", "https://www.heirdock.com"]
}
