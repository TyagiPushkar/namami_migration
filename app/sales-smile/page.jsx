import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  CheckCircle, 
  Users, 
  MapPin, 
  Calendar, 
  FileText, 
  Target,
  ArrowRight,
  Star
} from 'lucide-react';

export default function SalesSmile() {
  const features = [
    {
      title: "Lead Management",
      description: "Helps you manage leads efficiently",
      icon: Users,
      color: "blue"
    },
    {
      title: "Visit Management",
      description: "Plan, execute, and track sales visits with ease",
      icon: MapPin,
      color: "purple"
    },
    {
      title: "New location/dealer/retailer registration",
      description: "Register new locations and partners seamlessly",
      icon: FileText,
      color: "green"
    },
    {
      title: "Attendance & leave management",
      description: "Geofenced attendance system",
      icon: Calendar,
      color: "pink"
    },
    {
      title: "Quotation Management",
      description: "Manage sales quotations efficiently",
      icon: FileText,
      color: "orange"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                🚀 Sales Smile App
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Streamline Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
                  Sales Process
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We designed Sales Smile App to streamline and enhance your sales processes, 
                our solutions ensure efficiency and productivity for your sales team.
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
                  <span className="text-sm text-gray-600">50+ active users</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/assets/images/ssmilebanner.png"
                  alt="Sales Smile App"
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
                    <p className="font-bold text-gray-900">200+ Sales Teams</p>
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
              Everything You Need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
                Boost Sales
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              By leveraging the latest technologies and industry best practices, we help you automate routine tasks 
              and optimize workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Quote Box */}
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4">
              <Target className="w-12 h-12 text-white/80 flex-shrink-0" />
              <div>
                <p className="text-xl font-semibold mb-2">Our tailored strategies are crafted to meet your specific needs</p>
                <p className="text-white/90">Enabling your team to focus on what they do best: selling. With our innovative approach, you can expect increased sales efficiency, improved customer engagement, and higher overall productivity.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left - Stats */}
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                  📈 Proven Results
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Sales Teams{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-700">
                    Love Sales Smile
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">40%</p>
                  <p className="text-gray-600">Increase in Sales Efficiency</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <p className="text-3xl font-bold text-purple-600 mb-2">60%</p>
                  <p className="text-gray-600">Time Saved on Admin Tasks</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <p className="text-3xl font-bold text-pink-600 mb-2">100%</p>
                  <p className="text-gray-600">Real-time Visibility</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <p className="text-3xl font-bold text-green-600 mb-2">24/7</p>
                  <p className="text-gray-600">Access Anywhere</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                <img 
                  src="/assets/images/ssmilebanner.png" 
                  alt="Sales Smile Dashboard" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Sales?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of sales teams already using Sales Smile to boost their productivity
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View All Features
              </a>
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