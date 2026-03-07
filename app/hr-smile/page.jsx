"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  CheckCircle, 
  Users, 
  Calendar, 
  Clock,
  FileText,
  TrendingUp,
  Bell,
  Shield,
  Download,
  ArrowRight,
  Star,
  Briefcase,
  CreditCard,
  Megaphone,
  PieChart,
  Zap
} from 'lucide-react';

export default function HRSmile() {
  const features = [
    {
      title: "Employee Directory",
      description: "Maintain a comprehensive directory of all employees",
      icon: Users,
      color: "blue"
    },
    {
      title: "Attendance Management",
      description: "Geofenced attendance system for accurate tracking",
      icon: Calendar,
      color: "purple"
    },
    {
      title: "Leave Request & Approval",
      description: "Streamlined leave management workflow",
      icon: Clock,
      color: "green"
    },
    {
      title: "Payroll Processing",
      description: "Automate payroll calculations and processing",
      icon: CreditCard,
      color: "pink"
    },
    {
      title: "Expense Management",
      description: "Track and manage employee expenses",
      icon: FileText,
      color: "orange"
    },
    {
      title: "Organization Policy",
      description: "Access and update organizational policies",
      icon: Briefcase,
      color: "indigo"
    },
    {
      title: "Organization Notice",
      description: "Distribute important notices across the organization",
      icon: Megaphone,
      color: "red"
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive insights and reports",
      icon: PieChart,
      color: "teal"
    }
  ];

  const appGlimpses = [
    "/assets/images/hr1.png",
    "/assets/images/h2.png",
    "/assets/images/h3.png",
    "/assets/images/h4.png"
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                🚀 HR Smile App
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Automate Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                  HR Management
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                This product is designed to automate and streamline human resource management. 
                It simplifies and enhances the management of employee-related tasks, reducing 
                the time and effort required for these activities.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-600/25 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Book Your Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">150+ HR teams</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/assets/images/hrsmile.png"
                  alt="HR Smile App"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Trusted by</p>
                    <p className="font-bold text-gray-900">100+ Companies</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              ✨ Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
                HR Excellence
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive HR management solution with 11 powerful modules
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <p className="text-3xl font-bold text-blue-600 mb-2">70%</p>
              <p className="text-gray-700">Time Saved on HR Tasks</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
              <p className="text-3xl font-bold text-purple-600 mb-2">100%</p>
              <p className="text-gray-700">Digital HR Processes</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100">
              <p className="text-3xl font-bold text-pink-600 mb-2">24/7</p>
              <p className="text-gray-700">Employee Self-Service</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
              <p className="text-3xl font-bold text-green-600 mb-2">99%</p>
              <p className="text-gray-700">Data Accuracy</p>
            </div>
          </div>

        </div>
      </section>

      {/* App Glimpses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4">
              📱 App Glimpses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-red-700">
                App in Action
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Take a peek at the intuitive interface of HR Smile
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {appGlimpses.map((image, index) => (
              <div 
                key={index}
                className="group relative bg-white p-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={image} 
                  alt={`HR Smile Screenshot ${index + 1}`}
                  className="w-full rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-semibold border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all group">
              View More Screenshots
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-3xl">
                <div className="bg-white p-4 rounded-3xl">
                  <img 
                    src="/assets/images/hrsmile.png" 
                    alt="HR Smile Dashboard" 
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                💼 Why HR Smile?
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transform Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-700">
                  HR Operations
                </span>
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Reduce Manual Work</h4>
                    <p className="text-gray-600">Automate repetitive HR tasks and free up your team's time</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Improve Accuracy</h4>
                    <p className="text-gray-600">Eliminate human errors in payroll and attendance tracking</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Enhanced Employee Experience</h4>
                    <p className="text-gray-600">Self-service portal for leaves, expenses, and information access</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Streamline Your HR?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 100+ companies that have transformed their HR operations with HR Smile
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2 group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Real-time Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Unlimited Employees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
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