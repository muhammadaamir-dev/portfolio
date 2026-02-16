import React from 'react';
import { Award, Calendar, BookOpen, GraduationCap, Code, Globe } from 'lucide-react';

const CertificatesSection = () => {
  // Comprehensive certificates for Fresher/Junior Full-Stack Developers
  const certificates = [
    {
      title: "MERN Stack Training Program",
      provider: "SeeBiz",
      period: "Aug 2025 - Jan 2026",
      type: "Full-time • Training",
      description: "Comprehensive MERN Stack training covering MongoDB, Express, React, Node, and full-stack development fundamentals. Perfect for freshers and junior web developers.",
      icon: Code,
      color: "from-blue-50 to-sky-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      badgeColor: "bg-blue-100 text-blue-700",
      borderColor: "border-blue-200"
    },
    {
      title: "Frontend Development Course",
      provider: "Udemy",
      period: "Aug 2025 - Oct 2025",
      type: "Online • Training",
      description: "Hands-on frontend development with HTML, CSS, JavaScript, and modern frameworks like React.js. Ideal for beginners and junior web developers.",
      icon: Globe,
      color: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      badgeColor: "bg-green-100 text-green-700",
      borderColor: "border-green-200"
    },
    {
      title: "MERN Stack Bootcamp",
      provider: "Udemy",
      period: "Aug 2025 - Jan 2026",
      type: "Online • Bootcamp",
      description: "Practical MERN Stack development course focused on building real-world full-stack web applications. Suitable for fresher or junior level web developers.",
      icon: GraduationCap,
      color: "from-purple-50 to-violet-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      badgeColor: "bg-purple-100 text-purple-700",
      borderColor: "border-purple-200"
    },
    // {
    //   title: "JavaScript Fundamentals",
    //   provider: "freeCodeCamp",
    //   period: "2023",
    //   type: "Online • Certification",
    //   description: "Complete JavaScript fundamentals covering ES6+, DOM manipulation, async programming, and modern JavaScript features. Essential for all web developers.",
    //   icon: Code,
    //   color: "from-yellow-50 to-amber-50",
    //   iconBg: "bg-yellow-100",
    //   iconColor: "text-yellow-600",
    //   badgeColor: "bg-yellow-100 text-yellow-700",
    //   borderColor: "border-yellow-200"
    // },
    // {
    //   title: "React.js Complete Course",
    //   provider: "Udemy",
    //   period: "2024",
    //   type: "Online • Course",
    //   description: "Master React.js from basics to advanced concepts including hooks, context API, Redux, and building production-ready applications. Perfect for frontend developers.",
    //   icon: Globe,
    //   color: "from-cyan-50 to-blue-50",
    //   iconBg: "bg-cyan-100",
    //   iconColor: "text-cyan-600",
    //   badgeColor: "bg-cyan-100 text-cyan-700",
    //   borderColor: "border-cyan-200"
    // },
    // {
    //   title: "Node.js & Express Backend Development",
    //   provider: "Coursera",
    //   period: "2024",
    //   type: "Online • Specialization",
    //   description: "Learn backend development with Node.js and Express.js, including REST APIs, authentication, database integration, and deployment. Essential for full-stack developers.",
    //   icon: Code,
    //   color: "from-indigo-50 to-purple-50",
    //   iconBg: "bg-indigo-100",
    //   iconColor: "text-indigo-600",
    //   badgeColor: "bg-indigo-100 text-indigo-700",
    //   borderColor: "border-indigo-200"
    // },
    // {
    //   title: "MongoDB Database Fundamentals",
    //   provider: "MongoDB University",
    //   period: "2023",
    //   type: "Online • Certification",
    //   description: "Complete MongoDB training covering database design, CRUD operations, aggregation, indexing, and best practices for NoSQL databases in modern applications.",
    //   icon: GraduationCap,
    //   color: "from-green-50 to-teal-50",
    //   iconBg: "bg-teal-100",
    //   iconColor: "text-teal-600",
    //   badgeColor: "bg-teal-100 text-teal-700",
    //   borderColor: "border-teal-200"
    // },
    // {
    //   title: "Git & GitHub Version Control",
    //   provider: "GitHub Learning Lab",
    //   period: "2023",
    //   type: "Online • Course",
    //   description: "Master Git version control and GitHub collaboration including branching, merging, pull requests, and team workflows. Critical skill for all developers.",
    //   icon: Code,
    //   color: "from-gray-50 to-slate-50",
    //   iconBg: "bg-gray-100",
    //   iconColor: "text-gray-600",
    //   badgeColor: "bg-gray-100 text-gray-700",
    //   borderColor: "border-gray-200"
    // },
    // {
    //   title: "Responsive Web Design",
    //   provider: "freeCodeCamp",
    //   period: "2023",
    //   type: "Online • Certification",
    //   description: "Learn responsive web design principles, CSS Grid, Flexbox, media queries, and mobile-first development. Foundation for modern web development.",
    //   icon: Globe,
    //   color: "from-pink-50 to-rose-50",
    //   iconBg: "bg-pink-100",
    //   iconColor: "text-pink-600",
    //   badgeColor: "bg-pink-100 text-pink-700",
    //   borderColor: "border-pink-200"
    // },
    // {
    //   title: "RESTful API Development",
    //   provider: "Udemy",
    //   period: "2024",
    //   type: "Online • Course",
    //   description: "Build professional RESTful APIs with best practices, authentication, error handling, and documentation. Essential for backend and full-stack developers.",
    //   icon: Code,
    //   color: "from-orange-50 to-amber-50",
    //   iconBg: "bg-orange-100",
    //   iconColor: "text-orange-600",
    //   badgeColor: "bg-orange-100 text-orange-700",
    //   borderColor: "border-orange-200"
    // },
    // {
    //   title: "Tailwind CSS Mastery",
    //   provider: "Tailwind Labs",
    //   period: "2024",
    //   type: "Online • Course",
    //   description: "Master utility-first CSS framework Tailwind CSS for rapid UI development, responsive design, and modern styling techniques. Popular in modern web development.",
    //   icon: Globe,
    //   color: "from-sky-50 to-cyan-50",
    //   iconBg: "bg-sky-100",
    //   iconColor: "text-sky-600",
    //   badgeColor: "bg-sky-100 text-sky-700",
    //   borderColor: "border-sky-200"
    // },
    // {
    //   title: "Web Development Fundamentals",
    //   provider: "Codecademy",
    //   period: "2023",
    //   type: "Online • Path",
    //   description: "Complete web development fundamentals including HTML5, CSS3, JavaScript basics, and introduction to web technologies. Perfect starting point for beginners.",
    //   icon: GraduationCap,
    //   color: "from-violet-50 to-purple-50",
    //   iconBg: "bg-violet-100",
    //   iconColor: "text-violet-600",
    //   badgeColor: "bg-violet-100 text-violet-700",
    //   borderColor: "border-violet-200"
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8 pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-sky-100 p-3 rounded-full">
              <Award className="w-8 h-8 text-sky-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
             Certificates <span className="text-sky-500">& Achievements</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Professional certifications and achievements that demonstrate expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-md border-2 ${cert.borderColor} overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fadeIn`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Certificate Header with Icon */}
                <div className={`relative bg-gradient-to-br ${cert.color} p-6 flex items-center justify-center h-32 overflow-hidden`}>
                  <div className={`${cert.iconBg} p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <IconComponent className={`w-10 h-10 ${cert.iconColor}`} strokeWidth={2} />
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full -ml-8 -mb-8"></div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-sky-600 transition-colors">
                    {cert.title}
                  </h3>
                  
                  {/* Provider */}
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-sky-500 flex-shrink-0" />
                    <p className="text-sky-600 font-semibold text-sm">
                      {cert.provider}
                    </p>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <p className="text-gray-500 text-sm">
                      {cert.period}
                    </p>
                  </div>

                  {/* Type Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold ${cert.badgeColor} shadow-sm`}>
                      {cert.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Target Audience Tag */}
                   
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        

      </div>

      {/* Fade-in Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default CertificatesSection;
