from fastapi import APIRouter, HTTPException

from app.models.jenkins_models import JenkinsRequest
from app.services.jenkins_service import generate_jenkinsfile

router = APIRouter(
    prefix="/jenkins",
    tags=["Jenkins Expert"]
)


@router.post("/generate")
def generate_pipeline(request: JenkinsRequest):
    """
    Generate a production-ready Jenkinsfile.
    """

    try:
        jenkinsfile = generate_jenkinsfile(request)

        return {
            "filename": "Jenkinsfile",
            "content": jenkinsfile
        }

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))