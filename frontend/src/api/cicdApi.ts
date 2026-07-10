import axios from "axios";

const API = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
});

export interface CICDRequest {
  pipeline_name: string;
  pipeline_type: string;
  language: string;
  framework: string;
  ci_tool: string;
  cloud_provider: string;
  registry: string;
  deployment_target: string;
  repository_name: string;
  docker_image: string;
  kubernetes_namespace: string;
  enable_tests: boolean;
  enable_security_scan: boolean;
  enable_notifications: boolean;
}

export async function generateCICD(
  data: CICDRequest
) {
  console.log("Sending CI/CD Request:", data);

  const response = await API.post(
    "/cicd/generate",
    data
  );

  return response.data;
}