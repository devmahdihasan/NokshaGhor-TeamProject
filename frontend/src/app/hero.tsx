// app/components/hero.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/hero1.jpg", "/hero2.webp", "/hero3.jpg", "/hero4.webp"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full max-w-7xl mx-auto mt-4 rounded-2xl overflow-hidden shadow-lg">
      {/* Hero Image */}
      <div className="relative w-full h-[350px] md:h-[450px] transition-all duration-500 ease-in-out">
        <Image
          src={images[currentIndex]}
          alt={`Hero Banner ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        {/* Left Arrow SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        {/* Right Arrow SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-orange-500" : "bg-gray-300"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </section>
  );
}
