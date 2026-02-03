import { Mail, MessageSquare, Github, Linkedin, Download } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import profileImg from "../assets/images/profile.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewWork = () => {
    navigate('/projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 md:pt-32 pb-20 bg-gray-50 min-h-[90vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hi, I'm <span className="text-sky-500">Muhammad Aamir</span>
          </h1>

          <p className="mt-4 text-md sm:text-lg md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Full-Stack MERN Developer building scalable, production-ready web applications. I turn ideas into functional products with clean code, solid performance, and intuitive UI.
          </p>

          {/* STATS SECTION */}
          <div className="flex flex-col sm:flex-row sm:gap-8 mb-8 justify-center md:justify-start mt-6">
            <div className="mb-4 flex justify-center items-center gap-1 sm:mb-0">
              <span className="text-md font-bold text-sky-600">8+</span>
              <p className="text-md font-semibold text-gray-600">Projects Built</p>
            </div>
            <div className="mb-4 flex justify-center items-center gap-1 sm:mb-0">
              <span className="text-md font-bold text-sky-600">6</span>
              <p className="text-md font-semibold text-gray-600">Months Experience</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <span className="text-md font-bold text-sky-600">100+</span>
              <p className="text-md font-semibold text-gray-600">Users Impacted</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={handleViewWork}
              className="group px-6 py-2.5 bg-sky-500 rounded-lg text-white cursor-pointer active:scale-95 transition duration-300 inline-block relative overflow-hidden"
            >
              <span className="relative block h-6 overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  View My Work
                </span>
                <span className="absolute w-full top-full left-0 block text-center transition-transform duration-300 group-hover:translate-y-[-100%]">
                  View My Work
                </span>
              </span>
            </button>

            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-sky-400 px-6 py-2.5 font-medium text-sky-600 hover:bg-sky-600 hover:text-white hover:border-sky-600 hover:scale-105 transition-all duration-300"
            >
              <MessageSquare size={18} /> Contact Me
            </button>

            <a
              href="/resume/Muhammad-Aamir-Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-sky-400 px-6 py-2.5 font-medium text-sky-600 hover:bg-sky-600 hover:text-white hover:border-sky-600 hover:scale-105 transition-all duration-300"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center mt-10 md:mt-0">
          <div className="relative animate-float w-55 h-55 sm:w-65 sm:h-65 md:w-70 md:h-70 lg:w-75 lg:h-75 xl:w-80 xl:h-80">
            <img
              src={profileImg}
              alt="Muhammad Aamir"
              className="w-full h-full rounded-full object-cover border-4 border-sky-400 hover:border-sky-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="mt-6 flex flex-col items-center space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="flex gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/muhammadaamir-dev" },
                { icon: Github, label: "GitHub", link: "https://github.com/muhammadaamir-dev" },
                { icon: Mail, label: "Email", link: "mailto:muhammadaamir.mcs@gmail.com" },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div key={i} className="relative group">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-sky-300 bg-white flex items-center justify-center hover:bg-sky-50 hover:border-sky-400 hover:scale-110 transition-all duration-500">
                        <Icon
                          size={24}
                          className="text-sky-400 transition-transform duration-[300ms] delay-[600ms] ease-in-out group-hover:rotate-[360deg]"
                        />
                      </div>
                    </a>

                    <span className="pointer-events-none absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-gray-700 bg-white px-3 py-1 text-xs font-semibold text-gray-700 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-1">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-sm sm:text-md font-medium text-gray-500 text-center pt-4">
              Remote-first • Async-friendly • Production-focused
            </p>
          </div>
        </div>
      </div>

      <style>{`
    .animate-float {
  animation: float 0.2s ease-in-out infinite alternate;
}

@keyframes float {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

      `}</style>
    </section>
  );
};

export default Hero;
