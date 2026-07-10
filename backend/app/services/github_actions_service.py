from app.models.github_actions_models import GitHubActionsRequest

from app.templates.github_actions_templates import (
    REACT_WORKFLOW,
    NODE_WORKFLOW,
    PYTHON_WORKFLOW,
    JAVA_WORKFLOW,
    DOTNET_WORKFLOW,
    GO_WORKFLOW,
)


def generate_workflow(request: GitHubActionsRequest):
    """
    Generate GitHub Actions workflow based on project type.
    """

    project = request.project_type.lower()

    if project == "react":
        template = REACT_WORKFLOW

    elif project == "node.js":
        template = NODE_WORKFLOW

    elif project == "python":
        template = PYTHON_WORKFLOW

    elif project == "java":
        template = JAVA_WORKFLOW

    elif project == ".net":
        template = DOTNET_WORKFLOW

    elif project == "go":
        template = GO_WORKFLOW

    else:
        raise ValueError(
            f"Unsupported project type: {request.project_type}"
        )

    workflow = template.format(
        workflow_name=request.workflow_name,
        branch=request.branch,
        os_runner=request.os_runner,
        node_version=request.node_version,
        python_version=request.python_version,
        java_version=request.java_version,
        dotnet_version=request.dotnet_version,
        go_version=request.go_version,
    )

    return workflow