import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="bg-black px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-[48px] uppercase tracking-[0.2em] text-white">JOIN THE MOVEMENT</h2>
        <p className="mb-12 text-[16px] uppercase tracking-wide text-white/70">
          BE THE FIRST TO GET EXCLUSIVE DROPS & UPDATES
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:gap-4">
          <Input
            type="email"
            placeholder="YOUR EMAIL"
            className="flex-1 border-2 border-white bg-transparent px-6 py-6 text-white placeholder:text-white/50 uppercase tracking-wider"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" size="lg" className="bg-[#ea2525] text-white hover:bg-[#d42020] px-12 py-6 text-[16px] uppercase tracking-wider">
            SUBSCRIBE
          </Button>
        </form>
        <p className="mt-6 text-[12px] uppercase tracking-widest text-white/50">
          No spam. Just heat.
        </p>
      </div>
    </section>
  );
}