variable "environment" {
  type = string
}

variable "github_repo" {
  type = string
}

variable "frontend_bucket_arn" {
  type = string
}

variable "cloudfront_distribution_arn" {
  type = string
}

variable "create_oidc_provider" {
  type    = bool
  default = true
}
