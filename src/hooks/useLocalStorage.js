// ===== MINGGU 9 — Custom Hook & Optimasi State =====
// Custom hook untuk menyimpan state ke localStorage, agar data tidak hilang saat refresh.
import { useState, useEffect } from "react";

export function useLocalStorage(key, nilaiAwal) {
  const [nilai, setNilai] = useState(() => {
    const tersimpan = localStorage.getItem(key);
    return tersimpan ? JSON.parse(tersimpan) : nilaiAwal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(nilai));
  }, [key, nilai]);

  return [nilai, setNilai];
}
