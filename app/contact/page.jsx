"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageCircle,
  Building,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const offices = [
    {
      city: "Head Office",
      address: ["DPT - 303, DLF Prime Tower,", "Okhla Phase - 1, New Delhi - 110020"],
      icon: Building,
      color: "blue"
    },
    {
      city: "Mumbai Office",
      address: [
        "5th floor, C/O Quest Coworks,",
        "Technopolis knowledge park, Mahakali",
        "caves road, Andheri East,",
        "Mumbai - 400093"
      ],
      icon: Building,
      color: "purple"
    },
    {
      city: "Bengaluru Office",
      address: [
        "98 ground floor, 9th A Main,",
        "Koramangala, 4th Block, Bengaluru,",
        "Karnataka 560034"
      ],
      icon: Building,
      color: "pink"
    },
    {
      city: "USA Office",
      address: [
        "16192 Coastal Highway",
        "Lewes, Delaware 19958"
      ],
      icon: Building,
      color: "green"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            📞 Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
              Us
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Have a question or want to work together? We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phone Card */}
            <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+919906060126" className="text-blue-600 hover:text-blue-700 font-medium">
                +91-9906060126
              </a>
            </div>

            {/* Email Card */}
            <div className="group bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:solutions@namami-infotech.com" className="text-purple-600 hover:text-purple-700 font-medium break-all">
                solutions@namami-infotech.com
              </a>
            </div>

            {/* Social Card */}
            <div className="group bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Follow Us</h3>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=61561795836649" className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors group/icon">
                  <Facebook className="w-4 h-4 text-pink-600 group-hover/icon:text-white" />
                </a>
                <a href="https://www.instagram.com/namami.infotech" className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors group/icon">
                  <Instagram className="w-4 h-4 text-pink-600 group-hover/icon:text-white" />
                </a>
                <a href="https://www.linkedin.com/company/namami-infotech-india-pvt-ltd" className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors group/icon">
                  <Linkedin className="w-4 h-4 text-pink-600 group-hover/icon:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              
              {/* Left Column - Map */}
              <div className="relative h-[500px] lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3341.3608818047815!2d77.28075937549669!3d28.51896997572697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMxJzA4LjMiTiA3N8KwMTcnMDAuMCJF!5e1!3m2!1sen!2sin!4v1731652428850!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Head Office</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        pattern="[^ @]*@[^ @]*"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-600/25 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              🏢 Our Offices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Us{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
                Anywhere
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              We have offices across India and the USA to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className={`w-12 h-12 bg-${office.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <office.icon className={`w-6 h-6 text-${office.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{office.city}</h3>
                <div className="space-y-1 text-gray-600 text-sm">
                  {office.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Business Hours</h3>
                <p className="text-white/90 mb-6">
                  Our team is available during business hours to assist you
                </p>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-4xl font-bold mb-2">24/7</p>
                <p className="text-white/80">Email Support</p>
                <a 
                  href="mailto:solutions@namami-infotech.com"
                  className="inline-block mt-4 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  Email Us Anytime
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button - Already in original HTML */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/+919906060126" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-16 h-16 bg-green-500 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <img src="/assets/images/whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
        </a>
      </div>

      <Footer />
    </>
  );
}