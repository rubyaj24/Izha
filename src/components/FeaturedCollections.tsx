import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function FeaturedCollections() {
  const collections = [
    {
      title: "ESSENTIALS",
      description: "Core pieces for your daily rotation",
      image: "streetwear essentials",
    },
    {
      title: "LIMITED DROPS",
      description: "Exclusive releases you can't miss",
      image: "streetwear limited edition",
    },
    {
      title: "ACCESSORIES",
      description: "Complete your streetwear look",
      image: "streetwear accessories",
    },
  ];

  return (
    <section id="collections" className="bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[48px] uppercase tracking-[0.2em] text-white">COLLECTIONS</h2>
          <div className="mx-auto h-[2px] w-[100px] bg-[#ea2525]" />
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {collections.map((collection) => (
            <div key={collection.title} className="group cursor-pointer">
              <div className="relative mb-6 aspect-[3/4] overflow-hidden border-4 border-white">
                <ImageWithFallback
                  src={`https://images.unsplash.com/search/photo?query=${collection.image}&crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzYxODM3MTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral`}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-[#ea2525]/0 transition-all group-hover:bg-[#ea2525]/30" />
              </div>
              <h3 className="mb-2 text-[24px] uppercase tracking-wider text-white">{collection.title}</h3>
              <p className="mb-4 text-[14px] uppercase tracking-widest text-white/70">
                {collection.description}
              </p>
              <Button variant="link" className="p-0 text-[#ea2525] uppercase tracking-wider hover:text-white">
                EXPLORE →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}