from pydantic import BaseModel, Field
from typing import Optional


class JenkinsRequest(BaseModel):
    pipeline_type: str = Field(
        ...,
        description="Pipeline type (Declarative, Scripted, Multibranch)"
    )

    project_type: str = Field(
        ...,
        description="Project technology (React, Node.js, Python, Java, etc.)"
    )

    project_name: str = Field(
        ...,
        min_length=1,
        description="Project name"
    )

    repository_url: Optional[str] = Field(
        default="",
        description="Git repository URL"
    )

    branch: Optional[str] = Field(
        default="main",
        description="Git branch"
    )

    docker_image: Optional[str] = Field(
        default=""
    )

    kubernetes_namespace: Optional[str] = Field(
        default="default"
    )

    build_command: Optional[str] = Field(
        default=""
    )

    test_command: Optional[str] = Field(
        default=""
    )

    deploy_command: Optional[str] = Field(
        default=""
    )

    include_docker: bool = False
    include_kubernetes: bool = False
    include_notifications: bool = False