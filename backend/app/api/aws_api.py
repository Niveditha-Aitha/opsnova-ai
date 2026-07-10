from fastapi import APIRouter, HTTPException

from app.models.aws_models import AWSRequest
from app.services.aws_service import generate_aws

router = APIRouter(
    prefix="/aws",
    tags=["AWS Expert"],
)


@router.post("/generate")
def generate(request: AWSRequest):
    try:
        files = generate_aws(request)

        return {
            "cloudformation": files["cloudformation"],
            "aws_cli": files["aws_cli"],
            "iam_policy": files["iam_policy"],
            "architecture": files["architecture"],
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