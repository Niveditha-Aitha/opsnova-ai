import axios from "axios";

const API = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
});

export interface DockerRequest {
  app_name: string;
  language: string;
  framework: string;
  port: number;
}

export async function generateDockerfile(data: DockerRequest) {
  console.log("Sending Dockerfile request:", data);

  const response = await API.post("/docker/generate", data);

  return response.data.dockerfile;
}

export async function generateCompose(data: DockerRequest) {
  console.log("Sending Compose request:", data);

  const response = await API.post("/docker/compose", data);

  return response.data.compose;
}

export async function generateDockerIgnore(data: DockerRequest) {
  console.log("Sending DockerIgnore request:", data);

  const response = await API.post("/docker/dockerignore", data);

  return response.data.dockerignore;
}