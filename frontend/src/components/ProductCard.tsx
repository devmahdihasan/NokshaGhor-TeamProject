import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
        <div className="relative h-64 w-full mb-4 overflow-hidden">
          <Image
            src={product.image || "/images/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover rounded transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* {product.sale && (
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-bold">
            SALE
          </div>
        )} */}

        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">${product.price}</span>
          <span className="text-yellow-500">★ {product.rating}</span>
        </div>
      </div>
    </Link>
  );
}
