// src/app/about/page.tsx
import Nav from '../../app/nav'
import Hero from '../../app/hero'
import Footer from '../../app/footer'

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen py-12 px-6 sm:px-10 md:px-20">
      <Nav />
      <Hero />
      {/* Page Title */}
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold">Nokshaghor</span>, where tradition meets elegance. 
          We are passionate about crafting timeless designs that bring 
          sophistication and authenticity to your lifestyle.
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-16 md:mb-20">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Nokshaghor is more than just a name—it is a story of tradition, creativity, 
          and passion. We believe that art has the power to connect people across 
          generations, and through our products, we try to capture the true spirit of 
          culture and craftsmanship. Our brand is built on the foundation of trust, 
          authenticity, and a deep respect for heritage. Every product we create or 
          deliver reflects not only beauty but also the timeless values that define 
          who we are. We combine modern designs with traditional artistry to bring you 
          collections that are both stylish and meaningful. Whether it is fashion, 
          home décor, or lifestyle products, we ensure that each piece tells a story 
          of dedication and hard work. At Nokshaghor, quality is never compromised, 
          and customer satisfaction is our highest priority. We work closely with 
          artisans and creative minds to promote local talent and share their skills 
          with the world. Our vision is to become a trusted platform where tradition 
          meets innovation, and where every customer feels a part of a greater journey. 
          Nokshaghor is not just a marketplace—it is an experience of culture, elegance, 
          and lasting value.
        </p>
      </section>

      {/* Products Section */}
      <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
    Demo Products
  </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {/* Product 1 */}
          <div className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 active:scale-95 hover:scale-105">
            <img
              src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"
              alt="Headphones"
              className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-60 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-3 text-base sm:text-lg font-semibold text-gray-700">Headphones</p>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 active:scale-95 hover:scale-105">
            <img
              src="https://images.pexels.com/photos/1194760/pexels-photo-1194760.jpeg"
              alt="Smartphones"
              className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-60 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-3 text-base sm:text-lg font-semibold text-gray-700">Smartphones</p>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 active:scale-95 hover:scale-105">
            <img
              src="https://images.pexels.com/photos/3675622/pexels-photo-3675622.jpeg"
              alt="Electric Fan"
              className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-60 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-3 text-base sm:text-lg font-semibold text-gray-700">Electric Fan</p>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 active:scale-95 hover:scale-105">
            <img
              src="https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg"
              alt="Electric Light"
              className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-60 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-3 text-base sm:text-lg font-semibold text-gray-700">Electric Light</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
<section className="mb-16">
  <div className="flex flex-col items-center justify-center gap-4">
    <video
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      controls
      autoPlay={false}
      loop
      muted
      className="w-full max-w-5xl h-auto rounded-lg shadow-lg"
    />
    <p className="text-base sm:text-lg font-semibold text-gray-700">
      Product Demo Video
    </p>
  </div>
</section>
      {/* Mission & Values Section */}
<section className="bg-orange-600 text-white py-16 px-6 sm:px-10 md:px-20">
  <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
    {/* Our Mission */}
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h3>
      <p className="text-base sm:text-lg leading-relaxed">
        Our mission is to empower people and communities in situations of poverty, 
        illiteracy, disease and social injustice. Our interventions aim to achieve 
        large scale, positive changes through economic and social programmes that 
        enable women and men to realise their potential.
      </p>
    </div>

    {/* Our Values */}
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Values</h3>
      <ul className="list-disc list-inside text-base sm:text-lg space-y-2">
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Inclusiveness</li>
        <li>Effectiveness</li>
      </ul>
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="text-center bg-orange-50 py-12 sm:py-16 rounded-2xl shadow-inner">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Want to know more about us?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Connect with us today and explore the elegance of Nokshaghor.
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-600 text-white font-semibold py-3 px-6 sm:py-3 sm:px-8 rounded-lg shadow-md hover:bg-orange-700 transition"
        >
          Contact Us
        </a>
      </section>
      <Footer />
    </main>
  );
}
