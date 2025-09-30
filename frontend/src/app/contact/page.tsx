// src/app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen py-12 px-6 sm:px-10 md:px-20">

      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or need support? We’re here to help you. 
          Reach out through any of the options below.
        </p>
      </section>

      {/* Info Cards */}
      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 mb-16">
        {/* Card 1 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
          <p className="text-orange-600 font-bold text-lg">16793 / 09678002003</p>
          <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Gmail</h3>
          <p className="text-orange-600 font-bold text-lg">nokshaghor23@gmail.com</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
          <p className="text-orange-600 font-bold text-lg">Chattogram, Bangladesh</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Online Support</h3>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline"
          >
            Request Support →
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
        <form className="space-y-5 sm:space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="+880 1XXX-XXXXXX"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange-700 transition"
          >
            Submit
          </button>
        </form>
      </section>

    </main>
  );
}
