import { products } from "../../../data/products";
import { Product } from "../../../types/product";
import Image from "next/image";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p: Product) => p.id === parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Product Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        </div>

        {/* Thumbnail Gallery */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />

              {/* Thumbnail Gallery */}
              <div className="flex space-x-2 mt-4">
                <Image
                  src="/images/auraflow-headphones.avif"
                  alt="Thumbnail 1"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded"
                />
                <Image
                  src="/images/chronofit-watch.avif"
                  alt="Thumbnail 2"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded"
                />
                <Image
                  src="/images/ergoglide-chair.avif"
                  alt="Thumbnail 3"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded"
                />
                <Image
                  src="/images/serenity-throw.avif"
                  alt="Thumbnail 4"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
              <p className="text-2xl text-orange-600 mb-4">${product.price}</p>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-gray-600 mr-4">Category</span>
                  <span className="text-orange-600">{product.category}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-4">Availability</span>
                  <span className="text-green-600">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                {product.description ||
                  "This is a premium quality product with excellent features."}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <button className="px-3 py-2 border border-gray-300 rounded-l">
                  -
                </button>
                <span className="px-4 py-2 border-t border-b border-gray-300">
                  1
                </span>
                <button className="px-3 py-2 border border-gray-300 rounded-r">
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-amber-500 cursor-pointer transition-colors mb-6 ">
                ADD TO CART
              </button>

              {/* Social Sharing */}
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:cursor-pointer">
                  f
                </button>
                <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:cursor-pointer">
                  t
                </button>
                <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:cursor-pointer">
                  in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
