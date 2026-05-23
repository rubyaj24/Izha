import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function Layout() {
  return (
    <div className="min-h-screen">
      <div className="fixed left-0 right-0 top-0 z-50">
        <Header />
      </div>
      <main className="relative z-0 pt-28 md:pt-32">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
