// ===== MINGGU 6 — Layout Bersama & Halaman 404 =====
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="app">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
