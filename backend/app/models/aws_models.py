from pydantic import BaseModel, Field
from typing import Optional


class AWSRequest(BaseModel):
    service: str = Field(
        ...,
        description="AWS Service"
    )

    resource_name: str = Field(
        ...,
        min_length=1,
        description="AWS Resource Name"
    )

    region: str = Field(
        default="us-east-1",
        description="AWS Region"
    )

    instance_type: Optional[str] = Field(
        default="t2.micro",
        description="EC2 Instance Type"
    )

    ami_id: Optional[str] = Field(
        default="ami-0c02fb55956c7d316",
        description="AMI ID"
    )

    bucket_name: Optional[str] = Field(
        default="",
        description="S3 Bucket Name"
    )

    vpc_cidr: Optional[str] = Field(
        default="10.0.0.0/16",
        description="VPC CIDR"
    )

    iam_role_name: Optional[str] = Field(
        default="",
        description="IAM Role Name"
    )

    lambda_runtime: Optional[str] = Field(
        default="python3.12",
        description="Lambda Runtime"
    )

    lambda_handler: Optional[str] = Field(
        default="lambda_function.lambda_handler",
        description="Lambda Handler"
    )

    database_engine: Optional[str] = Field(
        default="mysql",
        description="RDS Engine"
    )

    tags: Optional[str] = Field(
        default="OpsNova"
    )