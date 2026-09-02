variable "subscription_id" {
  type        = string
  description = "Azure Subscription ID"
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
