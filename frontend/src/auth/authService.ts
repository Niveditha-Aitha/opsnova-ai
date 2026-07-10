import type { LoginData, RegisterData, User } from "./authTypes";

const USERS_KEY = "opsnova_users";
const CURRENT_USER_KEY = "opsnova_current_user";

function getUsers(): User[] {
  const data = localStorage.getItem(USERS_KEY);

  if (!data) return [];

  return JSON.parse(data);
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function register(data: RegisterData) {
  const users = getUsers();

  const exists = users.find(
    (u) => u.email.toLowerCase() === data.email.toLowerCase()
  );

  if (exists) {
    return {
      success: false,
      message: "Account already exists.",
    };
  }

  const newUser: User = {
    id: Date.now().toString(),
    name: data.name,
    email: data.email,
    password: data.password,
    company: data.company,
    designation: data.designation,
  };

  users.push(newUser);

  saveUsers(users);

  return {
    success: true,
    message: "Account created successfully.",
  };
}

export function login(data: LoginData) {
  const users = getUsers();

  const user = users.find(
    (u) => u.email.toLowerCase() === data.email.toLowerCase()
  );

  if (!user) {
    return {
      success: false,
      message: "Account doesn't exist.",
    };
  }

  if (user.password !== data.password) {
    return {
      success: false,
      message: "Incorrect password.",
    };
  }

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
    })
  );

  return {
    success: true,
    message: "Login successful.",
    user,
  };
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getCurrentUser() {
  const user = localStorage.getItem(CURRENT_USER_KEY);

  if (!user) return null;

  return JSON.parse(user);
}

export function isLoggedIn() {
  return getCurrentUser() !== null;
}