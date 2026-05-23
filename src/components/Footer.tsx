import { Instagram, Facebook, Twitter } from "lucide-react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 h-14 w-28">
              <Logo />
            </div>
            <p className="text-[14px] uppercase tracking-wide text-white/60">
              Streetwear culture
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-[16px] uppercase tracking-wider text-white">Shop</h4>
            <ul className="space-y-2 text-[14px] uppercase tracking-wide text-white/60">
              <li>
                <Link to="/#shop" className="hover:text-[#ea2525] transition-colors">
                  New Drops
                </Link>
              </li>
              <li>
                <Link to="/#collections" className="hover:text-[#ea2525] transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/#shop" className="hover:text-[#ea2525] transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-[16px] uppercase tracking-wider text-white">About</h4>
            <ul className="space-y-2 text-[14px] uppercase tracking-wide text-white/60">
              <li>
                <Link to="/#about" className="hover:text-[#ea2525] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/#community" className="hover:text-[#ea2525] transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-[#ea2525] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-[16px] uppercase tracking-wider text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ea2525] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ea2525] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ea2525] transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-[12px] uppercase tracking-widest text-white/40">&copy; 2025 izha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}