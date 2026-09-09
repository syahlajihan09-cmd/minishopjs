// ===== MINGGU 10 — Fetch Data Produk dari API Publik (Fake Store API) =====
// ===== Diupdate MINGGU 11 (Pencarian & Filter Kategori) =====
// ===== Diupdate MINGGU 12 (Pagination) =====
import { useState, useEffect } from "react";
import ProdukCard from "../components/ProdukCard";

function Home() {
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Minggu 11: pencarian & filter kategori ---
  const [kataKunci, setKataKunci] = useState("");
  const [kategori, setKategori] = useState("");
  const [daftarKategori, setDaftarKategori] = useState([]);

  // --- Minggu 12: pagination ---
  const [halaman, setHalaman] = useState(1);
  const perHalaman = 8;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data produk");
        return res.json();
      })
      .then((data) => {
        setProduk(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setDaftarKategori(data));
  }, []);

  const produkTersaring = produk.filter((p) => {
    const cocokKataKunci = p.title.toLowerCase().includes(kataKunci.toLowerCase());
    const cocokKategori = kategori === "" || p.category === kategori;
    return cocokKataKunci && cocokKategori;
  });

  const totalHalaman = Math.ceil(produkTersaring.length / perHalaman);
  const produkHalamanIni = produkTersaring.slice(
    (halaman - 1) * perHalaman,
    halaman * perHalaman
  );

  useEffect(() => {
    setHalaman(1);
  }, [kataKunci, kategori]);

  if (loading) return <p className="p-4 text-pink-600">Memuat produk...</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          placeholder="Cari produk..."
          value={kataKunci}
          onChange={(e) => setKataKunci(e.target.value)}
          className="border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 p-2 rounded flex-1"
        />
        <select
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className="border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 p-2 rounded"
        >
          <option value="">Semua Kategori</option>
          {daftarKategori.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>

      {produkHalamanIni.length === 0 ? (
        <p>Produk tidak ditemukan.</p>
      ) : (
        <div className="grid-produk">
          {produkHalamanIni.map((p) => (
            <ProdukCard key={p.id} produk={p} />
          ))}
        </div>
      )}

      {totalHalaman > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            disabled={halaman === 1}
            onClick={() => setHalaman((h) => h - 1)}
            className="px-4 py-2 border border-pink-300 text-pink-600 rounded hover:bg-pink-50 disabled:opacity-40"
          >
            Sebelumnya
          </button>
          <span className="text-pink-700 font-medium">
            Halaman {halaman} dari {totalHalaman}
          </span>
          <button
            disabled={halaman === totalHalaman}
            onClick={() => setHalaman((h) => h + 1)}
            className="px-4 py-2 border border-pink-300 text-pink-600 rounded hover:bg-pink-50 disabled:opacity-40"
          >
            Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
