import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const blogs = [
  {
    title: "Why developing apps are crucial for business?",
    image: "/assets/images/blog1.png",
    slug: "why-developing-apps-are-crucial",
    date: "July 8, 2024",
  },
  {
    title: "What is difference b/w the App with and without encryption?",
    image: "/assets/images/blog2.png",
    slug: "app-with-and-without-encryption",
    date: "August 4, 2024",
  },
];

export default function Blogs() {
  return (
    <>
      <Navbar />

      <section className="py-20 mt-10">
        <div className="container mx-auto px-6">

          <h1 className="text-4xl font-bold text-center mb-16">
            Blogs Corner
          </h1>

          <div className="grid md:grid-cols-2 gap-10">

            {blogs.map((blog, i) => (
              <div key={i} className="bg-gray-900 rounded-lg overflow-hidden shadow">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full"
                />

                <div className="p-6 text-center">

                  <h3 className="text-white text-xl font-semibold mb-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 mb-4">
                    {blog.date}
                  </p>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="border border-white px-4 py-2 text-white hover:bg-white hover:text-black transition"
                  >
                    Read More
                  </Link>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}