# CloudFront Function for clean URL routing (not SPA rewrite)
resource "aws_cloudfront_function" "url_routing" {
  name    = "heirdock-website-${var.environment}-routing"
  runtime = "cloudfront-js-2.0"
  code    = <<-EOF
    function handler(event) {
      var request = event.request;
      var uri = request.uri;

      // If URI has a file extension, serve as-is
      if (uri.includes('.')) {
        return request;
      }

      // Clean URL routing for pre-rendered pages
      if (uri === '/') {
        request.uri = '/index.html';
      } else if (uri.endsWith('/')) {
        request.uri = uri + 'index.html';
      } else {
        request.uri = uri + '.html';
      }

      return request;
    }
  EOF
}

resource "aws_cloudfront_response_headers_policy" "security" {
  name = "heirdock-website-${var.environment}-security-headers"

  security_headers_config {
    strict_transport_security {
      access_control_max_age_sec = 63072000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }

    content_type_options {
      override = true
    }

    frame_options {
      frame_option = "DENY"
      override     = true
    }

    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }

    content_security_policy {
      content_security_policy = "frame-ancestors 'none'"
      override                = true
    }
  }

  custom_headers_config {
    items {
      header   = "Permissions-Policy"
      value    = "camera=(), microphone=(), geolocation=()"
      override = true
    }
  }
}

resource "aws_cloudfront_origin_access_control" "frontend" {
  name                              = "heirdock-website-${var.environment}-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "main" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100"
  aliases             = var.certificate_arn != "" ? var.cdn_domain_names : []

  origin {
    domain_name              = var.frontend_bucket_regional_domain_name
    origin_id                = "s3-frontend"
    origin_access_control_id = aws_cloudfront_origin_access_control.frontend.id
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3-frontend"
    compress         = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    response_headers_policy_id = aws_cloudfront_response_headers_policy.security.id
    viewer_protocol_policy     = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.url_routing.arn
    }
  }

  # Custom 404 error page
  custom_error_response {
    error_code         = 403
    response_code      = 404
    response_page_path = "/404.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = var.certificate_arn == ""
    acm_certificate_arn            = var.certificate_arn != "" ? var.certificate_arn : null
    ssl_support_method             = var.certificate_arn != "" ? "sni-only" : null
    minimum_protocol_version       = var.certificate_arn != "" ? "TLSv1.2_2021" : null
  }

  logging_config {
    bucket          = var.logs_bucket_domain
    include_cookies = false
    prefix          = "cloudfront/"
  }

  tags = {
    Name = "heirdock-website-${var.environment}"
  }
}
