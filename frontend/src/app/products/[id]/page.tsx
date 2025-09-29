// src/app/products/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { products } from '../../../data/products';
import Image from 'next/image';
import Link from 'next/link';
import LoadingSpinner from '../../../components/LoadingSpinner';
import Nav from '../../../app/nav';
import Footer from "../../../app/footer";


interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { id } = use(params);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productId = parseInt(id, 10);
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
        <LoadingSpinner />
        <p className="mt-4 text-gray-600">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-10 text-xl">Product not found.</div>;
  }

  const {
    name,
    price,
    description,
    image,
    images,
    category,
    inStock,
    keyFeatures,
    specifications,
  } = product;

  // Fallbacks
  const gallery = images && images.length > 0 ? images : [image];
  const features = keyFeatures && keyFeatures.length > 0 
    ? keyFeatures 
    : [`High-quality ${category} product`];

  const specs = specifications && specifications.length > 0 
    ? specifications 
    : [
        { feature: "Product Name", details: name },
        { feature: "Category", details: category },
        { feature: "Price", details: `৳${price}` },
        { feature: "Availability", details: inStock ? "In Stock" : "Out of Stock" },
      ];

  // Mock reviews
  const reviews = [
    { id: 1, rating: 5, comment: "Excellent quality and fast delivery!", author: "Customer", date: "2025-07-30" },
    { id: 2, rating: 4, comment: "Good value for money.", author: "User", date: "2025-07-28" },
  ];

  // Related products
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === category)
    .slice(0, 5);

  return (
    <div className="bg-white min-h-screen">
      <Nav /> 
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="container mx-auto flex items-center space-x-1 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>›</span>
          <Link href={`/categories/${category}`} className="hover:text-blue-600">{category}</Link>
          <span>›</span>
          <span className="text-gray-900">{name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Product Header */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Image Gallery */}
          <div className="lg:w-1/2">
            <div className="aspect-square relative bg-gray-100 rounded mb-4">
              <Image
                src={gallery[0]}
                alt={name}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {gallery.map((img, i) => (
                <div key={i} className="w-18 h-18 border rounded cursor-pointer flex-shrink-0">
                  <Image
                    src={img}
                    alt={`Gallery ${i}`}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info + Description */}
          <div className="lg:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold">{name}</h1>

            {/* Key Features */}
            <ul className="list-disc list-inside space-y-1 text-sm">
              {features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>

            {/* Price */}
            <div className="text-2xl font-bold text-red-600">৳{price}</div>

            {/* Add to Cart */}
            <div className="bg-gray-50 p-4 rounded">
              <div className="flex items-center space-x-2 mb-2">
                <button className="px-2 py-1 border">-</button>
                <span className="w-8 text-center">1</span>
                <button className="px-2 py-1 border">+</button>
                <button className="px-4 py-1 bg-yellow-500 text-black font-medium">+ ADD TO CART</button>
                <button className="px-4 py-1 border">BUY NOW</button>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Stock and price are subject to change.
              </p>
              <p className="text-xs text-gray-600">
                Images are for illustration only.
              </p>
            </div>

            {/* Availability */}
            <div className="mt-4">
              <p className="text-sm">
                <strong>Availability:</strong> <span className={inStock ? "text-green-600" : "text-red-600"}>
                  {inStock ? "In Stock" : "Out of Stock"}
                </span>
              </p>
            </div>

            {/* ✅ DESCRIPTION GOES HERE */}
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-2">Description</h2>
              <div className="prose max-w-none text-gray-700">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Specifications</h2>
          <div className="border rounded overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FEATURE</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DETAILS</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {specs.map((row, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Reviews</h2>
          <div className="space-y-4">
            {reviews.map(review => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex items-center mb-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                  <span className="text-sm text-gray-500 ml-2">by {review.author} on {review.date}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="text-blue-600 text-sm underline">Write a review</button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-6">Related products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {relatedProducts.map(p => (
              <div key={p.id} className="border rounded overflow-hidden bg-white">
                <div className="aspect-square relative">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-3">
                  <div className="text-xs text-gray-500">{p.category}</div>
                  <h3 className="text-sm font-medium mt-1 line-clamp-2">{p.name}</h3>
                  <div className="mt-2 flex items-center space-x-1">
                    <span className="text-red-600 font-bold">৳{p.price}</span>
                    {p.sale && (
                      <span className="text-gray-400 line-through text-xs">৳{p.price + 300}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default ProductPage;