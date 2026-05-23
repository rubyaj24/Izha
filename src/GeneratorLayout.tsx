import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function GeneratorLayout() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
