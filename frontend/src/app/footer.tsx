// src/app/footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
        
        {/* Customer Care */}
        <div>
          <h3
            className="font-bold text-gray-900 mb-4 flex justify-between items-center md:mb-4 cursor-pointer md:cursor-default"
            onClick={() => toggleSection("customer")}
          >
            Customer Care
            <ChevronDown className={`md:hidden transition-transform ${openSection === "customer" ? "rotate-180" : ""}`} />
          </h3>
          <ul className={`space-y-2 md:block ${openSection === "customer" ? "block" : "hidden md:block"}`}>
            <li><Link href="/help-center" className="  hover:text-orange-500">Help Center</Link></li>
            <li><Link href="/how-to-buy" className="  hover:text-orange-500">How to Buy</Link></li>
            <li><Link href="/returns" className="  hover:text-orange-500">Returns & Refunds</Link></li>
            <li><Link href="/contact" className="  hover:text-orange-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* Nokshaghar Info */}
        <div>
          <h3
            className="font-bold text-gray-900 mb-4 flex justify-between items-center md:mb-4 cursor-pointer md:cursor-default"
            onClick={() => toggleSection("company")}
          >
            Nokshaghar
            <ChevronDown className={`md:hidden transition-transform ${openSection === "company" ? "rotate-180" : ""}`} />
          </h3>
          <ul className={`space-y-2 md:block ${openSection === "company" ? "block" : "hidden md:block"}`}>
            <li><Link href="/about" className="  hover:text-orange-500">About Us</Link></li>
            <li><Link href="/careers" className="  hover:text-orange-500">Careers</Link></li>
            <li><Link href="/terms" className="  hover:text-orange-500">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="  hover:text-orange-500">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Logo + Social Media */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex flex-col items-start space-y-3">
            <Image src="/logo.jpg" alt="Nokshaghar Logo" width={150} height={40} />
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <Image src="/icons/facebook.jpg" alt="Facebook" width={32} height={32} />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Image src="/icons/instagram.png" alt="Instagram" width={32} height={32} />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Image src="/icons/twitter.webp" alt="Twitter" width={32} height={32} />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Image src="/icons/linkedin.webp" alt="LinkedIn" width={32} height={32} />
              </Link>
            </div>
          </div>
        </div>

        {/* App Download */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Download App</h3>
          <div className="flex flex-row space-y-2">
            <Link href="https://play.google.com" target="_blank">
              <Image src="/apps/playstore.png" alt="Google Play" width={70} height={45} />
            </Link>
            <Link href="https://apps.apple.com" target="_blank">
              <Image src="/apps/appstore.png" alt="App Store" width={160} height={60} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 text-center text-gray-600 text-xs py-4">
        © {new Date().getFullYear()} Nokshaghar. All rights reserved.
      </div>
    </footer>
  );
}
