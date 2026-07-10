from fastapi import APIRouter, HTTPException

from app.models.github_actions_models import GitHubActionsRequest
from app.services.github_actions_service import generate_workflow

router = APIRouter(
    prefix="/github-actions",
    tags=["GitHub Actions Expert"],
)


@router.post("/generate")
def generate(request: GitHubActionsRequest):
    try:

        workflow = generate_workflow(request)

        return {
            "filename": "ci.yml",
            "workflow": workflow,
        }

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )