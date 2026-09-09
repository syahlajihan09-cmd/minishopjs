// ===== MINGGU 7 — Membuat Context Keranjang =====
// ===== Diupdate MINGGU 8 (hapusDariKeranjang, ubahJumlah) =====
// ===== Diupdate MINGGU 9 (pakai useLocalStorage agar data persisten) =====
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("keranjang", []);

  function tambahKeKeranjang(produk) {
    setCartItems((prev) => {
      const sudahAda = prev.find((item) => item.id === produk.id);
      if (sudahAda) {
        return prev.map((item) =>
          item.id === produk.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...produk, qty: 1 }];
    });
  }

  function hapusDariKeranjang(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  function ubahJumlah(id, delta) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{ cartItems, tambahKeKeranjang, hapusDariKeranjang, ubahJumlah }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
