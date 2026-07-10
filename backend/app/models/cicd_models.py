from pydantic import BaseModel, Field
from typing import Optional


class CICDRequest(BaseModel):
    pipeline_name: str = Field(
        ...,
        min_length=1,
        description="Pipeline Name"
    )

    pipeline_type: str = Field(
        ...,
        description="Pipeline Type"
    )

    language: str = Field(
        ...,
        description="Programming Language"
    )

    framework: str = Field(
        ...,
        description="Framework"
    )

    ci_tool: str = Field(
        default="GitHub Actions",
        description="CI Tool"
    )

    cloud_provider: str = Field(
        default="AWS",
        description="Cloud Provider"
    )

    registry: str = Field(
        default="Docker Hub",
        description="Container Registry"
    )

    deployment_target: str = Field(
        default="Kubernetes",
        description="Deployment Target"
    )

    repository_name: Optional[str] = Field(
        default="my-app"
    )

    docker_image: Optional[str] = Field(
        default="my-app:latest"
    )

    kubernetes_namespace: Optional[str] = Field(
        default="default"
    )

    enable_tests: bool = True

    enable_security_scan: bool = True

    enable_notifications: bool = False