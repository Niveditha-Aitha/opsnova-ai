import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export interface LinuxRequest {
  category: string;
  distribution: string;
  username: string;
  group_name: string;
  package_name: string;
  service_name: string;
  source_path: string;
  destination_path: string;
  directory_name: string;
  process_name: string;
  port: number;
  network_interface: string;
  backup_directory: string;
}

export async function generateLinux(
  data: LinuxRequest
) {
  console.log("Sending Linux Request:", data);

  const response = await API.post(
    "/linux/generate",
    data
  );

  return response.data;
}