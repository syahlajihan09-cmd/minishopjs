// ===== MINGGU 15 — Testing Komponen =====
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import FormLogin from "./FormLogin";
import { AuthProvider } from "../context/AuthContext";

function renderWithProviders(ui) {
  return render(
    <BrowserRouter>
      <AuthProvider>{ui}</AuthProvider>
    </BrowserRouter>
  );
}

describe("FormLogin", () => {
  it("menampilkan error jika email tidak valid", () => {
    renderWithProviders(<FormLogin />);
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "emailsalah" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Login" }));
    expect(screen.getByText("Email tidak valid")).toBeInTheDocument();
  });

  it("menampilkan error jika password kurang dari 6 karakter", () => {
    renderWithProviders(<FormLogin />);
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@email.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Login" }));
    expect(screen.getByText("Password minimal 6 karakter")).toBeInTheDocument();
  });
});
