import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Careers() {
  const jobs = [
    {
      title: "Flutter App Developer",
      details: [
        "Job Type: Full-Time, In-Office",
        "Experience Level: 3 to 5 Years",
      ],
      responsibilities: [
        "Develop and maintain Flutter applications",
        "Collaborate with product managers, designers & backend developers",
        "Optimize applications for speed and scalability",
        "Debug and fix bugs; conduct testing",
        "Strong proficiency in Flutter, Dart & APIs",
        "Familiarity with REST APIs & MVVM/MVC architecture",
        "Excellent communication & teamwork skills",
        "Bachelor’s degree preferred",
      ],
    },
    {
      title: "Front-End Developer",
      details: [
        "Job Type: Full-Time, In-Office",
        "Experience Level: 3 to 5 Years",
      ],
      responsibilities: [
        "Develop responsive web apps using HTML, CSS, JavaScript",
        "Work with UX/UI designers & backend teams",
        "Optimize applications for performance",
        "Debug and conduct testing",
        "Strong proficiency in React/Angular/Vue",
        "Familiarity with Git & responsive design",
        "Excellent communication & teamwork skills",
        "Bachelor’s degree preferred",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="py-20 mt-10">
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Join Our Team
          </h2>

          {jobs.map((job, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-start mb-20"
            >
              {/* Job Info */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {index + 1}. {job.title}
                </h3>

                <h4 className="font-semibold mb-2">
                  Job Details
                </h4>

                <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
                  {job.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-2">
                  Responsibilities
                </h4>

                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded">
                  Apply Now
                </button>
              </div>

              {/* Image */}
              <div>
                <img
                  src="/assets/images/careers.png"
                  alt="Careers"
                  className="rounded shadow w-full"
                />
              </div>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </>
  );
}