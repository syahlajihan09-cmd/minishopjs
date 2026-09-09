// ===== MINGGU 14 — Proteksi Halaman (Protected Route) =====
// AuthContext menyimpan status login pengguna, dipakai oleh ProtectedRoute.
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  function login(email) {
    setUser({ email });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
