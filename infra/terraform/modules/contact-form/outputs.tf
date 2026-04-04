output "api_endpoint" {
  value = aws_apigatewayv2_api.contact.api_endpoint
}

output "lambda_function_name" {
  value = aws_lambda_function.contact_form.function_name
}
