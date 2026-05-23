import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function GeneratorPromo() {
  return (
    <section className="bg-black px-4 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-[48px] uppercase tracking-[0.2em] text-white">
          DESIGN YOUR OWN
        </h2>
        <div className="mx-auto mb-8 h-[2px] w-[100px] bg-[#ea2525]" />
        <p className="mb-6 text-[20px] uppercase tracking-wide text-white/90">
          CUSTOM T-SHIRT
        </p>
        <p className="mb-12 text-[16px] leading-relaxed text-white/60">
          Upload your artwork, pick your colors, and see it in 3D before
          you order. Your design, your rules.
        </p>
        <Link to="/generator">
          <Button
            size="lg"
            className="border-2 border-white bg-transparent px-16 py-7 text-[18px] uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
          >
            START DESIGNING →
          </Button>
        </Link>
      </div>
    </section>
  );
}
