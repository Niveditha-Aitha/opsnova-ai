from pydantic import BaseModel, Field
from typing import Optional


class TerraformRequest(BaseModel):
    cloud_provider: str = Field(
        ...,
        description="Cloud provider (AWS, Azure, GCP)"
    )

    resource_type: str = Field(
        ...,
        description="Infrastructure resource"
    )

    resource_name: str = Field(
        ...,
        min_length=1,
        description="Resource name"
    )

    region: str = Field(
        default="us-east-1",
        description="Deployment region"
    )

    instance_type: Optional[str] = Field(
        default="t2.micro",
        description="Instance type"
    )

    bucket_name: Optional[str] = Field(
        default="",
        description="Bucket name"
    )

    vpc_cidr: Optional[str] = Field(
        default="10.0.0.0/16",
        description="VPC CIDR Block"
    )

    enable_public_ip: bool = True

    tags: Optional[str] = Field(
        default="OpsNova"
    )