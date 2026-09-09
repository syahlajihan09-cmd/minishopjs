// ===== MINGGU 4 — React Router Dasar (versi awal) =====
// ===== Diupdate MINGGU 6 (Layout + halaman 404) =====
// ===== Diupdate MINGGU 7 (CartProvider) =====
// ===== Diupdate MINGGU 14 (AuthProvider + ProtectedRoute untuk /keranjang) =====
// ===== Diupdate MINGGU 16 (lazy loading halaman Keranjang) =====
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import DetailProduk from "./pages/DetailProduk";
import FormLogin from "./pages/FormLogin";
import FormRegister from "./pages/FormRegister";
import NotFound from "./pages/NotFound";
import "./App.css";

// Minggu 16: lazy load halaman Keranjang
const Keranjang = lazy(() => import("./pages/Keranjang"));

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/produk/:id" element={<DetailProduk />} />
              <Route path="/login" element={<FormLogin />} />
              <Route path="/register" element={<FormRegister />} />
              <Route
                path="/keranjang"
                element={
                  <ProtectedRoute>
                    <Suspense fallback={<p className="p-4">Memuat...</p>}>
                      <Keranjang />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
