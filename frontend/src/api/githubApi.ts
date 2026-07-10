const API = "http://127.0.0.1:8000";

export async function githubLogin() {
  window.location.href = `${API}/github/login`;
}