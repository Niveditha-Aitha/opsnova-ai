from app.models.terraform_models import TerraformRequest

from app.templates.terraform_templates import (
    AWS_PROVIDER,
    AZURE_PROVIDER,
    GCP_PROVIDER,
    AWS_EC2,
    AWS_S3,
    AWS_VPC,
    AZURE_RESOURCE_GROUP,
    AZURE_VM,
    AZURE_STORAGE,
    GCP_COMPUTE,
    GCP_STORAGE,
    VARIABLES,
    OUTPUTS,
)


def generate_terraform(request: TerraformRequest):
    """
    Generates Terraform configuration files.
    """

    provider = request.cloud_provider.lower()
    resource = request.resource_type.lower()

    # ----------------------------------------------------
    # Provider
    # ----------------------------------------------------

    if provider == "aws":
        provider_tf = AWS_PROVIDER.format(
            region=request.region
        )

    elif provider == "azure":
        provider_tf = AZURE_PROVIDER.format(
            region=request.region
        )

    elif provider == "gcp":
        provider_tf = GCP_PROVIDER.format(
            region=request.region
        )

    else:
        raise ValueError("Unsupported Cloud Provider")

    # ----------------------------------------------------
    # Main Resource
    # ----------------------------------------------------

    if provider == "aws":

        if resource == "ec2":
            main_tf = AWS_EC2.format(
                resource_name=request.resource_name,
                instance_type=request.instance_type,
            )

        elif resource == "s3":
            main_tf = AWS_S3.format(
                resource_name=request.resource_name,
                bucket_name=request.bucket_name,
            )

        elif resource == "vpc":
            main_tf = AWS_VPC.format(
                resource_name=request.resource_name,
                vpc_cidr=request.vpc_cidr,
            )

        else:
            raise ValueError("Unsupported AWS Resource")

    elif provider == "azure":

        if resource == "resource group":
            main_tf = AZURE_RESOURCE_GROUP.format(
                resource_name=request.resource_name,
                region=request.region,
            )

        elif resource == "virtual machine":
            main_tf = AZURE_VM.format(
                resource_name=request.resource_name,
                instance_type=request.instance_type,
                region=request.region,
            )

        elif resource == "storage account":
            main_tf = AZURE_STORAGE.format(
                resource_name=request.resource_name,
                region=request.region,
            )

        else:
            raise ValueError("Unsupported Azure Resource")

    elif provider == "gcp":

        if resource == "compute":
            main_tf = GCP_COMPUTE.format(
                resource_name=request.resource_name,
                instance_type=request.instance_type,
                region=request.region,
            )

        elif resource == "storage":
            main_tf = GCP_STORAGE.format(
                resource_name=request.resource_name,
                bucket_name=request.bucket_name,
                region=request.region,
            )

        else:
            raise ValueError("Unsupported GCP Resource")

    else:
        raise ValueError("Unsupported Provider")

    return {
        "provider": provider_tf,
        "main": main_tf,
        "variables": VARIABLES,
        "outputs": OUTPUTS,
    }