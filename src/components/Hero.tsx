import { Button } from "./ui/button";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#ea2525]">
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center text-white">
        <div className="mb-8 h-32 w-56 md:h-40 md:w-72">
          <Logo />
        </div>
        <p className="mb-4 max-w-3xl text-[24px] uppercase tracking-widest">
          STREETWEAR REDEFINED
        </p>
        <p className="mb-12 max-w-2xl text-[18px] tracking-wide opacity-90">
          Bold designs. Urban culture. Unapologetic style.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#ea2525] hover:bg-white/90 px-12 py-6 text-lg uppercase tracking-wider">
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#ea2525] px-12 py-6 text-lg uppercase tracking-wider">
            View Collection
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-20 left-1/2 h-px w-[200px] -translate-x-1/2 bg-white opacity-50" />
    </div>
  );
}