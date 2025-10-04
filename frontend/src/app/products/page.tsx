// src/app/products/page.tsx
"use client";

import { useState, useEffect } from "react";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import LoadingOverlay from "../../components/LoadingSpinner";
import Nav from "../nav";
import Hero from "../hero";
import Footer from "../footer";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number] | null
  >(null);
  const [showFilters, setShowFilters] = useState(false); // 👈 Mobile filter toggle
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const [loading, setLoading] = useState(false);
  const productsPerPage = 12;

  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;
    const priceMatch =
      !selectedPriceRange ||
      (product.price >= selectedPriceRange[0] &&
        product.price <= selectedPriceRange[1]);
    return categoryMatch && priceMatch;
  });

  filteredProducts.sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const categories = [...new Set(products.map((p) => p.category))];

  const handlePageChange = (page: number) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 300);
  };

  const handleCategoryChange = (category: string) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedCategory((prev) => (prev === category ? null : category));
      setCurrentPage(1);
      setLoading(false);
    }, 300);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedPriceRange((prev) =>
        prev && prev[0] === min && prev[1] === max ? null : [min, max]
      );
      setCurrentPage(1);
      setLoading(false);
    }, 300);
  };

  const handleSortChange = (order: "asc" | "desc") => {
    setLoading(true);
    setTimeout(() => {
      setSortOrder(order);
      setCurrentPage(1);
      setLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-3xl font-bold mb-8 mt-6">
          OUR PRODUCTS
        </h1>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full py-2 bg-gray-100 text-gray-700 rounded-md font-medium"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar - Hidden on mobile unless toggled */}
          <div
            className={`lg:w-1/4 w-full lg:block ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-gray-50 p-4 rounded-lg">
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">CATEGORIES</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => {
                          handleCategoryChange(category);
                          if (window.innerWidth < 1024) setShowFilters(false);
                        }}
                        className={`flex items-center w-full text-left p-2 rounded text-sm ${
                          selectedCategory === category
                            ? "text-blue-600 font-medium"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        <span className="mr-2">
                          {selectedCategory === category ? "✓" : "○"}
                        </span>
                        {category} (
                        {products.filter((p) => p.category === category).length}
                        )
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">FILTER BY PRICE</h3>
                <div className="space-y-2">
                  {[
                    [0, 50],
                    [51, 100],
                    [101, 200],
                    [201, 500],
                  ].map(([min, max]) => (
                    <button
                      key={`${min}-${max}`}
                      onClick={() => {
                        handlePriceRangeChange(min, max);
                        if (window.innerWidth < 1024) setShowFilters(false);
                      }}
                      className={`flex items-center w-full text-left p-2 rounded text-sm ${
                        selectedPriceRange &&
                        selectedPriceRange[0] === min &&
                        selectedPriceRange[1] === max
                          ? "bg-blue-100 text-blue-600 border border-blue-300"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      ${min} - ${max}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-semibold text-lg mb-3">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {["New", "Sale", "Popular", "Trending"].map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs hover:bg-gray-300"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4 w-full">
            {/* Results and Sort */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
              <div className="text-sm">
                Showing {indexOfFirstProduct + 1}-
                {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                {filteredProducts.length} results
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm whitespace-nowrap">
                  Sort by Price:
                </span>
                <select
                  value={sortOrder}
                  onChange={(e) =>
                    handleSortChange(e.target.value as "asc" | "desc")
                  }
                  className="px-2 py-1 border border-gray-300 rounded text-sm"
                >
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p>No products found.</p>
                </div>
              )}
            </div>

            {/* Previous / Next Buttons Only - No Page Number */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-orange-500 text-white hover:bg-orange-600 cursor-pointer"
                  }`}
                >
                  Previous
                </button>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                    currentPage === totalPages
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-orange-500 text-white hover:bg-orange-600 cursor-pointer"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>

        {loading && <LoadingOverlay />}
      </div>
      <Footer />
    </div>
  );
}
