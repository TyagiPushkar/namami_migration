"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  CheckCircle, 
  Code, 
  Globe, 
  Smartphone, 
  Shield, 
  ArrowRight,
  ChevronRight,
  Clock,
  Headphones,
  Users
} from 'lucide-react';

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

  const getIcon = (index) => {
    const icons = [Code, Globe, Smartphone, Shield];
    const IconComponent = icons[index];
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            💼 What We Offer
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Comprehensive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            End-to-end solutions tailored to transform your business and drive digital excellence
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  active === index
                    ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300"
                }`}
              >
                <span className={`${active === index ? "text-white" : "text-blue-600"}`}>
                  {getIcon(index)}
                </span>
                {service.title}
                {active === index && (
                  <ChevronRight className="w-5 h-5 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {services[active].title}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {services[active].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services[active].points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-gray-800 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-blue-600">
                  <p className="text-lg font-semibold text-gray-800 italic">
                    "{services[active].title === "Mobile Device Management (MDM)" 
                      ? "Secure, Control, and Manage with Ease" 
                      : "Your Solution, Our Expertise"}"
                  </p>
                </div>
              </div>

              {/* <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all hover:shadow-lg group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a> */}
            </div>

            {/* Right Content - Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={services[active].image}
                  alt={services[active].title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Service Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    {getIcon(active)}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Featured Service</p>
                    <p className="font-bold text-gray-900">{services[active].title}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Extra MDM Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center">
          
          <div className="space-y-8">
            <span className="inline-block px-4 py-2 bg-blue-900 text-blue-200 rounded-full text-sm font-semibold">
              🔒 Enterprise Solution
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Mobile Device{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Management
              </span>
            </h2>

            <p className="text-xl text-gray-300">
              Our MDM services help businesses monitor, control, and secure their devices efficiently.
            </p>

            <div className="space-y-4">
              {[
                "MDM Configuration & Deployment",
                "24/7 Managed Services Support",
                "Annual Maintenance Contract (AMC)",
                "Data Protection & Compliance"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-600/25 transition-all group"
              >
                Learn More About MDM
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-700">
              <img
                src="/assets/images/mdm.png"
                alt="MDM"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section - FIXED */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
              ⭐ Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Makes Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
                Services Stand Out
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Expert Team */}
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-700">Skilled professionals with years of industry experience</p>
            </div>

            {/* Timely Delivery */}
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
              <p className="text-gray-700">Agile methodology ensuring projects are delivered on schedule</p>
            </div>

            {/* 24/7 Support */}
            <div className="group p-8 bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Headphones className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-700">Round-the-clock assistance for all your technical needs</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}