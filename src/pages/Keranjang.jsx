// ===== MINGGU 8 — Halaman Keranjang & Hitung Total =====
// ===== Diupdate dengan hapusDariKeranjang & ubahJumlah (tugas mingguan Minggu 8) =====
import { useCart } from "../context/CartContext";
import Button from "../components/Button";

function Keranjang() {
  const { cartItems, hapusDariKeranjang, ubahJumlah } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cartItems.length === 0) {
    return <p className="p-4 text-pink-600">Keranjang kamu masih kosong.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-pink-700">Keranjang Belanja</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b border-pink-200 py-3">
          <div>
            <p className="font-medium text-pink-900">{item.title}</p>
            <div className="flex items-center gap-2 mt-1">
              <button onClick={() => ubahJumlah(item.id, -1)} className="px-2 border border-pink-300 text-pink-600 rounded hover:bg-pink-50">
                -
              </button>
              <span>{item.qty}</span>
              <button onClick={() => ubahJumlah(item.id, 1)} className="px-2 border border-pink-300 text-pink-600 rounded hover:bg-pink-50">
                +
              </button>
            </div>
            <p className="text-pink-500 text-sm mt-1">
              Rp {(item.price * item.qty * 15000).toLocaleString("id-ID")}
            </p>
          </div>
          <Button variant="secondary" onClick={() => hapusDariKeranjang(item.id)}>
            Hapus
          </Button>
        </div>
      ))}
      <p className="mt-4 font-bold text-lg text-pink-700">
        Total: Rp {(total * 15000).toLocaleString("id-ID")}
      </p>
    </div>
  );
}

export default Keranjang;
