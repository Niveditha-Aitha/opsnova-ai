from fastapi import APIRouter, HTTPException

from app.models.troubleshooter_models import TroubleshooterRequest

from app.services.troubleshooter_service import analyze_error

router = APIRouter(
    prefix="/troubleshooter",
    tags=["DevOps AI Troubleshooter"],
)


@router.post("/analyze")
def analyze(request: TroubleshooterRequest):

    try:

        result = analyze_error(request)

        return result

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e),
        )