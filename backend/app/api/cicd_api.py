from fastapi import APIRouter, HTTPException

from app.models.cicd_models import CICDRequest
from app.services.cicd_service import generate_cicd

router = APIRouter(
    prefix="/cicd",
    tags=["CI/CD Expert"],
)


@router.post("/generate")
def generate(request: CICDRequest):
    try:

        files = generate_cicd(request)

        return {
            "jenkinsfile": files["jenkinsfile"],
            "github_actions": files["github_actions"],
            "readme": files["readme"],
            "pipeline_diagram": files["pipeline_diagram"],
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