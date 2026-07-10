import { getCurrentUser } from "./authService";

export function requireAuth(
  onAuthenticated: () => void,
  onUnauthenticated: () => void
) {
  const user = getCurrentUser();

  if (user) {
    onAuthenticated();
  } else {
    onUnauthenticated();
  }
}