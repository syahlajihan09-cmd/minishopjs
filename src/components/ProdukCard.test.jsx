// ===== MINGGU 15 — Testing Komponen =====
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import ProdukCard from "./ProdukCard";
import { CartProvider } from "../context/CartContext";

function renderWithProviders(ui) {
  return render(
    <BrowserRouter>
      <CartProvider>{ui}</CartProvider>
    </BrowserRouter>
  );
}

describe("ProdukCard", () => {
  it("menampilkan nama produk dengan benar", () => {
    const produk = { id: 1, title: "Kaos Polos", price: 75000, image: "" };
    renderWithProviders(<ProdukCard produk={produk} />);
    expect(screen.getByText("Kaos Polos")).toBeInTheDocument();
  });

  it("menampilkan harga produk", () => {
    const produk = { id: 2, title: "Celana Jeans", price: 100, image: "" };
    renderWithProviders(<ProdukCard produk={produk} />);
    expect(screen.getByText(/Rp/)).toBeInTheDocument();
  });

  it("menampilkan tombol Tambah ke Keranjang", () => {
    const produk = { id: 3, title: "Topi", price: 50, image: "" };
    renderWithProviders(<ProdukCard produk={produk} />);
    expect(screen.getByText("Tambah ke Keranjang")).toBeInTheDocument();
  });

  it("menampilkan tombol Lihat Detail", () => {
    const produk = { id: 4, title: "Jaket", price: 200, image: "" };
    renderWithProviders(<ProdukCard produk={produk} />);
    expect(screen.getByText("Lihat Detail")).toBeInTheDocument();
  });
});
