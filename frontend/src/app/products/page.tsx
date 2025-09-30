"use client";

import { useState, useEffect } from "react";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import LoadingOverlay from "../../components/LoadingSpinner";
import Nav from "../../app/nav";
import Hero from "../../app/hero";
import Footer from "../../app/footer";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number] | null
  >(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  const [loading, setLoading] = useState(false); // Loading for all actions

  const productsPerPage = 9;

  // Filter and sort products
  let filteredProducts = products.filter((product) => {
    // Category filter
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;

    // Price filter
    const priceMatch =
      !selectedPriceRange ||
      (product.price >= selectedPriceRange[0] &&
        product.price <= selectedPriceRange[1]);

    return categoryMatch && priceMatch;
  });

  // Sort products
  filteredProducts.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  // Calculate pagination for filtered products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  // Function to handle page change with loading
  const handlePageChange = (page: number) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 500);
  };

  // Function to handle category change with loading
  const handleCategoryChange = (category: string) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedCategory((prev) => (prev === category ? null : category));
      setCurrentPage(1); // Reset to first page
      setLoading(false);
    }, 500);
  };

  // Function to handle price range change with loading
  const handlePriceRangeChange = (min: number, max: number) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedPriceRange((prev) =>
        prev && prev[0] === min && prev[1] === max ? null : [min, max]
      );
      setCurrentPage(1); // Reset to first page
      setLoading(false);
    }, 500);
  };

  // Function to handle sort change with loading
  const handleSortChange = (order: "asc" | "desc") => {
    setLoading(true);
    setTimeout(() => {
      setSortOrder(order);
      setCurrentPage(1); // Reset to first page
      setLoading(false);
    }, 500);
  };

  return (
    <div className="container mx-auto px-0 py-8">
      <Nav />
      <Hero />
      <h1 className=" text-center text-4xl font-bold mb-8 mt-15">
        OUR PRODUCTS
      </h1>

      <div className="flex">
        <div className="w-1/5 pr-8">
          {/* Categories */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">CATEGORIES</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleCategoryChange(category)}
                    className={`flex items-center w-full text-left p-2 rounded ${
                      selectedCategory === category
                        ? "text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-2">
                      {selectedCategory === category ? "✓" : "○"}
                    </span>
                    {category} (
                    {products.filter((p) => p.category === category).length})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">FILTER BY PRICE</h3>
            <div className="space-y-2">
              <button
                onClick={() => handlePriceRangeChange(0, 50)}
                className={`flex items-center w-full text-left p-2 rounded ${
                  selectedPriceRange &&
                  selectedPriceRange[0] === 0 &&
                  selectedPriceRange[1] === 50
                    ? "bg-blue-100 text-blue-600 border border-blue-300"
                    : "hover:bg-gray-100"
                }`}
              >
                $0 - $50
              </button>
              <button
                onClick={() => handlePriceRangeChange(51, 100)}
                className={`flex items-center w-full text-left p-2 rounded ${
                  selectedPriceRange &&
                  selectedPriceRange[0] === 51 &&
                  selectedPriceRange[1] === 100
                    ? "bg-blue-100 text-blue-600 border border-blue-300"
                    : "hover:bg-gray-100"
                }`}
              >
                $51 - $100
              </button>
              <button
                onClick={() => handlePriceRangeChange(101, 200)}
                className={`flex items-center w-full text-left p-2 rounded ${
                  selectedPriceRange &&
                  selectedPriceRange[0] === 101 &&
                  selectedPriceRange[1] === 200
                    ? "bg-blue-100 text-blue-600 border border-blue-300"
                    : "hover:bg-gray-100"
                }`}
              >
                $101 - $200
              </button>
              <button
                onClick={() => handlePriceRangeChange(201, 500)}
                className={`flex items-center w-full text-left p-2 rounded ${
                  selectedPriceRange &&
                  selectedPriceRange[0] === 201 &&
                  selectedPriceRange[1] === 500
                    ? "bg-blue-100 text-blue-600 border border-blue-300"
                    : "hover:bg-gray-100"
                }`}
              >
                $201 - $500
              </button>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-semibold text-lg mb-4">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
                New
              </button>
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
                Sale
              </button>
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
                Popular
              </button>
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
                Trending
              </button>
            </div>
          </div>
        </div>

        {/* Main Content - Products */}
        <div className="w-4/5">
          {/* Results and Sort */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-sm">
                Showing {indexOfFirstProduct + 1}-
                {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                {filteredProducts.length} results
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm">Sort by Price:</span>
              <select
                value={sortOrder}
                onChange={(e) =>
                  handleSortChange(e.target.value as "asc" | "desc")
                }
                className="px-2 py-1 border border-gray-300 rounded"
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p>No products found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Pagination - Next/Previous buttons only */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 border border-gray-300 rounded ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                Previous
              </button>

              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border border-gray-300 rounded ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Loading Overlay - For all actions */}
        {loading && <LoadingOverlay />}
      </div>
      <Footer />
    </div>
  );
}
