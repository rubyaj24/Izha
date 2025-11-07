import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedCollections } from "./components/FeaturedCollections";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { BrandStory } from "./components/BrandStory";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProduct />
        <FeaturedCollections />
        <BrandStory />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}