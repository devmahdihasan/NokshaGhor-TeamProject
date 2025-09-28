export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-10">
      <section className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

        {/* 1. Introduction */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-semibold">Nokshaghor</span>, where
            tradition meets creativity. We are passionate about crafting
            high-quality designs that reflect the rich culture of Bangladesh
            while embracing modern elegance.  
            <br /> <br />
            Our aim is to serve our valued customers with unique products that
            tell stories, inspire emotions, and bring joy into everyday life.
            Every piece from Nokshaghor carries a part of our cultural heritage
            blended with innovative artistry.
          </p>
        </div>

        {/* 2. Team Introduction */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Mahdi Hasan</h3>
              <p className="text-sm text-gray-600">Founder & CEO</p>
              <p className="mt-2">
                Mahdi leads Nokshaghor with a vision to blend culture and
                modernity in every design.
              </p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Zishan</h3>
              <p className="text-sm text-gray-600">Creative Director</p>
              <p className="mt-2">
                Zishan is the creative mind behind our innovative concepts and
                unique styling.
              </p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Imran</h3>
              <p className="text-sm text-gray-600">Lead Designer</p>
              <p className="mt-2">
                Imran specializes in crafting detailed designs that reflect both
                heritage and elegance.
              </p>
            </div>
            <div className="p-4 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Tanzina</h3>
              <p className="text-sm text-gray-600">Marketing & Outreach</p>
              <p className="mt-2">
                Tanzina ensures that Nokshaghor reaches people everywhere,
                building strong customer relationships.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-10 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch With Us</h2>
          <p className="mb-6 text-lg">
            Interested to know more about Nokshaghor or want to collaborate with
            us? Let’s connect and build something meaningful together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
