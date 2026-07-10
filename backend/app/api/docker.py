from fastapi import APIRouter

from app.models.docker import DockerRequest
from app.services.docker_service import generate_dockerfile
from app.services.compose_service import generate_compose
from app.services.dockerignore_service import generate_dockerignore

router = APIRouter(
    prefix="/docker",
    tags=["Docker"],
)


@router.post("/generate")
def generate(request: DockerRequest):
    dockerfile = generate_dockerfile(request)

    return {
        "dockerfile": dockerfile
    }


@router.post("/compose")
def compose(request: DockerRequest):
    compose_file = generate_compose(request)

    return {
        "compose": compose_file
    }

@router.post("/dockerignore")
def dockerignore(request: DockerRequest):
    dockerignore = generate_dockerignore(request)

    return {
        "dockerignore": dockerignore
    }