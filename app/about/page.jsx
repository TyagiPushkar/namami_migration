import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <Navbar />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          
          <img
            src="/assets/images/team4.gif"
            alt="Team"
            className="w-full"
          />

          <div>
            <h6 className="text-blue-600">About Us</h6>
            <h2 className="text-3xl font-bold mb-4">
              We take your idea <span className="text-blue-600">to creation process</span>
            </h2>

            <p className="text-gray-600 mb-6">
              Namami Infotech India Pvt Ltd. is a top provider of mobile
              application solutions, specializing in digital transformation.
              We offer custom solutions to meet specific business needs,
              focusing on quality apps that automate business processes
              and boost efficiency.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-gray-100 p-4 rounded shadow">
                <h3 className="text-xl font-bold text-blue-600">100%</h3>
                <p>Tailored Solutions</p>
              </div>

              <div className="bg-gray-100 p-4 rounded shadow">
                <h3 className="text-xl font-bold text-blue-600">100%</h3>
                <p>Expert Team</p>
              </div>

              <div className="bg-gray-100 p-4 rounded shadow">
                <h3 className="text-xl font-bold text-blue-600">100%</h3>
                <p>Innovation at Heart</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">

          <h6 className="text-blue-400">Our Team</h6>
          <h2 className="text-3xl font-bold mb-12">
            Meet Our Team of <span className="text-blue-400">Innovators</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Pushkar */}
            <div className="bg-gray-800 p-6 rounded shadow">
              <img
                src="/assets/images/pushkar.png"
                alt="Pushkar"
                className="w-40 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">
                Pushkar Tyagi
              </h3>
              <p className="text-blue-400 mb-3">
                Chief Operating Officer
              </p>

              <div className="flex justify-center gap-4">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
              </div>
            </div>

            {/* Vinay */}
            <div className="bg-gray-800 p-6 rounded shadow">
              <img
                src="/assets/images/vinay.png"
                alt="Vinay"
                className="w-40 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">
                Vinay Rai
              </h3>
              <p className="text-blue-400 mb-3">
                Chief S&M Head
              </p>

              <div className="flex justify-center gap-4">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}