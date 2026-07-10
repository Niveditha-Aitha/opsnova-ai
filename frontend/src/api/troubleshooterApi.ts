import axios from "axios";

const API = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
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