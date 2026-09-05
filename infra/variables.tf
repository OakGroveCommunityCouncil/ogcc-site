variable "tenant_id" {
  type        = string
  description = "Azure Tenant ID"
}

variable "subscription_id" {
  type        = string
  description = "Azure Subscription ID"
}

variable "client_id" {
  type        = string
  description = "Azure Client ID of the Entra ID Application"
}

variable "use_oidc" {
  type        = bool
  description = "Whether to use Open ID Connect (set this to true for CI, false for local CLI development)"
}

variable "resource_group_name" {
  type        = string
  description = "Name of the Azure Resource Group"
}

variable "resource_group_location" {
  type        = string
  description = "Azure location for the resource group"
}

variable "static_web_app_name" {
  type        = string
  description = "Name of the Azure Static Web App"
}
