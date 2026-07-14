import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export async function register(
  request: RegisterRequest
) {
  const response = await API.post(
    "/auth/register",
    request
  );

  return response.data;
}

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  token_type: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export async function login(
  request: LoginRequest
): Promise<LoginResponse> {
  const response = await API.post(
    "/auth/login",
    request
  );

  return response.data;
}