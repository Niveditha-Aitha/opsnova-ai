from fastapi import APIRouter, HTTPException

from app.models.ansible_models import AnsibleRequest
from app.services.ansible_service import generate_ansible

router = APIRouter(
    prefix="/ansible",
    tags=["Ansible Expert"],
)


@router.post("/generate")
def generate(request: AnsibleRequest):
    try:
        files = generate_ansible(request)

        return {
            "playbook": files["playbook"],
            "inventory": files["inventory"],
            "config": files["config"],
            "requirements": files["requirements"],
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