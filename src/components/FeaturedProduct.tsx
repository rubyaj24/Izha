import imgOversizedTeeMockUp2 from "../imports/Frame2";

export function FeaturedProduct() {
  return (
    <section id="shop" className="bg-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-[50px] uppercase tracking-[0.15em] text-black">
            WATCH THE FREAKZ X IZHA MERCH
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
          {/* Product Images Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square overflow-hidden border-4 border-black bg-black/10">
              <div className="flex h-full items-center justify-center text-black">
                <p className="text-[20px] uppercase tracking-wider">FRONT</p>
              </div>
            </div>
            <div className="aspect-square overflow-hidden border-4 border-black bg-black/10">
              <div className="flex h-full items-center justify-center text-black">
                <p className="text-[20px] uppercase tracking-wider">BACK</p>
              </div>
            </div>
            <div className="aspect-square overflow-hidden border-4 border-black bg-black/10">
              <div className="flex h-full items-center justify-center text-black">
                <p className="text-[20px] uppercase tracking-wider">DETAIL</p>
              </div>
            </div>
            <div className="aspect-square overflow-hidden border-4 border-black bg-black/10">
              <div className="flex h-full items-center justify-center text-black">
                <p className="text-[20px] uppercase tracking-wider">SLEEVE</p>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center text-black">
            <h3 className="mb-6 text-[48px] uppercase tracking-wider">LIMITED DROP</h3>
            <div className="mb-8 space-y-4">
              <p className="text-[18px] uppercase tracking-wide">
                EXCLUSIVE COLLABORATION TEE
              </p>
              <p className="text-[16px] leading-relaxed opacity-90">
                Premium oversized tee featuring custom artwork and graphics.
                Limited to 300 pieces worldwide. Once they're gone, they're gone.
              </p>
              <div className="flex items-baseline gap-4">
                <span className="text-[40px] tracking-wider">$85</span>
                <span className="text-[20px] opacity-60 line-through">$120</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    className="border-2 border-black px-6 py-3 uppercase tracking-wider transition-all hover:bg-black hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button className="w-full bg-black py-4 text-[18px] uppercase tracking-wider transition-all hover:bg-white hover:text-black">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}