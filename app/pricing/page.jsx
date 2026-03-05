import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Pricing() {
  return (
    <>
      <Navbar />

      <section className="py-20 mt-10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h6 className="text-blue-600 mb-2">
              Our Pricing Model
            </h6>

            <h2 className="text-3xl font-bold mb-6">
              For HR Smile App :)
            </h2>

            <p className="text-gray-600 mb-4">
              With our plan, you pay ₹50 per module, per month.
              You can choose only the modules you need,
              ensuring you’re not paying for anything extra.
            </p>

            <p className="text-gray-600 mb-4">
              As your business evolves, you can easily add more
              features and users — keeping costs aligned with growth.
            </p>

            <p className="font-semibold text-blue-600 mb-6">
              Choose what you need, pay as you grow!
            </p>

            <h4 className="text-xl font-semibold mb-4">
              HR Modules:
            </h4>

            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Attendance (Geo fenced) & Leave</li>
              <li>Expense Management</li>
              <li>Travel Request</li>
              <li>PMS</li>
              <li>Asset Management</li>
              <li>Payroll</li>
              <li>Support Ticketing</li>
              <li>Organization Policy</li>
              <li>Employee Directory</li>
            </ol>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/assets/images/hrsmilebaner.png"
              alt="HR Smile"
              className="w-full rounded shadow"
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}