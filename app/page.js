import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gray-100">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6">
          
          <div>
            <h6 className="text-blue-600 mb-2">
              Concept to Creation
            </h6>

            <h1 className="text-4xl font-bold mb-4">
              Your Ideas, Our Code :)
            </h1>

            <p className="mb-4">
              Our Vision is to enable organizations to automate
              their processes via mobile apps.
            </p>

            <p className="mb-6">
              By transforming manual processes into digital ones,
              mobile apps help organizations improve productivity.
            </p>

            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded"
            >
              Book Your Demo
            </a>
          </div>

          <div>
            <img
              src="/assets/images/coder.gif"
              alt="Coder"
              className="w-full"
            />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6">
          
          <img
            src="/assets/images/team4.gif"
            alt="Team"
            className="w-full"
          />

          <div>
            <h6 className="text-blue-600">
              About Us
            </h6>

            <h2 className="text-3xl font-bold mb-4">
              We take your idea to creation process
            </h2>

            <p>
              Namami Infotech India Pvt Ltd is a top provider of
              mobile application solutions, specializing in
              digital transformation.
            </p>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          
          <h6 className="text-blue-600">
            Our Services
          </h6>

          <h2 className="text-3xl font-bold mb-10">
            Our Comprehensive Services
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-white shadow rounded">
              Software Development
            </div>

            <div className="p-6 bg-white shadow rounded">
              Website Development
            </div>

            <div className="p-6 bg-white shadow rounded">
              Mobile App Development
            </div>

            <div className="p-6 bg-white shadow rounded">
              MDM Solutions
            </div>
          </div>

        </div>
      </section>

    </>
  );
}