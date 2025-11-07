import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "SHOP", href: "#shop" },
    { name: "COLLECTIONS", href: "#collections" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo - Left */}
        <div className="h-10 w-20 md:h-12 md:w-24">
          <Logo />
        </div>
        
        {/* Desktop Navigation - Center/Right */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#shop" className="text-white hover:text-[#ea2525] transition-colors text-[14px] uppercase tracking-wider">
            SHOP
          </a>
          <a href="#collections" className="text-white hover:text-[#ea2525] transition-colors text-[14px] uppercase tracking-wider">
            COLLECTIONS
          </a>
          <a href="#about" className="text-white hover:text-[#ea2525] transition-colors text-[14px] uppercase tracking-wider">
            ABOUT
          </a>
          <a href="#contact" className="text-white hover:text-[#ea2525] transition-colors text-[14px] uppercase tracking-wider">
            CONTACT
          </a>
        </nav>

        {/* Right Side - Icons & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
            <ShoppingBag className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#ea2525] transition-colors text-[16px] uppercase tracking-widest py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}