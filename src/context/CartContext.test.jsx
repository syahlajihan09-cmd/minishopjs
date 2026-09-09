// ===== MINGGU 15 — Testing Komponen =====
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { CartProvider, useCart } from "./CartContext";

describe("CartContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("menambahkan produk ke keranjang", () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.tambahKeKeranjang({ id: 1, title: "Kaos", price: 75000 });
    });

    expect(result.current.cartItems.length).toBe(1);
    expect(result.current.cartItems[0].title).toBe("Kaos");
  });

  it("menghapus produk dari keranjang", () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.tambahKeKeranjang({ id: 2, title: "Topi", price: 40000 });
    });
    act(() => {
      result.current.hapusDariKeranjang(2);
    });

    expect(result.current.cartItems.length).toBe(0);
  });
});
