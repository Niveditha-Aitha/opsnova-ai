from fastapi import APIRouter

from app.models.kubernetes_models import KubernetesRequest
from app.services.kubernetes_service import (
    generate_deployment,
    generate_service,
    generate_configmap,
    generate_secret,
    generate_ingress,
    generate_hpa,
    generate_all,
)

router = APIRouter(prefix="/kubernetes", tags=["Kubernetes"])


@router.post("/deployment")
def deployment(request: KubernetesRequest):
    deployment_yaml = generate_deployment(request)

    return {
        "deployment": deployment_yaml
    }

@router.post("/service")
def service(request: KubernetesRequest):
    service_yaml = generate_service(request)

    return {
        "service": service_yaml
    }

@router.post("/configmap")
def configmap(request: KubernetesRequest):
    configmap_yaml = generate_configmap(request)

    return {
        "configmap": configmap_yaml
    }

@router.post("/secret")
def secret(request: KubernetesRequest):
    secret_yaml = generate_secret(request)

    return {
        "secret": secret_yaml
    }

@router.post("/ingress")
def ingress(request: KubernetesRequest):
    ingress_yaml = generate_ingress(request)

    return {
        "ingress": ingress_yaml
    }

@router.post("/hpa")
def hpa(request: KubernetesRequest):
    hpa_yaml = generate_hpa(request)

    return {
        "hpa": hpa_yaml
    }

@router.post("/generate")
def generate(request: KubernetesRequest):
    return generate_all(request)