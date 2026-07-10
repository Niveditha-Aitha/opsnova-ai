from pydantic import BaseModel, Field
from typing import Optional


class GitHubActionsRequest(BaseModel):
    workflow_name: str = Field(
        ...,
        min_length=1,
        description="Workflow name"
    )

    project_type: str = Field(
        ...,
        description="Project technology"
    )

    branch: str = Field(
        default="main",
        description="GitHub branch"
    )

    os_runner: str = Field(
        default="ubuntu-latest",
        description="GitHub Actions runner"
    )

    node_version: Optional[str] = "20"

    python_version: Optional[str] = "3.12"

    java_version: Optional[str] = "21"

    dotnet_version: Optional[str] = "8.0"

    go_version: Optional[str] = "1.22"

    include_tests: bool = True

    include_lint: bool = False

    include_docker: bool = False

    include_kubernetes: bool = False

    include_terraform: bool = False