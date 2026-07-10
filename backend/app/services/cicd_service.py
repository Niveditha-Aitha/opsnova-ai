from app.models.cicd_models import CICDRequest

from app.templates.cicd_templates import (
    JENKINSFILE,
    GITHUB_ACTIONS,
    README,
    PIPELINE_DIAGRAM,
)


def generate_cicd(request: CICDRequest):
    """
    Generate CI/CD pipeline files.
    """

    jenkinsfile = JENKINSFILE.format(
        pipeline_name=request.pipeline_name,
        docker_image=request.docker_image,
        deployment_target=request.deployment_target,
    )

    github_actions = GITHUB_ACTIONS.format(
        pipeline_name=request.pipeline_name,
        docker_image=request.docker_image,
    )

    readme = README.format(
        pipeline_name=request.pipeline_name,
        language=request.language,
        framework=request.framework,
        ci_tool=request.ci_tool,
        cloud_provider=request.cloud_provider,
        registry=request.registry,
        deployment_target=request.deployment_target,
    )

    pipeline_diagram = PIPELINE_DIAGRAM.format(
        ci_tool=request.ci_tool,
        cloud_provider=request.cloud_provider,
    )

    return {
        "jenkinsfile": jenkinsfile,
        "github_actions": github_actions,
        "readme": readme,
        "pipeline_diagram": pipeline_diagram,
    }