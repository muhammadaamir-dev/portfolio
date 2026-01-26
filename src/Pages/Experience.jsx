import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const navigate = useNavigate();

  const handleViewAllExperience = () => {
    navigate('/experience');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

   const experiences = [
    {
      title: "MERN Stack Training Program",
      company: "SeeBiz",
      location: "Lahore, Punjab, Pakistan",
      period: "Jul 2025 - Dec 2025",
      type: "Full-time • Training",
      achievements: [
        "Completed comprehensive 6-month MERN Stack development training",
        "Built full-stack applications using MongoDB, Express.js, React.js, and Node.js",
        "Developed RESTful APIs and integrated frontend with backend services",
        "Learned modern development practices and agile methodologies"
      ],
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "REST APIs"]
    },
    {
      title: "Personal Projects",
      company: "Freelance & Self-Learning",
      location: "Lahore, Punjab, Pakistan",
      period: "2026 - Present",
      type: "Self-driven • Portfolio",
      achievements: [
        "Developed responsive web applications using modern frameworks",
        "Created full-stack projects demonstrating end-to-end development skills",
        "Implemented user authentication and database management systems",
        "Experimented with new technologies and best practices"
      ],
      skills: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Git", "+3"]
    }
  ];

  return (
    <div className="   bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Professional <span className="text-sky-500">Experience</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Building production systems for real-world applications
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md border-2 border-sky-200 p-8 hover:shadow-xl hover:border-sky-400 transition-all duration-300">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-sky-100 p-3 rounded-lg">
                  <Building2 className="w-6 h-6 text-sky-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-sky-600 font-semibold mb-3">
                    {exp.company}
                  </p>
                  
                  {/* Location and Date */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                  
                  {/* Employment Type */}
                  <p className="text-sm text-gray-500">
                    {exp.type}
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-4 mb-8">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100  text-gray-700 text-sm rounded-lg border-2 border-sky-100  hover:border-sky-500 hover:text-sky-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="text-center py-10">
                    <button
                        onClick={handleViewAllExperience}
                        className="inline-flex items-center  gap-2 text-sky-500 font-semibold hover:text-sky-600 transition-colors cursor-pointer"
                    >
                        See my all experience
                        <ExternalLink className='mb-5 sm:mb-0' size={20} />
                    </button>
                </div>
    </div>
  );
}

export default Experience