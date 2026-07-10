from typing import Dict
from pydantic import BaseModel



class KubernetesRequest(BaseModel):
    app_name: str
    image_name: str
    replicas: int = 1

    container_port: int

    service_port: int = 80

    service_type: str = "ClusterIP"

    config_data: Dict[str, str] = {}

    secret_data: Dict[str, str] = {}

    host: str = "example.com"

    min_replicas: int = 2
    max_replicas: int = 10
    cpu_utilization: int = 80