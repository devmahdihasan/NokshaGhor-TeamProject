// src/app/about/page.tsx
import Nav from '../../app/nav'

import Footer from '../../app/footer'

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen py-12 px-6 sm:px-10 md:px-20">
      <Nav />
      
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

<section className="mb-16">
  <div className="flex justify-center">
    <img
      src="https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg"
      className="w-full max-w-6xl h-[30rem] object-cover rounded-xl shadow-2xl"
    />
  </div>
</section>

   {/* Team Introduction */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 mb-10 border-l-4 border-orange-500 pl-4">
          Meet Our Team
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Person 1 */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mahdi Hasan</h3>
            <p className="text-orange-600 font-medium mb-3">Team Leader</p>
            <p className="text-sm text-gray-600">
              Visionary leader dedicated to guiding Nokshaghor with innovation 
              and cultural pride.
            </p>
          </div>
          {/* Person 2 */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Zishan</h3>
            <p className="text-orange-600 font-medium mb-3">Designer</p>
            <p className="text-sm text-gray-600">
              Creative mind behind our designs, ensuring elegance and uniqueness 
              in every detail.
            </p>
          </div>
          {/* Person 3 */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Imran</h3>
            <p className="text-orange-600 font-medium mb-3">Developer</p>
            <p className="text-sm text-gray-600">
              Tech expert ensuring seamless experiences through innovative web 
              and digital solutions.
            </p>
          </div>
          {/* Person 4 */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tanzina</h3>
            <p className="text-orange-600 font-medium mb-3">Marketing Lead</p>
            <p className="text-sm text-gray-600">
              Driving growth by connecting Nokshaghor’s story with people across 
              the globe.
            </p>
          </div>
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
