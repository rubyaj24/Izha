import { Hero } from "./components/Hero";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { FeaturedCollections } from "./components/FeaturedCollections";
import { GeneratorPromo } from "./components/tshirt/GeneratorPromo";
import { BrandStory } from "./components/BrandStory";
import { Newsletter } from "./components/Newsletter";

export function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <FeaturedCollections />
      <GeneratorPromo />
      <BrandStory />
      <Newsletter />
    </main>
  );
}
