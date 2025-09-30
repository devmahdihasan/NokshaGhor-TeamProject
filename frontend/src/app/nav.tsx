// app/components/nav.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          NokshaGhor
        </Link>

       {/* 
<div className="relative hidden md:block">
  <button
    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
    className="flex items-center gap-1 text-gray-700 hover:text-orange-500"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    <span>Categories</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
*/}


        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200 ${
                  isActive ? "text-orange-500 font-semibold" : ""
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] bg-orange-500 w-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Search Bar (Desktop Only) */}
        <div className="flex-1 hidden md:flex max-w-lg">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full text-amber-300 px-4 py-2 border rounded-l-full focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r-full hover:bg-orange-600 transition">
            Search
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Categories Dropdown */}
         
          {/* Hamburger Menu (Mobile Only) */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-xl font-bold text-orange-500">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                      isActive ? "text-orange-500 bg-orange-50" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

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