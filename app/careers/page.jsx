import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Briefcase, Clock, ChevronRight, MapPin } from 'lucide-react';

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
        "Bachelor's degree preferred",
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
        "Bachelor's degree preferred",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section - Minimal */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
              Team
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Build your career with us and work on exciting projects
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-start mb-24 last:mb-0"
            >
              {/* Job Info */}
              <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {index + 1}. {job.title}
                  </h3>
                  
                  <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>

                {/* Job Details Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {job.details.map((item, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        {i === 0 ? 
                          <Briefcase className="w-4 h-4 text-blue-600" /> : 
                          <Clock className="w-4 h-4 text-purple-600" />
                        }
                        <span className="text-sm font-semibold text-gray-700">
                          {item.split(":")[0]}:
                        </span>
                      </div>
                      <p className="text-gray-900 font-medium ml-6">
                        {item.split(":")[1]}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-gray-900">Responsibilities & Requirements</h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-600/25 transition-all hover:scale-105">
                  Apply Now
                </button>
              </div>

              {/* Image - Properly Adjusted */}
              <div className={`relative h-full ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/assets/images/careers.png"
                    alt="Careers"
                    className="w-full h-[400px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Simple Badge */}
                {/* <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3">
                  <p className="text-sm font-bold text-gray-900">We're Hiring!</p>
                </div> */}
              </div>
            </div>
          ))}

          {/* Simple Open Application */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-3">Don't see a matching position?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Send your resume
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}