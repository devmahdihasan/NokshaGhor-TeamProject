// app/components/nav.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          NokshaGhor
        </Link>

        {/* Search Bar */}
        <div className="flex-1 hidden md:flex">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 border rounded-l-full focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r-full hover:bg-orange-600 transition">
            Search
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center gap-1 text-gray-700 hover:text-orange-500"
            >
              {/* Menu Icon (SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <span>Categories</span>

              {/* Down Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isCategoriesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer">Electronics</li>
                  <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer">Fashion</li>
                  <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer">Home & Living</li>
                  <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer">Beauty</li>
                  <li className="px-4 py-2 hover:bg-orange-50 cursor-pointer">Sports</li>
                </ul>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link href="/cart" className="relative">
            {/* Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700 hover:text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h12m-5 4a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>

            {/* Cart Badge */}
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>

          {/* User Account */}
          <Link href="/account" className="flex items-center gap-1 text-gray-700 hover:text-orange-500">
            {/* User Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A9 9 0 1118.88 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Account</span>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>
    </header>
  );
}
