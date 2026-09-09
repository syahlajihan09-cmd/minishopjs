// ===== MINGGU 2 — Props & Data Dummy Produk (versi awal) =====
// ===== Diupdate MINGGU 3 (styling Tailwind), MINGGU 5 (Link ke detail), =====
// ===== MINGGU 7 (tombol Tambah ke Keranjang tersambung ke Context), =====
// ===== MINGGU 10 (field disesuaikan dengan Fake Store API: title/price/image) =====
import { Link } from "react-router-dom";
import Button from "./Button";
import { useCart } from "../context/CartContext";

function ProdukCard({ produk }) {
  const { tambahKeKeranjang } = useCart();

  return (
    <div className="border border-pink-200 bg-white rounded-lg p-4 shadow hover:shadow-lg hover:border-pink-400 transition">
      <img
        src={produk.image}
        alt={produk.title}
        className="w-full h-40 object-contain rounded"
      />
      <h3 className="font-semibold mt-2 line-clamp-1 text-pink-900">{produk.title}</h3>
      <p className="text-pink-600 font-medium">
        Rp {(produk.price * 15000).toLocaleString("id-ID")}
      </p>

      <div className="flex gap-2 mt-3">
        <Button onClick={() => tambahKeKeranjang(produk)}>
          Tambah ke Keranjang
        </Button>
        <Link to={`/produk/${produk.id}`}>
          <Button variant="secondary">Lihat Detail</Button>
        </Link>
      </div>
    </div>
  );
}

export default ProdukCard;
