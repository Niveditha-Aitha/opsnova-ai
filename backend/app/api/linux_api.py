from fastapi import APIRouter, HTTPException

from app.models.linux_models import LinuxRequest
from app.services.linux_service import generate_linux

router = APIRouter(
    prefix="/linux",
    tags=["Linux Expert"],
)


@router.post("/generate")
def generate(request: LinuxRequest):
    try:

        files = generate_linux(request)

        return {
            "commands": files["commands"],
            "automation": files["automation"],
            "readme": files["readme"],
            "cheatsheet": files["cheatsheet"],
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