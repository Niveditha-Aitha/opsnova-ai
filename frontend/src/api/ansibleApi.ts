import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export interface AnsibleRequest {
  playbook_name: string;
  playbook_type: string;
  hosts: string;
  become: boolean;
  package_manager: string;
  service_name: string;
  service_state: string;
  package_name: string;
  username: string;
  file_path: string;
  destination_path: string;
}

export async function generateAnsible(
  data: AnsibleRequest
) {
  console.log("Sending Ansible Request:", data);

  const response = await API.post(
    "/ansible/generate",
    data
  );

  return response.data;
}