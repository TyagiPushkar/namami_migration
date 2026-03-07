"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  CheckCircle, 
  Users, 
  Calendar, 
  BookOpen,
  Bus,
  Home,
  CreditCard,
  Bell,
  FileText,
  Phone,
  CalendarDays,
  Clock,
  UserCheck,
  PenTool,
  Briefcase,
  MessageSquare,
  Globe,
  ArrowRight,
  Star,
  School,
  Library,
  Award
} from 'lucide-react';

export default function IConnect() {
  const features = [
    // Student Features
    {
      category: "For Students",
      items: [
        { title: "Attendance & Leave", description: "Check your presence record and apply for leave", icon: Calendar },
        { title: "Library Access", description: "View issued books and due dates", icon: BookOpen },
        { title: "Transport Details", description: "Track routes and allocation", icon: Bus },
        { title: "Hostel Info", description: "Room allotment, rules, and notices", icon: Home },
        { title: "Fees Management", description: "View fee structure, pay fees, and check dues", icon: CreditCard },
        { title: "Important Updates", description: "Get alerts via app and WhatsApp", icon: Bell },
        { title: "Certificates & Results", description: "Access internal results and request certificates", icon: FileText },
        { title: "Teacher Contact", description: "Reach teachers when needed", icon: Phone },
        { title: "Holiday Calendar", description: "Plan ahead with accurate info", icon: CalendarDays },
        { title: "Timetable", description: "Access your daily classes schedule anytime", icon: Clock }
      ]
    },
    // Staff Features
    {
      category: "For Staff",
      items: [
        { title: "Mark Attendance", description: "Daily student attendance in seconds", icon: UserCheck },
        { title: "Leave Management", description: "Apply for and view leave status", icon: Calendar },
        { title: "Upload Results", description: "Submit internal and final scores", icon: PenTool },
        { title: "Manage Library", description: "Track book issues and availability", icon: Library },
        { title: "HR & Accounts", description: "Access salary slips, benefits, and profile", icon: Briefcase },
        { title: "Communicate Easily", description: "Get important updates & send messages", icon: MessageSquare }
      ]
    }
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
                🏫 I-CONNECT App
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Complete Institute{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                  Management Solution
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Institute Connect is an all-in-one platform designed to streamline every aspect of 
                managing a school, college, or educational institution. From handling student affairs 
                to supporting staff operations, Institute Connect makes processes efficient, organized, 
                and future-ready.
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
                  <span className="text-sm text-gray-600">50+ Institutes</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <School className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Schools & Colleges</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">10,000+ Students</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/assets/images/INSTITUTE CONNECT (1).png"
                  alt="I-CONNECT App"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Trusted by</p>
                    <p className="font-bold text-gray-900">50+ Institutes</p>
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
              ✨ Powerful Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Institute Needs in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
                One Platform
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive features for students, teachers, and administrators
            </p>
          </div>

          {/* Student Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
              For Students
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {features[0].items.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Staff Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-purple-600 rounded-full"></span>
              For Staff & Teachers
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features[1].items.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <p className="text-3xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-gray-700">Digital Campus</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
              <p className="text-3xl font-bold text-purple-600 mb-2">50+</p>
              <p className="text-gray-700">Institutes</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100">
              <p className="text-3xl font-bold text-pink-600 mb-2">10K+</p>
              <p className="text-gray-700">Students</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
              <p className="text-3xl font-bold text-green-600 mb-2">24/7</p>
              <p className="text-gray-700">Access</p>
            </div>
          </div>

        </div>
      </section>

      {/* Parent Features Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4">
              <Globe className="w-12 h-12 text-white/80 flex-shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Parental Notifier</h3>
                <p className="text-white/90 text-lg mb-4">
                  Parents get every notification of the student activity in real-time
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Attendance alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Fee payment updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Exam results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span>Event notifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left - Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                🎯 Why I-CONNECT?
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transform Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-700">
                  Institute Management
                </span>
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">All-in-One Platform</h4>
                    <p className="text-gray-600">Manage students, staff, attendance, fees, and more from a single dashboard</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Real-time Updates</h4>
                    <p className="text-gray-600">Instant notifications for attendance, results, fees, and important announcements</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Parent Engagement</h4>
                    <p className="text-gray-600">Keep parents informed with real-time updates about their child's activities</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">Paperless Operations</h4>
                    <p className="text-gray-600">Reduce paperwork and streamline administrative tasks</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-3xl">
                <div className="bg-white p-4 rounded-3xl">
                  <img 
                    src="/assets/images/INSTITUTE CONNECT (1).png" 
                    alt="I-CONNECT Dashboard" 
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Digitize Your Institute?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 50+ institutes already using I-CONNECT to streamline their operations
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
                href="#demo"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Request Demo
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <School className="w-5 h-5" />
                <span>50+ Institutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>Real-time Updates</span>
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