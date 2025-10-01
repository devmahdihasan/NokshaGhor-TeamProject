import Nav from "../app/nav";
import Hero from "../app/hero";
import Footer from "../app/footer";
import ProductPage from "../app/products/page";

import { products } from "@/data/products";
import FeaturedProduct from "../app/FeaturedProduct"; // make sure this path is correct

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* Featured products section */}
      <FeaturedProduct products={products} />

      {/* Full product listing */}
      <ProductPage />

      <Footer />
    </>
  );
}
