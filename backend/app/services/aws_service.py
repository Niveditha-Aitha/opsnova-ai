from app.models.aws_models import AWSRequest

from app.templates.aws_templates import (
    EC2_CLOUDFORMATION,
    S3_CLOUDFORMATION,
    VPC_CLOUDFORMATION,
    IAM_ROLE_CLOUDFORMATION,
    LAMBDA_CLOUDFORMATION,
    RDS_CLOUDFORMATION,
    AWS_CLI,
    IAM_POLICY,
    ARCHITECTURE,
)


def generate_aws(request: AWSRequest):
    """
    Generate AWS configuration files.
    """

    service = request.service.lower()

    # ---------------------------------------------------------
    # Select CloudFormation Template
    # ---------------------------------------------------------

    if service == "ec2":
        cloudformation = EC2_CLOUDFORMATION

    elif service == "s3":
        cloudformation = S3_CLOUDFORMATION

    elif service == "vpc":
        cloudformation = VPC_CLOUDFORMATION

    elif service == "iam":
        cloudformation = IAM_ROLE_CLOUDFORMATION

    elif service == "lambda":
        cloudformation = LAMBDA_CLOUDFORMATION

    elif service == "rds":
        cloudformation = RDS_CLOUDFORMATION

    else:
        raise ValueError(
            f"Unsupported AWS Service: {request.service}"
        )

    cloudformation = cloudformation.format(
        service=request.service,
        resource_name=request.resource_name,
        region=request.region,
        instance_type=request.instance_type,
        ami_id=request.ami_id,
        bucket_name=request.bucket_name,
        vpc_cidr=request.vpc_cidr,
        iam_role_name=request.iam_role_name,
        lambda_runtime=request.lambda_runtime,
        lambda_handler=request.lambda_handler,
        database_engine=request.database_engine,
        tags=request.tags,
    )

    aws_cli = AWS_CLI.format(
        resource_name=request.resource_name,
        region=request.region,
    )

    architecture = ARCHITECTURE.format(
        service=request.service,
        resource_name=request.resource_name,
        region=request.region,
    )

    return {
        "cloudformation": cloudformation,
        "aws_cli": aws_cli,
        "iam_policy": IAM_POLICY,
        "architecture": architecture,
    }