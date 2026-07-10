import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export interface TroubleshooterRequest {
  technology: string;
  error_message: string;
  command: string;
  operating_system: string;
  environment: string;
}

export async function analyzeError(
  data: TroubleshooterRequest
) {
  console.log("Sending Troubleshooter Request:", data);

  const response = await API.post(
    "/troubleshooter/analyze",
    data
  );

  return response.data;
}