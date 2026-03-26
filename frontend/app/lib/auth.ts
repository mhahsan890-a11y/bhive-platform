export function getAuth() {
  if (typeof window === "undefined") {
    return { token: null, role: null, email: null };
  }

  return {
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
    email: localStorage.getItem("email"),
  };
}

export function clearAuth() {
  if (typeof window === "undefined") return;

  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("email");
}

export function isAdmin() {
  const auth = getAuth();
  return !!auth.token && auth.role === "admin";
}

export function isTenant() {
  const auth = getAuth();
  return !!auth.token && auth.role === "tenant";
}