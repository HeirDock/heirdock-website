variable "domain_name" {
  type = string
}

variable "create_dns" {
  description = "Whether to create DNS resources"
  type        = bool
  default     = false
}
