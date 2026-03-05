import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Products() {
  const products = [
    {
      title: "Sales Smile",
      description:
        "Designed to streamline and enhance your sales processes, ensuring efficiency and productivity for your sales team.",
      image: "/assets/images/ssmilebanner.png",
      link: "#",
    },
    {
      title: "HR Smile",
      description:
        "Designed to automate and streamline human resource management, making it easier to manage employee-related tasks.",
      image: "/assets/images/hrsmile.png",
      link: "#",
    },
    {
      title: "I-Connect",
      description:
        "Institute Connect is an all-in-one platform designed to streamline every aspect of managing a school or educational institution.",
      image: "/assets/images/INSTITUTE CONNECT.png",
      link: "#",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Products Section */}
      <section className="py-20 mt-10">
        <div className="container mx-auto px-6">

          {products.map((product, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center mb-20 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded shadow"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {product.title}
                </h2>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <a
                  href={product.link}
                  className="bg-blue-600 text-white px-6 py-3 rounded inline-block"
                >
                  Know More
                </a>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Clientele Section (Static Grid Instead of Owl Carousel) */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">

          <h6 className="text-blue-600">Our Clientele</h6>
          <h2 className="text-3xl font-bold mb-12">
            See Our Recent Clients
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <img src="/assets/images/Evara.png" alt="Evara" />
            <img src="/assets/images/PushpRatan.png" alt="PushpRatan" />
            <img src="/assets/images/Niveshan.png" alt="Niveshan" />
            <img src="/assets/images/VinWorld.png" alt="VinWorld" />
            <img src="/assets/images/Speedage.png" alt="Speedage" />
            <img src="/assets/images/B.png" alt="Bank" />
            <img src="/assets/images/Fllurton.png" alt="Fullerton" />
            <img src="/assets/images/satya.png" alt="Satya" />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}