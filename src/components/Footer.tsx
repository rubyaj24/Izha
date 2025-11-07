import { Instagram, Facebook, Twitter } from "lucide-react";
import { Logo } from "./Logo";

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
              <li><a href="#" className="hover:text-[#ea2525] transition-colors">New Drops</a></li>
              <li><a href="#" className="hover:text-[#ea2525] transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-[#ea2525] transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-[16px] uppercase tracking-wider text-white">About</h4>
            <ul className="space-y-2 text-[14px] uppercase tracking-wide text-white/60">
              <li><a href="#" className="hover:text-[#ea2525] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#ea2525] transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-[#ea2525] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-[16px] uppercase tracking-wider text-white">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-[#ea2525] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#ea2525] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#ea2525] transition-colors">
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