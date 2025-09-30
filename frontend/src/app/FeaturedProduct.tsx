import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";

interface FeaturedProductProps {
  products?: Product[]; // Make it optional to avoid strict errors
}

export default function FeaturedProduct({ products }: FeaturedProductProps) {
  // Fallback to an empty array if products is undefined
  const featuredProducts = products?.slice(0, 4) ?? [];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>

      {featuredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No featured products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
