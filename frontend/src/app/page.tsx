import Nav from "../app/nav";
import Hero from "../app/hero";
import Footer from "../app/footer";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";  // ✅ fixed import

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>


      <Footer />
    </>
  );
}
