from app.models.jenkins_models import JenkinsRequest

from app.templates.jenkins_templates import (
    DECLARATIVE_PIPELINE,
    SCRIPTED_PIPELINE,
    MULTIBRANCH_PIPELINE,
    REACT_DECLARATIVE,
    NODE_DECLARATIVE,
    PYTHON_DECLARATIVE,
    JAVA_DECLARATIVE,
    DOTNET_DECLARATIVE,
    GO_DECLARATIVE,
)


def generate_jenkinsfile(request: JenkinsRequest) -> str:
    """
    Generate a Jenkinsfile based on
    - Pipeline Type
    - Project Type
    """

    pipeline_type = request.pipeline_type.lower()
    project_type = request.project_type.lower()

    # ---------------------------------------------------------
    # Declarative Pipelines
    # ---------------------------------------------------------

    if pipeline_type == "declarative":

        if project_type == "react":
            template = REACT_DECLARATIVE

        elif project_type == "node.js":
            template = NODE_DECLARATIVE

        elif project_type == "python":
            template = PYTHON_DECLARATIVE

        elif project_type == "java":
            template = JAVA_DECLARATIVE

        elif project_type == ".net":
            template = DOTNET_DECLARATIVE

        elif project_type == "go":
            template = GO_DECLARATIVE

        else:
            template = DECLARATIVE_PIPELINE

    # ---------------------------------------------------------
    # Scripted Pipeline
    # ---------------------------------------------------------

    elif pipeline_type == "scripted":
        template = SCRIPTED_PIPELINE

    # ---------------------------------------------------------
    # Multibranch Pipeline
    # ---------------------------------------------------------

    elif pipeline_type == "multibranch":
        template = MULTIBRANCH_PIPELINE

    else:
        raise ValueError(
            f"Unsupported pipeline type: {request.pipeline_type}"
        )

    return template.format(
        project_name=request.project_name,
        repository_url=request.repository_url,
        branch=request.branch,
        build_command=request.build_command
        or "echo 'No build command provided'",
        test_command=request.test_command
        or "echo 'No test command provided'",
        deploy_command=request.deploy_command
        or "echo 'No deploy command provided'",
        docker_image=request.docker_image,
        kubernetes_namespace=request.kubernetes_namespace,
    )