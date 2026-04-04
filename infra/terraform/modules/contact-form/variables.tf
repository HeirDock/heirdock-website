variable "environment" {
  type = string
}

variable "aws_region" {
  type = string
}

variable "ses_domain_identity_arn" {
  type = string
}

variable "recaptcha_secret_key" {
  type      = string
  sensitive = true
}

variable "lambda_source_dir" {
  type = string
}

variable "allowed_origins" {
  type    = list(string)
  default = []
}
