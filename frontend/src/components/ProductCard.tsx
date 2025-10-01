// src/components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
        {/* Larger Square Image */}
        <div className="aspect-square relative mb-3 overflow-hidden rounded-md">
          <Image
            src={product.image || "/images/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-200 hover:scale-105"
          />
        </div>

        {/* Title - Larger, readable */}
        <h3 className="font-semibold text-base mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Price + Rating - Clear & Balanced */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-gray-900">
            ৳{product.price}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}