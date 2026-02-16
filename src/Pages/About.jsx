import {
  Layers,
  Code,
  Cloud,
  Bot,
  Shield,
  CheckCircle
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen  ">

      {/* Hero Section */}
     <section id="about" className="max-w-5xl mx-auto px-6 pt-32 pb-10 text-center">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
    Hi, I'm Muhammad Aamir
  </h1>

  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
    A <span className="font-semibold text-sky-500">Full-Stack Software Developer</span> specializing in modern web applications with hands-on experience in the MERN stack. I build scalable, secure, and production-ready applications with RESTful APIs, authentication & authorization (JWT, role-based access), and complete end-to-end workflows designed for real-world business use.
  </p>

  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
    My expertise includes creating <span className="font-semibold text-sky-500">maintainable architectures, database-driven systems, and high-performance applications</span> using modern JavaScript technologies and clean development practices.
  </p>

  <p className="text-lg font-medium text-gray-700 mb-8">
    <span className="text-sky-500 font-bold">Why Work With Me:</span>{" "}
    I deliver production-ready web applications with clean code, secure systems, and a strong focus on performance, scalability, and long-term maintainability.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed">
    Additionally, I have prior experience in Unity game development, which has strengthened my problem-solving skills and software architecture understanding.
  </p>
</section>


      {/* Why Software Fails */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Why software tools fail and how I prevent it
        </h2>

        <p className="text-center text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
          Most software fails because of unclear architecture, rushed decisions, or systems that don't scale beyond the first users.
        </p>

        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          I build <span className="text-blue-500 font-semibold">production-grade applications</span> with full-stack ownership from architecture and APIs to cloud deployment designed to support real usage and long-term growth.
        </p>

        {/* My Approach */}
        <h3 className="text-4xl font-bold text-center mb-10 text-gray-900">
          My approach
        </h3>

        <div className="   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">

          {/* Card */}
          {[
            { icon: Layers, text: "Modular, scalable system architecture" },
            { icon: Code, text: "Clean, maintainable codebases" },
            { icon: Cloud, text: "Cloud-ready deployments (vercel / Netlify)" },
            { icon: Bot, text: "AI-assisted development where it adds real value" },
            { icon: Shield, text: "Ownership from requirements to production support" },
            { icon: Shield, text: "Designed to reduce risk, not create it" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="w-full h-full border border-gray-300 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Icon className="text-sky-500 w-7 h-7 " />
                  </div>
                  <h4 className="text-lg   text-gray-900 break-words">
                    {item.text}
                  </h4>
                </div>
              </div> 
            );
          })}
        </div>

        {/* Bottom Highlights */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-700">
          <div className="flex items-center gap-2 border border-gray-200 rounded-3xl px-4 py-2 bg-white">
            <CheckCircle className="text-blue-500" size={20} />
            <span>Production systems deployed</span>
          </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-3xl px-4 py-2 bg-white">
            <CheckCircle className="text-blue-500" size={20} />
            <span>Remote-first, async work experience</span>
          </div>
          <div className="flex items-center gap-2 border border-gray-200 rounded-3xl px-4 py-2 bg-white">
            <CheckCircle className="text-blue-500" size={20} />
            <span>MERN stack expertise</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
