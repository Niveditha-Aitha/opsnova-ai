import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export interface JenkinsRequest {
  pipeline_type: string;
  project_type: string;
  project_name: string;
  repository_url: string;
  branch: string;
  docker_image: string;
  kubernetes_namespace: string;
  build_command: string;
  test_command: string;
  deploy_command: string;
  include_docker: boolean;
  include_kubernetes: boolean;
  include_notifications: boolean;
}

export async function generateJenkinsfile(data: JenkinsRequest) {
  console.log("Sending Jenkins request:", data);

  const response = await API.post("/jenkins/generate", data);

  return response.data.content;
}