import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CheckCircle, IndianRupee, Users, Calendar, TrendingUp, Award, HelpCircle, Shield, Clock } from 'lucide-react';

export default function Pricing() {
  const modules = [
    "Attendance (Geo fenced) & Leave",
    "Expense Management",
    "Travel Request",
    "PMS (Performance Management)",
    "Asset Management",
    "Payroll",
    "Support Ticketing",
    "Organization Policy",
    "Employee Directory",
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            💰 Simple & Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Pay Only for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
              What You Need
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Flexible pricing that grows with your business. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          
          {/* Main Pricing Card */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Content - Pricing Details */}
              <div className="space-y-8">
                {/* Product Badge */}
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold">HR SMILE APP</span>
                </div>

                {/* Pricing Highlight */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    <span className="text-6xl text-blue-600">₹50</span>
                    <span className="text-2xl text-gray-600 font-normal">/module/month</span>
                  </h2>
                  
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span>Unlimited users</span>
                    </div>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span>No contracts</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    With our plan, you pay <span className="font-bold text-blue-600">₹50 per module, per month.</span> 
                    You can choose only the modules you need, ensuring you're not paying for anything extra.
                  </p>
                  <p className="text-lg">
                    As your business evolves, you can easily add more features and users — 
                    <span className="font-semibold text-gray-900"> keeping costs aligned with growth.</span>
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <p className="text-xl font-semibold text-blue-600 mb-6">
                    ✨ Choose what you need, pay as you grow!
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-600/25 transition-all hover:scale-105 group"
                    >
                      Get Started Now
                      <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="#demo"
                      className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all group"
                    >
                      <HelpCircle className="w-5 h-5" />
                      Request Demo
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-6 pt-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Secure & Reliable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-gray-600">15+ Years</span>
                  </div>
                </div>
              </div>

              {/* Right Image with Floating Card */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src="/assets/images/hrsmilebaner.png"
                    alt="HR Smile App"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Floating Pricing Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden lg:block">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <IndianRupee className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-2xl font-bold text-gray-900">₹450/month</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">For 9 modules with unlimited users</p>
                </div>
              </div>
            </div>

            {/* Modules Section */}
            <div className="mt-24">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                  📋 Available Modules
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Choose Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
                    HR Modules
                  </span>
                </h3>
                <p className="text-lg text-gray-700">
                  Mix and match modules based on your business requirements
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {modules.map((module, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <CheckCircle className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-gray-800 font-medium group-hover:text-gray-900">
                      {module}
                    </span>
                  </div>
                ))}
              </div>

              {/* Module Counter */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  <span className="font-bold text-blue-600 text-xl">9</span> modules available • 
                  <span className="font-medium text-gray-700"> Start with any combination</span>
                </p>
              </div>
            </div>

            {/* Features Comparison */}
            <div className="mt-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IndianRupee className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Pay Per Module</h4>
                  <p className="text-white/80">Only pay for features you actually use</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Scale Easily</h4>
                  <p className="text-white/80">Add modules as your team grows</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Unlimited Users</h4>
                  <p className="text-white/80">No per-user pricing, ever</p>
                </div>
              </div>
            </div>

            {/* FAQ Teaser */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-4">Have questions about our pricing?</p>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              >
                Check our FAQ
                <HelpCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}