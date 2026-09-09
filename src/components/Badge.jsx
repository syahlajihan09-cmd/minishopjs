// ===== MINGGU 3 — Styling & Komponen Reusable =====
function Badge({ text, color = "pink" }) {
  const colors = {
    red: "bg-red-100 text-red-700",
    green: "bg-green-100 text-green-700",
    pink: "bg-pink-100 text-pink-700",
  };
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${colors[color]}`}>
      {text}
    </span>
  );
}

export default Badge;
