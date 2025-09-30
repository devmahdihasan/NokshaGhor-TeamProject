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
<<<<<<< HEAD

=======
      <FeaturedProduct  products={products}/>
      <ProductPage />
>>>>>>> 3b3eca5b8eef4fd4d641946820f554438b1b066d
      <Footer />
    </>
  );
}
