'use client'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Users, Target, Lightbulb, Award, Linkedin, Github, Instagram, Mail, MapPin, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero About Section */}
      <section className="pt-10 pb-2 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              👥 About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              We Take Your Idea{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                to Creation
              </span>
            </h1>
            <p className="text-xl text-gray-700 font-medium">
              Transforming businesses through innovative mobile solutions since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center">
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img
              src="/assets/images/team4.gif"
              alt="Team"
              className="relative w-full rounded-2xl shadow-2xl"
            />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">15+ Years</p>
                  <p className="text-gray-700 font-medium">of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Namami Infotech India Pvt Ltd
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are a top provider of mobile application solutions, specializing in 
                digital transformation. Our passion lies in creating custom solutions that 
                meet specific business needs, focusing on quality apps that automate 
                business processes and boost efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-700 font-medium">Tailored Solutions</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-700 font-medium">Expert Team</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl border border-pink-100">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-pink-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-700 font-medium">Innovation at Heart</p>
              </div>
            </div>

            {/* Company Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-gray-700 font-medium">Projects Completed</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-gray-700 font-medium">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">24/7</p>
                <p className="text-gray-700 font-medium">Support</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative mobile solutions that drive digital 
                transformation, enhance productivity, and create lasting value in an 
                increasingly connected world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in mobile application solutions, recognized for 
                excellence in digital transformation and innovation that shapes the future 
                of business automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-blue-900 text-blue-200 rounded-full text-sm font-semibold mb-4">
              🌟 Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Innovators
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Passionate experts dedicated to bringing your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Pushkar */}
            <div className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img
                    src="/assets/images/pushkar.png"
                    alt="Pushkar Tyagi"
                    className="relative w-40 h-40 mx-auto rounded-full border-4 border-gray-700 group-hover:border-blue-500 transition-colors object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  Pushkar Tyagi
                </h3>
                <p className="text-blue-400 font-semibold mb-4">
                  Chief Operating Officer
                </p>
                
                <p className="text-gray-400 mb-6 text-sm">
                  Leading operations with 12+ years of experience in mobile technology and business strategy
                </p>

                <div className="flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group/link">
                    <Github className="w-5 h-5 text-gray-300 group-hover/link:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group/link">
                    <Linkedin className="w-5 h-5 text-gray-300 group-hover/link:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group/link">
                    <Instagram className="w-5 h-5 text-gray-300 group-hover/link:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group/link">
                    <Mail className="w-5 h-5 text-gray-300 group-hover/link:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Vinay */}
            <div className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img
                    src="/assets/images/vinay.png"
                    alt="Vinay Rai"
                    className="relative w-40 h-40 mx-auto rounded-full border-4 border-gray-700 group-hover:border-purple-500 transition-colors object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  Vinay Rai
                </h3>
                <p className="text-purple-400 font-semibold mb-4">
                  Chief S&M Head
                </p>
                
                <p className="text-gray-400 mb-6 text-sm">
                  Driving sales and marketing strategies with innovative approaches and client-first mindset
                </p>

                <div className="flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors group/link">
                    <Github className="w-5 h-5 text-gray-300 group-hover/link:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors group/link">
                    <Linkedin className="w-5 h-5 text-gray-300 group-hover/link:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors group/link">
                    <Instagram className="w-5 h-5 text-gray-300 group-hover/link:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors group/link">
                    <Mail className="w-5 h-5 text-gray-300 group-hover/link:text-white" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Team CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Want to join our team?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View Careers
              <Briefcase className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>India • UAE • USA</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-600" />
              <span>contact@namamiinfotech.com</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-pink-600" />
              <span>Est. 2010</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}