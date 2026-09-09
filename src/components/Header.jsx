// ===== MINGGU 1 — Setup Project & Struktur Komponen =====
// ===== Diupdate MINGGU 7 (Context keranjang) & MINGGU 14 (status login) =====
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const totalItem = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-500 to-rose-400 shadow-md">
      <h1 className="font-bold text-lg text-white tracking-wide">🌸 MiniShopJS</h1>
      <nav className="flex gap-4 items-center text-white">
        <Link to="/" className="!text-white hover:!text-pink-100">Beranda</Link>
        <Link to="/keranjang" className="!text-white hover:!text-pink-100">Keranjang ({totalItem})</Link>
        {user ? (
          <> 
            <span className="text-sm text-pink-100">{user.email}</span>
            <button onClick={logout} className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full text-sm transition">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="!text-white hover:!text-pink-100">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
