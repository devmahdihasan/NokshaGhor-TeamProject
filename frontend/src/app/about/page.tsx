export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Nokshaghor</h1>
        <p className="text-lg text-center mb-10">
          Welcome to <span className="font-semibold">Nokshaghor</span>, where tradition meets
          creativity. We are dedicated to crafting unique designs, blending
          culture and modern innovation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p>
              To provide high-quality designs and products that reflect the
              heritage of Bangladesh while embracing modern elegance. We aim to
              inspire and connect with people through creativity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p>
              To become a leading brand in cultural and modern design,
              showcasing authentic craftsmanship that resonates with both local
              and global communities.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p>
            Nokshaghor is powered by a passionate team of designers,
            developers, and artisans who share the same vision—to bring beauty
            and meaning into everyday life through thoughtful creations.
          </p>
        </div>
      </section>
    </main>
  );
}
