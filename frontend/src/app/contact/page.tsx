export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-lg text-center mb-10">
          We would love to hear from you. Reach out to us using the details
          below or fill in your information.
        </p>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Our Office</h2>
            <p>Dhaka, Bangladesh</p>
            <p>Mobile: +880 1234-567890</p>
            <p>Email: support@nokshaghor.com</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Business Hours</h2>
            <p>Saturday - Thursday: 9:00 AM - 8:00 PM</p>
            <p>Friday: Closed</p>
          </div>
        </div>

        {/* Customer Table */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Customer Information
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Address</th>
                  <th className="p-3 border">Mobile Number</th>
                  <th className="p-3 border">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Rahim Uddin</td>
                  <td className="p-3 border">Dhaka</td>
                  <td className="p-3 border">+880123456789</td>
                  <td className="p-3 border">rahim@example.com</td>
                </tr>
                <tr>
                  <td className="p-3 border">Karim Ali</td>
                  <td className="p-3 border">Chittagong</td>
                  <td className="p-3 border">+880987654321</td>
                  <td className="p-3 border">karim@example.com</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
