import axios from "axios";

export interface KubernetesRequest {
  app_name: string;
  image_name: string;
  replicas: number;
  container_port: number;

  service_port: number;
  service_type: string;

  host: string;

  config_data: Record<string, string>;
  secret_data: Record<string, string>;

  min_replicas: number;
  max_replicas: number;
  cpu_utilization: number;
}

export interface KubernetesResponse {
  deployment: string;
  service: string;
  configmap: string;
  secret: string;
  ingress: string;
  hpa: string;
}

export const generateKubernetes = async (
  request: KubernetesRequest
): Promise<KubernetesResponse> => {
  const response = await axios.post(
    "http://localhost:8000/kubernetes/generate",
    request
  );

  return response.data;
};