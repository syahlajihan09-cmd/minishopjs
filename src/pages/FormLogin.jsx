// ===== MINGGU 13 — Form Registrasi/Login dengan Validasi =====
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function FormLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email.includes("@")) {
      setError("Email tidak valid");
      return;
    }
    if (form.password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    setError("");
    login(form.email);
    navigate("/");
  }

  return (
    <div className="p-6 max-w-sm mx-auto mt-6 bg-white border border-pink-200 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-pink-700">Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Email"
          className="border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 p-2 w-full mb-2 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 p-2 w-full mb-2 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded w-full transition">
          Login
        </button>
      </form>
    </div>
  );
}

export default FormLogin;
