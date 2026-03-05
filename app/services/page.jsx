"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Services() {
  const [active, setActive] = useState(0);

  const services = [
    {
      title: "Software Development",
      image: "/assets/images/sds.jpg",
      points: [
        "Custom Solutions",
        "Scalability",
        "User-Centric Design",
        "Cross-Platform Compatibility",
        "Regular Updates",
        "Cutting-Edge Technology",
      ],
      description:
        "We create tailored solutions that align perfectly with your needs, from concept to deployment.",
    },
    {
      title: "Website Development",
      image: "/assets/images/wds.jpg",
      points: [
        "Mobile Responsiveness",
        "SEO Optimization",
        "E-commerce Solutions",
        "Security Features",
      ],
      description:
        "We design and build captivating websites that engage visitors and drive results.",
    },
    {
      title: "Mobile App Development",
      image: "/assets/images/ads.jpg",
      points: [
        "Cross-Platform Compatibility",
        "App Store Deployment",
        "Performance Optimization",
        "Scalability",
      ],
      description:
        "We create mobile and desktop applications that captivate users and solve real-world problems.",
    },
    {
      title: "Mobile Device Management (MDM)",
      image: "/assets/images/mdm.png",
      points: [
        "MDM Configuration & Deployment",
        "24/7 End User Support",
        "Annual Maintenance Contract",
      ],
      description:
        "We help businesses monitor, control, and secure their devices efficiently.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="py-20 mt-10">
        <div className="container mx-auto px-6">

          <div className="text-center mb-12">
            <h6 className="text-blue-600">Our Services</h6>
            <h2 className="text-3xl font-bold">
              Our Comprehensive <span className="text-blue-600">Services</span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`px-6 py-3 rounded shadow ${
                  active === index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                {services[active].title}
              </h3>

              <p className="mb-6 text-gray-600">
                {services[active].description}
              </p>

              <ul className="space-y-2">
                {services[active].points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    ✅ {point}
                  </li>
                ))}
              </ul>

              <p className="mt-6 italic text-blue-600">
                "Your Solution, Our Expertise"
              </p>
            </div>

            <div>
              <img
                src={services[active].image}
                alt={services[active].title}
                className="w-full rounded shadow"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Extra MDM Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Mobile Device Management (MDM)
            </h2>

            <p className="mb-6 text-gray-600">
              Our MDM services help businesses monitor, control, and secure their devices.
            </p>

            <ul className="space-y-3">
              <li>✔ MDM Configuration & Deployment</li>
              <li>✔ 24/7 Managed Services Support</li>
              <li>✔ Annual Maintenance Contract (AMC)</li>
              <li>✔ Data Protection & Compliance</li>
            </ul>
          </div>

          <div>
            <img
              src="/assets/images/mdm.png"
              alt="MDM"
              className="w-full rounded shadow"
            />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}