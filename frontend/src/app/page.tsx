import Nav from "../app/nav";
import Hero from "../app/hero";
import Footer from "../app/footer";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import FeaturedProduct from "./FeaturedProduct";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

     <FeaturedProduct products={products} />
      <Footer />
    </>
  );
}
