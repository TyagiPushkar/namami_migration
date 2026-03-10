import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const blogs = [
  {
    title: "Why developing apps are crucial for business?",
    image: "/assets/images/blog1.png",
    slug: "why-developing-apps-are-crucial",
    date: "July 8, 2024",
    readTime: "5 min read",
    excerpt: "Discover how mobile apps can transform your business and drive growth in the digital age."
  },
  {
    title: "What is difference b/w the App with and without encryption?",
    image: "/assets/images/blog2.png",
    slug: "app-with-and-without-encryption",
    date: "August 4, 2024",
    readTime: "4 min read",
    excerpt: "Understanding the critical role of encryption in protecting user data and building trust."
  },
];

export default function Blogs() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-10 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            📚 Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Insights &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
              Ideas
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Thoughts, stories, and ideas from our team
          </p>
        </div>
      </section>

      {/* Blogs Listing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

            {blogs.map((blog, i) => (
              <Link
                key={i}
                href={`/blogs/${blog.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">{blog.date}</span>
                    </div>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">{blog.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group/link">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}

          </div>

          {/* Newsletter Section */}
          {/* <div className="mt-20 max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Get the latest posts delivered right to your inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-600/25 transition-all hover:scale-105">
                  Subscribe
                </button>
              </form>
            </div>
          </div> */}

        </div>
      </section>

      <Footer />
    </>
  );
}