import Nav from '../app/nav'
import Hero from '../app/hero'
import Footer from '../app/footer'
import ProductPage from '../app/products/page'
import { products } from "../data/products";
import FeaturedProduct from './FeaturedProduct';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <FeaturedProduct products={products} />
      <ProductPage />
      <Footer />
    </>
  );
}
