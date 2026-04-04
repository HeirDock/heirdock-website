output "certificate_arn" {
  value = var.create_dns ? aws_acm_certificate.main[0].arn : ""
}

output "name_servers" {
  value = var.create_dns ? data.aws_route53_zone.main[0].name_servers : []
}

output "zone_id" {
  value = var.create_dns ? data.aws_route53_zone.main[0].zone_id : ""
}
