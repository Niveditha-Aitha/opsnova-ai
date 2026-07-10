from app.models.kubernetes_models import KubernetesRequest
from app.templates.kubernetes.deployment import DEPLOYMENT_TEMPLATE
from app.templates.kubernetes.service import SERVICE_TEMPLATE
from app.templates.kubernetes.configmap import CONFIGMAP_TEMPLATE
from app.templates.kubernetes.secret import SECRET_TEMPLATE
from app.templates.kubernetes.ingress import INGRESS_TEMPLATE 
from app.templates.kubernetes.hpa import HPA_TEMPLATE  


def generate_deployment(request: KubernetesRequest) -> str:
    return DEPLOYMENT_TEMPLATE.format(
        app_name=request.app_name,
        image_name=request.image_name,
        replicas=request.replicas,
        container_port=request.container_port,
    )

def generate_service(request: KubernetesRequest) -> str:
    return SERVICE_TEMPLATE.format(
        app_name=request.app_name,
        service_port=request.service_port,
        container_port=request.container_port,
        service_type=request.service_type,
    )

def generate_configmap(request: KubernetesRequest) -> str:
    if request.config_data:
        config_yaml = "\n".join(
            [f"  {key}: \"{value}\"" for key, value in request.config_data.items()]
        )
    else:
        config_yaml = "  EXAMPLE_KEY: \"example-value\""

    return CONFIGMAP_TEMPLATE.format(
        app_name=request.app_name,
        config_data=config_yaml,
    )

def generate_secret(request: KubernetesRequest) -> str:
    if request.secret_data:
        secret_yaml = "\n".join(
            [f'  {key}: "{value}"' for key, value in request.secret_data.items()]
        )
    else:
        secret_yaml = '  PASSWORD: "change-me"'

    return SECRET_TEMPLATE.format(
        app_name=request.app_name,
        secret_data=secret_yaml,
    )

def generate_ingress(request: KubernetesRequest) -> str:
    return INGRESS_TEMPLATE.format(
        app_name=request.app_name,
        host=request.host,
        service_port=request.service_port,
    )

def generate_hpa(request: KubernetesRequest) -> str:
    return HPA_TEMPLATE.format(
        app_name=request.app_name,
        min_replicas=request.min_replicas,
        max_replicas=request.max_replicas,
        cpu_utilization=request.cpu_utilization,
    )

def generate_all(request: KubernetesRequest):
    return {
        "deployment": generate_deployment(request),
        "service": generate_service(request),
        "configmap": generate_configmap(request),
        "secret": generate_secret(request),
        "ingress": generate_ingress(request),
        "hpa": generate_hpa(request),
    }