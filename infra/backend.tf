# NOTE: When running locally, this file must be excluded

terraform {
  backend "azurerm" {
    use_oidc         = true
    use_azuread_auth = true
    # These values are read from environment variables in GitHub Actions (Terraform variables can't be used here)
    # tenant_id -> ARM_TENANT_ID
    # client_id -> ARM_CLIENT_ID
    # These values must be passed when invoking the Terraform CLI in the Workflow
    # storage_account_name
    # container_name 
    # key 
  }
}
