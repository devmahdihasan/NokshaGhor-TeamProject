import Image from 'next/image';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full mb-4">
        <Image
          src={product.image || '/images/placeholder.jpg'}
          alt={product.name}
          fill
          className="object-cover rounded"
        />
      </div>
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
        <span className="text-yellow-500">★ {product.rating}</span>
      </div>
      <button 
        className={`mt-4 w-full py-2 rounded transition-colors ${
          product.inStock 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!product.inStock}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
}