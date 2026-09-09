// ===== MINGGU 3 — Styling & Komponen Reusable =====
function Button({ children, onClick, variant = "primary", type = "button" }) {
  const base = "px-4 py-2 rounded font-medium transition";
  const styles = {
    primary: "bg-pink-500 text-white hover:bg-pink-600",
    secondary: "bg-pink-100 text-pink-700 hover:bg-pink-200",
  };
  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
