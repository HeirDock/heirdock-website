variable "environment" {
  type = string
}

variable "frontend_bucket_id" {
  type = string
}

variable "frontend_bucket_regional_domain_name" {
  type = string
}

variable "domain_name" {
  type = string
}

variable "cdn_domain_names" {
  type    = list(string)
  default = []
}

variable "certificate_arn" {
  type    = string
  default = ""
}

variable "logs_bucket_domain" {
  type = string
}
