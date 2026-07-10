const API =
  import.meta.env.VITE_API_URL;
  
export async function githubLogin() {
  window.location.href = `${API}/github/login`;
}