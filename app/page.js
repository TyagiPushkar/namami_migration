'use client'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowRight, Code, Smartphone, Globe, Shield, Users, Zap, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6 py-20 items-center">
          
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              🚀 Concept to Creation
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Your Ideas,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                Our Code
              </span>
            </h1>

            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              Transform your business processes into powerful mobile applications. 
              Our Vision is to enable organizations to automate their processes via mobile apps.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-blue-700 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Book Your Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="text-gray-800 font-semibold hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-700"
              >
                Learn More
              </a>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-gray-900">100+</p>
                  <p className="text-gray-700 font-medium">Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-gray-900">50+</p>
                  <p className="text-gray-700 font-medium">Clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20"></div>
            <img
              src="/assets/images/coder.gif"
              alt="Coder"
              className="relative w-full rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img
              src="/assets/images/team4.gif"
              alt="Team"
              className="relative w-full rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
              👥 About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              We Take Your Idea to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
                Creation
              </span>
            </h2>

            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              Namami Infotech India Pvt Ltd is a top provider of mobile application solutions, 
              specializing in digital transformation. We help businesses modernize their operations 
              through innovative technology solutions.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Expert Development Team</h4>
                  <p className="text-gray-700">Skilled developers with years of industry experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Fast Project Delivery</h4>
                  <p className="text-gray-700">Agile methodology ensuring timely completion</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">24/7 Client Support</h4>
                  <p className="text-gray-700">Round-the-clock assistance for your peace of mind</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              💼 Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Comprehensive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-800 font-medium">
              We offer end-to-end development services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Software Development */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Software Development</h3>
              <p className="text-gray-700 mb-4 font-medium">Custom software solutions for your business needs with cutting-edge technology</p>
              <a href="#" className="text-blue-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Website Development */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Website Development</h3>
              <p className="text-gray-700 mb-4 font-medium">Responsive and modern websites that drive engagement and conversions</p>
              <a href="#" className="text-purple-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile App Development */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-pink-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mobile App Development</h3>
              <p className="text-gray-700 mb-4 font-medium">Native and cross-platform apps with exceptional user experience</p>
              <a href="#" className="text-pink-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* MDM Solutions */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">MDM Solutions</h3>
              <p className="text-gray-700 mb-4 font-medium">Enterprise-grade mobile device management with advanced security</p>
              <a href="#" className="text-green-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Development</h3>
              <p className="text-gray-700 font-medium">Rapid prototyping and agile development cycles</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Solutions</h3>
              <p className="text-gray-700 font-medium">Enterprise-grade security for all applications</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-700 font-medium">24/7 technical support and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}