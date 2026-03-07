"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 bg-white z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <Link href="/">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="w-20"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center relative">
          
          <Link href="/" className="text-gray-900 font-medium hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-900 font-medium hover:text-blue-600">About</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
           <Link href="/services" className="text-gray-900 font-medium hover:text-blue-600">Services</Link>

            {servicesOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded p-4 w-56">
                <Link href="/services" className="block py-2 text-gray-800 hover:text-blue-600">Software Development</Link>
                <Link href="/services" className="block py-2 text-gray-800 hover:text-blue-600">Website Development</Link>
                <Link href="/services" className="block py-2 text-gray-800 hover:text-blue-600">Mobile App Development</Link>
                <Link href="/services" className="block py-2 text-gray-800 hover:text-blue-600">MDM</Link>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
           <Link href="/products" className="text-gray-900 font-medium hover:text-blue-600">Products</Link>

            {productsOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded p-4 w-48">
                <Link href="/products" className="block py-2 text-gray-800 hover:text-blue-600">HR Smile</Link>
                <Link href="/products" className="block py-2 text-gray-800 hover:text-blue-600">Sales Smile</Link>
                <Link href="/products" className="block py-2 text-gray-800 hover:text-blue-600">Guest Smile</Link>
                <Link href="/products" className="block py-2 text-gray-800 hover:text-blue-600">ITAM</Link>
                <Link href="/products" className="block py-2 text-gray-800 hover:text-blue-600">I-Connect</Link>
              </div>
            )}
          </div>

          <Link href="/pricing" className="text-gray-900 font-medium hover:text-blue-600">Pricing</Link>
          <Link href="/careers" className="text-gray-900 font-medium hover:text-blue-600">Careers</Link>
          <Link href="/blogs" className="text-gray-900 font-medium hover:text-blue-600">Blogs</Link>
          <Link href="/contact" className="text-gray-900 font-medium hover:text-blue-600">Contact</Link>

          <Link
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Free Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl text-gray-900"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          <Link href="/" className="text-gray-900 font-medium">Home</Link>
          <Link href="/about" className="text-gray-900 font-medium">About</Link>

          <div>
            <p className="font-semibold text-gray-900">Services</p>
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/services" className="text-gray-700">Software Development</Link>
              <Link href="/services" className="text-gray-700">Website Development</Link>
              <Link href="/services" className="text-gray-700">Mobile App Development</Link>
              <Link href="/services" className="text-gray-700">MDM</Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-900">Products</p>
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/products" className="text-gray-700">HR Smile</Link>
              <Link href="/products" className="text-gray-700">Sales Smile</Link>
              <Link href="/products" className="text-gray-700">Guest Smile</Link>
              <Link href="/products" className="text-gray-700">ITAM</Link>
              <Link href="/products" className="text-gray-700">I-Connect</Link>
            </div>
          </div>

          <Link href="/careers" className="text-gray-900 font-medium">Careers</Link>
          <Link href="/blogs" className="text-gray-900 font-medium">Blogs</Link>
          <Link href="/contact" className="text-gray-900 font-medium">Contact</Link>
        </div>
      )}
    </header>
  );
}