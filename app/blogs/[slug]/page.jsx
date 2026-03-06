import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const blogData = {
  "why-developing-apps-are-crucial": {
    title: "Why developing apps are crucial for business?",
    image: "/assets/images/blog1.png",
    content: (
      <>
        <p className="mb-4">
          In today’s digital age, mobile apps have become very important tools for businesses.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          1. Enhanced Customer Engagement
        </h3>
        <p className="mb-4">
          Apps offer direct interaction and improve loyalty.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          2. Increased Accessibility
        </h3>
        <p className="mb-4">
          Apps make your business accessible anytime and anywhere.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          3. Revenue Generation
        </h3>
        <p className="mb-4">
          Apps open new revenue streams like subscriptions and ads.
        </p>
      </>
    ),
  },

  "app-with-and-without-encryption": {
    title: "What is difference b/w the App with and without encryption?",
    image: "/assets/images/blog2.png",
    content: (
      <>
        <p className="mb-4">
          Encryption converts data into a secret code to prevent unauthorized access.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Apps Without Encryption
        </h3>
        <p className="mb-4">
          Data can be intercepted and misused.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Apps With Encryption
        </h3>
        <p className="mb-4">
          Data is scrambled and secure.
        </p>
      </>
    ),
  },
};

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    return <div className="p-20 text-center">Blog not found</div>;
  }

  return (
    <>
      <Navbar />

      <section className="py-20 mt-10">
        <div className="container mx-auto px-6 max-w-4xl">

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded mb-8"
          />

          <h1 className="text-3xl font-bold mb-6">
            {blog.title}
          </h1>

          <div className="text-gray-700 leading-relaxed">
            {blog.content}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}