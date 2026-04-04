environment = "production"
aws_profile = "heirdock-production"

create_dns           = false
create_oidc_provider = false

ses_domain_identity_arn = "arn:aws:ses:us-east-1:077207386011:identity/heirdock.com"

cdn_domain_names = ["heirdock.com", "www.heirdock.com"]

contact_form_allowed_origins = ["https://heirdock.com", "https://www.heirdock.com"]
