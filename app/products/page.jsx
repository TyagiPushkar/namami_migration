import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowRight, Users, Building, Star, CheckCircle } from 'lucide-react';
import Link from "next/link";

export default function Products() {
  const products = [
    {
      title: "Sales Smile",
      description:
        "Designed to streamline and enhance your sales processes, ensuring efficiency and productivity for your sales team.",
      image: "/assets/images/ssmilebanner.png",
      link: "/sales-smile",
      features: ["Lead Management", "Sales Analytics", "Pipeline Tracking", "Performance Reports"],
      color: "blue",
      stats: "200+ Sales Teams"
    },
    {
      title: "HR Smile",
      description:
        "Designed to automate and streamline human resource management, making it easier to manage employee-related tasks.",
      image: "/assets/images/hrsmile.png",
      link: "/hr-smile",
      features: ["Employee Database", "Leave Management", "Payroll Integration", "Performance Reviews"],
      color: "purple",
      stats: "150+ Companies"
    },
    {
      title: "I-Connect",
      description:
        "Institute Connect is an all-in-one platform designed to streamline every aspect of managing a school or educational institution.",
      image: "/assets/images/INSTITUTE CONNECT.png",
      link: "/i-connect",
      features: ["Student Management", "Attendance Tracking", "Grade Books", "Parent Communication"],
      color: "green",
      stats: "50+ Institutes"
    },
  ];

  const getGradient = (color) => {
    const gradients = {
      blue: "from-blue-600 to-blue-400",
      purple: "from-purple-600 to-purple-400",
      green: "from-green-600 to-green-400"
    };
    return gradients[color];
  };

  const getLightBg = (color) => {
    const backgrounds = {
      blue: "bg-blue-50",
      purple: "bg-purple-50",
      green: "bg-green-50"
    };
    return backgrounds[color];
  };

  const getTextColor = (color) => {
    const colors = {
      blue: "text-blue-600",
      purple: "text-purple-600",
      green: "text-green-600"
    };
    return colors[color];
  };

  const getHoverShadow = (color) => {
    const shadows = {
      blue: "hover:shadow-blue-600/25",
      purple: "hover:shadow-purple-600/25",
      green: "hover:shadow-green-600/25"
    };
    return shadows[color];
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            🚀 Our Products
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Innovative Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
              Modern Business
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our suite of powerful products designed to transform your business operations
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">

          {products.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-16 items-center mb-32 last:mb-0`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2">
                <div className={`relative group ${getLightBg(product.color)} rounded-3xl p-6`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${getGradient(product.color)} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${getLightBg(product.color)} rounded-full flex items-center justify-center`}>
                        <Users className={`w-5 h-5 ${getTextColor(product.color)}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Trusted by</p>
                        <p className="font-bold text-gray-900">{product.stats}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h2>
                  <div className={`w-20 h-1.5 bg-gradient-to-r ${getGradient(product.color)} rounded-full`}></div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className={`w-5 h-5 ${getTextColor(product.color)} flex-shrink-0`} />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Only "Know More" links to product page */}
                <div className="pt-4">
                  <Link
                    href={product.link}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${getGradient(product.color)} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg ${getHoverShadow(product.color)} transition-all hover:scale-105 group`}
                  >
                    Know More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Clientele Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              🤝 Our Clientele
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Join hundreds of businesses that trust our solutions
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
            {[
              { src: "/assets/images/Evara.png", alt: "Evara", name: "Evara" },
              { src: "/assets/images/PushpRatan.png", alt: "PushpRatan", name: "PushpRatan" },
              { src: "/assets/images/Niveshan.png", alt: "Niveshan", name: "Niveshan" },
              { src: "/assets/images/VinWorld.png", alt: "VinWorld", name: "VinWorld" },
              { src: "/assets/images/Speedage.png", alt: "Speedage", name: "Speedage" },
              { src: "/assets/images/B.png", alt: "Bank", name: "Bank" },
              { src: "/assets/images/Fllurton.png", alt: "Fullerton", name: "Fullerton" },
              { src: "/assets/images/satya.png", alt: "Satya", name: "Satya" }
            ].map((client, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={client.src} 
                  alt={client.alt}
                  className="w-full h-14 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                />
                <p className="text-center text-sm text-gray-600 mt-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.name}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-medium">500+ Happy Clients</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-purple-600" />
              <span className="font-medium">10+ Years Experience</span>
            </div>
          </div>

          {/* CTA Banner - This is the only other place with a button but it's "Get Started Today" not "Know More" */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to Transform Your Business?
            </h3>
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and take your business to the next level
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}