import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-section bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Footer CTA - Address, Phone, Email */}
        <div className="footer-cta py-10 border-b border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Address */}
            <div className="single-cta flex items-start gap-4">
              <i className="fas fa-map-marker-alt text-blue-500 text-xl"></i>
              <div className="cta-text">
                <h4 className="text-gray-400 text-sm font-medium">DPT - 303, DLF Prime Tower,</h4>
                <span className="text-white">Okhla Phase - 1, New Delhi - 110020.</span>
              </div>
            </div>
            
            {/* Phone */}
            <div className="single-cta flex items-start gap-4">
              <i className="fas fa-phone text-blue-500 text-xl"></i>
              <div className="cta-text">
                <h4 className="text-gray-400 text-sm font-medium">Call us</h4>
                <span className="text-white">+91-9906060126</span>
              </div>
            </div>
            
            {/* Email */}
            <div className="single-cta flex items-start gap-4">
              <i className="far fa-envelope-open text-blue-500 text-xl"></i>
              <div className="cta-text">
                <h4 className="text-gray-400 text-sm font-medium">Mail us</h4>
                <span className="text-white">solutions@namami-infotech.com</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Footer Content - Logo, Links, Subscribe */}
        <div className="footer-content py-10">
          <div className="grid md:grid-cols-3 gap-10">
            
            {/* Logo and Social */}
            <div className="footer-widget">
              <div className="footer-logo mb-6">
                <a href="/">
                  <img 
                    src="/assets/images/darklogo.png" 
                    className="w-40" 
                    alt="logo"
                  />
                </a>
              </div>
              <div className="footer-text mb-6">
                <p className="text-gray-300">
                  Say bye to Manual Tasks & Digitize your workflows with our customized mobile apps.
                </p>
              </div>
              <div className="footer-social-icon">
                <span className="text-gray-400 text-sm font-medium block mb-3">Follow us</span>
                <div className="flex gap-3">
                  <a 
                    href="https://www.linkedin.com/company/namami-infotech-india-pvt-ltd/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <i className="fab fa-linkedin text-white"></i>
                  </a>
                  <a 
                    href="https://www.instagram.com/namami.infotech" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61561795836649" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="footer-widget">
              <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li><Link href="/" className="text-gray-400 hover:text-blue-500 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors">About</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-blue-500 transition-colors">Services</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-blue-500 transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors">About us</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-blue-500 transition-colors">Our Services</Link></li>
                <li><Link href="/about#team" className="text-gray-400 hover:text-blue-500 transition-colors">Expert Team</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-blue-500 transition-colors">Contact us</Link></li>
                <li><Link href="/blogs" className="text-gray-400 hover:text-blue-500 transition-colors">Latest Blogs</Link></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="footer-widget">
              <h3 className="text-xl font-semibold mb-6">Subscribe</h3>
              <div className="footer-text mb-6">
                <p className="text-gray-300">
                  Don’t miss to subscribe to our new feeds, kindly fill the form below.
                </p>
              </div>
              <div className="subscribe-form">
                <form action="#" className="flex">
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-3 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors"
                  >
                    <i className="fab fa-telegram-plane"></i>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Copyright Area */}
      <div className="copyright-area bg-gray-800 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="copyright-text mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                Copyright &copy; 2024, All Right Reserved 
                <a href="https://namami-infotech.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 ml-1">
                  By Namami Infotech
                </a>
              </p>
            </div>
            <div className="footer-menu">
              <ul className="flex gap-4">
                <li><Link href="/" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Home</Link></li>
                <li><span className="text-gray-600">|</span></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Terms</Link></li>
                <li><span className="text-gray-600">|</span></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Privacy</Link></li>
                <li><span className="text-gray-600">|</span></li>
                <li><Link href="/policy" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Policy</Link></li>
                <li><span className="text-gray-600">|</span></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-blue-500 text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float */}
      <div className="whatsapp-float fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/+919906060126" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-16 h-16 bg-green-500 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <img src="/assets/images/whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
        </a>
      </div>

      {/* Font Awesome for icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
      />
    </footer>
  );
}