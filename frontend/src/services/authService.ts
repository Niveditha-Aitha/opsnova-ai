import type { LoginResponse } from "../api/authApi";

const TOKEN_KEY = "opsnova_token";
const USER_KEY = "opsnova_user";

export function saveLogin(data: LoginResponse) {
  localStorage.setItem(
    TOKEN_KEY,
    data.access_token
  );

  localStorage.setItem(
    USER_KEY,
    JSON.stringify(data.user)
  );
}

export function getUser() {
  const user = localStorage.getItem(USER_KEY);

  return user ? JSON.parse(user) : null;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getToken() {
  return localStorage.getItem("opsnova_token");
}