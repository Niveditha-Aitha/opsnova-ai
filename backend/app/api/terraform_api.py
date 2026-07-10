from fastapi import APIRouter, HTTPException

from app.models.terraform_models import TerraformRequest
from app.services.terraform_service import generate_terraform

router = APIRouter(
    prefix="/terraform",
    tags=["Terraform Expert"],
)


@router.post("/generate")
def generate(request: TerraformRequest):
    try:
        files = generate_terraform(request)

        return {
            "provider": files["provider"],
            "main": files["main"],
            "variables": files["variables"],
            "outputs": files["outputs"],
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