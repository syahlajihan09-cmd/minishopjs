// ===== MINGGU 5 — Route Parameter & Halaman Detail (versi awal pakai data dummy) =====
// ===== Diupdate MINGGU 10 (fetch detail produk dari Fake Store API) =====
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailProduk() {
  const { id } = useParams();
  const [produk, setProduk] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduk(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-4 text-pink-600">Memuat...</p>;
  if (!produk) return <p className="p-4">Produk tidak ditemukan</p>;

  return (
    <div className="p-4 max-w-md mx-auto bg-white border border-pink-200 rounded-xl shadow-sm mt-4">
      <img
        src={produk.image}
        alt={produk.title}
        className="w-full h-64 object-contain mb-4"
      />
      <h2 className="text-xl font-bold text-pink-900">{produk.title}</h2>
      <p className="text-pink-600 font-medium mt-2">
        Rp {(produk.price * 15000).toLocaleString("id-ID")}
      </p>
      <p className="mt-4 text-sm text-gray-700 pb-4">{produk.description}</p>
    </div>
  );
}

export default DetailProduk;
