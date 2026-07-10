import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export interface TerraformRequest {
  cloud_provider: string;
  resource_type: string;
  resource_name: string;
  region: string;
  instance_type: string;
  bucket_name: string;
  vpc_cidr: string;
  enable_public_ip: boolean;
  tags: string;
}

export async function generateTerraform(data: TerraformRequest) {
  console.log("Sending Terraform request:", data);

  const response = await API.post("/terraform/generate", data);

  return response.data;
}