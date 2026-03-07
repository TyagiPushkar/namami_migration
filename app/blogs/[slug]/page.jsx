import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Calendar, ArrowLeft, Clock, Share2 } from 'lucide-react';

const blogData = {
  "why-developing-apps-are-crucial": {
    title: "Why developing apps are crucial for business?",
    image: "/assets/images/blog1.png",
    date: "July 8, 2024",
    readTime: "5 min read",
    author: "Namami Infotech Team",
    content: (
      <>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          In today's digital age, mobile apps have become very important tools for businesses. 
          They are no longer just an option but a necessity for companies wanting to stay competitive 
          and connected with their customers.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
          <p className="text-gray-800 italic">
            "Mobile apps are transforming how businesses interact with customers and manage operations."
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          1. Enhanced Customer Engagement
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Apps offer direct interaction and improve loyalty. With push notifications, personalized content, 
          and easy access, businesses can engage customers like never before. Apps create a direct channel 
          between you and your customers, fostering stronger relationships.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">Direct Communication</h4>
            <p className="text-gray-600">Push notifications and in-app messaging</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">Personalized Experience</h4>
            <p className="text-gray-600">Tailored content and recommendations</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          2. Increased Accessibility
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Apps make your business accessible anytime and anywhere. Customers can browse products, 
          make purchases, or contact support 24/7. This round-the-clock availability can significantly 
          boost sales and customer satisfaction.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          3. Revenue Generation
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Apps open new revenue streams like subscriptions and ads. Whether through in-app purchases, 
          premium features, or advertising, apps provide multiple ways to monetize your business and 
          create sustainable income.
        </p>
      </>
    ),
  },

  "app-with-and-without-encryption": {
    title: "What is difference b/w the App with and without encryption?",
    image: "/assets/images/blog2.png",
    date: "August 4, 2024",
    readTime: "4 min read",
    author: "Namami Infotech Team",
    content: (
      <>
        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
          Encryption converts data into a secret code to prevent unauthorized access. It's like 
          putting your data in a safe that only the intended recipient can open. Understanding the 
          difference between encrypted and non-encrypted apps is crucial for data security.
        </p>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8">
          <p className="text-gray-800 font-medium">
            🔐 Without encryption, your sensitive data is vulnerable to interception and misuse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              Apps Without Encryption
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-gray-700">Data can be intercepted and misused</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-gray-700">Passwords and personal info at risk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-gray-700">Compliance issues with data protection laws</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span className="text-gray-700">Loss of customer trust</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Apps With Encryption
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">Data is scrambled and secure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">End-to-end protection for sensitive info</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">GDPR and compliance ready</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">Builds customer confidence</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Why Encryption Matters
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          In today's world of increasing cyber threats, encryption is not optional—it's essential. 
          It protects not just your users' data but also your business reputation and legal compliance.
        </p>
      </>
    ),
  },
};

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Not Found</h2>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Back Navigation */}
      <div className="pt-32 pb-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all blogs
          </Link>
        </div>
      </div>

      {/* Blog Detail Section */}
      <section className="py-8 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-10">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[500px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Meta Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                NI
              </div>
              <div>
                <p className="font-semibold text-gray-900">{blog.author}</p>
                <p className="text-sm text-gray-500">Published on {blog.date}</p>
              </div>
            </div>
            
            {/* Share Button */}
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            {blog.content}
          </div>

          {/* Navigation to Next/Previous Blog */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Articles
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}