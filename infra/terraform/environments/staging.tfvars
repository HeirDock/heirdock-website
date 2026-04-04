environment = "staging"
aws_profile = "heirdock-production"

create_dns           = false
create_oidc_provider = true

ses_domain_identity_arn = "arn:aws:ses:us-east-1:077207386011:identity/heirdock.com"

contact_form_allowed_origins = ["https://heirdock.com", "https://www.heirdock.com", "https://d1ds28vvrei03c.cloudfront.net", "http://localhost:3006"]
