import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export interface AWSRequest {
  service: string;
  resource_name: string;
  region: string;
  instance_type: string;
  ami_id: string;
  bucket_name: string;
  vpc_cidr: string;
  iam_role_name: string;
  lambda_runtime: string;
  lambda_handler: string;
  database_engine: string;
  tags: string;
}

export async function generateAWS(
  data: AWSRequest
) {
  console.log("Sending AWS Request:", data);

  const response = await API.post(
    "/aws/generate",
    data
  );

  return response.data;
}