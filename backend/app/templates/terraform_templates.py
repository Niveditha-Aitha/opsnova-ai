# ==========================================================
# AWS Provider
# ==========================================================

AWS_PROVIDER = """terraform {{

  required_providers {{

    aws = {{
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }}

  }}

}}

provider "aws" {{

  region = "{region}"

}}
"""


# ==========================================================
# Azure Provider
# ==========================================================

AZURE_PROVIDER = """terraform {{

  required_providers {{

    azurerm = {{
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }}

  }}

}}

provider "azurerm" {{

  features {{}}

}}
"""


# ==========================================================
# GCP Provider
# ==========================================================

GCP_PROVIDER = """terraform {{

  required_providers {{

    google = {{
      source = "hashicorp/google"
      version = "~> 5.0"
    }}

  }}

}}

provider "google" {{

  project = "my-project"

  region = "{region}"

}}
"""


# ==========================================================
# AWS EC2
# ==========================================================

AWS_EC2 = """resource "aws_instance" "{resource_name}" {{

  ami           = "ami-0c02fb55956c7d316"

  instance_type = "{instance_type}"

  tags = {{
    Name = "{resource_name}"
  }}

}}
"""


# ==========================================================
# AWS S3
# ==========================================================

AWS_S3 = """resource "aws_s3_bucket" "{resource_name}" {{

  bucket = "{bucket_name}"

  force_destroy = true

  tags = {{
    Name = "{resource_name}"
  }}

}}
"""


# ==========================================================
# AWS VPC
# ==========================================================

AWS_VPC = """resource "aws_vpc" "{resource_name}" {{

  cidr_block = "{vpc_cidr}"

  tags = {{
    Name = "{resource_name}"
  }}

}}
"""


# ==========================================================
# Azure Resource Group
# ==========================================================

AZURE_RESOURCE_GROUP = """resource "azurerm_resource_group" "{resource_name}" {{

  name = "{resource_name}"

  location = "{region}"

}}
"""


# ==========================================================
# Azure Virtual Machine
# ==========================================================

AZURE_VM = """resource "azurerm_linux_virtual_machine" "{resource_name}" {{

  name                = "{resource_name}"

  location            = "{region}"

  resource_group_name = "example-rg"

  size                = "{instance_type}"

  admin_username      = "azureuser"

}}
"""


# ==========================================================
# Azure Storage Account
# ==========================================================

AZURE_STORAGE = """resource "azurerm_storage_account" "{resource_name}" {{

  name                     = "{resource_name}"

  resource_group_name      = "example-rg"

  location                 = "{region}"

  account_tier             = "Standard"

  account_replication_type = "LRS"

}}
"""


# ==========================================================
# GCP Compute Instance
# ==========================================================

GCP_COMPUTE = """resource "google_compute_instance" "{resource_name}" {{

  name = "{resource_name}"

  machine_type = "{instance_type}"

  zone = "{region}-a"

  boot_disk {{

    initialize_params {{

      image = "debian-cloud/debian-11"

    }}

  }}

  network_interface {{

    network = "default"

    access_config {{}}

  }}

}}
"""


# ==========================================================
# GCP Storage Bucket
# ==========================================================

GCP_STORAGE = """resource "google_storage_bucket" "{resource_name}" {{

  name = "{bucket_name}"

  location = "{region}"

}}
"""


# ==========================================================
# variables.tf
# ==========================================================

VARIABLES = """variable "region" {}

variable "resource_name" {}

variable "instance_type" {}

variable "bucket_name" {}
"""


# ==========================================================
# outputs.tf
# ==========================================================

OUTPUTS = """output "resource_name" {

  value = var.resource_name

}
"""