// src/components/ProductSkeleton.tsx
import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4 mb-6">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Image Skeleton */}
        <div className="lg:w-1/2">
          <div className="aspect-square bg-gray-200 rounded mb-4"></div>
          <div className="flex space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>

        {/* Right: Info Skeleton */}
        <div className="lg:w-1/2 space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="mt-8">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/5"></div>
      </div>

      {/* Specs Skeleton */}
      <div className="mt-8">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="border rounded overflow-hidden">
          <div className="h-10 bg-gray-200"></div>
          <div className="h-10 bg-gray-100"></div>
          <div className="h-10 bg-gray-200"></div>
          <div className="h-10 bg-gray-100"></div>
        </div>
      </div>

      {/* Reviews Skeleton */}
      <div className="mt-8">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
      </div>

      {/* Related Products Skeleton */}
      <div className="mt-10">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="border rounded overflow-hidden bg-white">
              <div className="aspect-square bg-gray-200"></div>
              <div className="p-3">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;