import axios from "axios";

const API = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
});

export interface GitHubActionsRequest {
  workflow_name: string;
  project_type: string;
  branch: string;
  os_runner: string;
  node_version: string;
  python_version: string;
  java_version: string;
  dotnet_version: string;
  go_version: string;
  include_tests: boolean;
  include_lint: boolean;
  include_docker: boolean;
  include_kubernetes: boolean;
  include_terraform: boolean;
}

export async function generateWorkflow(
  data: GitHubActionsRequest
) {
  console.log("Sending GitHub Actions Request:", data);

  const response = await API.post(
    "/github-actions/generate",
    data
  );

  return response.data.workflow;
}