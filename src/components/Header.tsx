import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isGenerator = location.pathname === "/generator";

  const navLinks = [
    { name: "SHOP", href: "/#shop" },
    { name: "COLLECTIONS", href: "/#collections" },
    { name: "CUSTOMIZE", href: "/generator" },
    { name: "ABOUT", href: "/#about" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (
    <header className="border-b border-white/10 bg-black/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="h-10 w-20 md:h-12 md:w-24">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("/generator") ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[14px] uppercase tracking-wider transition-colors ${
                  isGenerator
                    ? "text-[#ea2525]"
                    : "text-white hover:text-[#ea2525]"
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] uppercase tracking-wider text-white transition-colors hover:text-[#ea2525]"
              >
                {link.name}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <Search className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <ShoppingBag className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-4">
            {navLinks.map((link) =>
              link.href.startsWith("/generator") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`py-2 text-[16px] uppercase tracking-widest transition-colors ${
                    isGenerator
                      ? "text-[#ea2525]"
                      : "text-white hover:text-[#ea2525]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 text-[16px] uppercase tracking-widest text-white transition-colors hover:text-[#ea2525]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
