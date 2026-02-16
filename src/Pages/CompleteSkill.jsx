import React from 'react';
import { Code, Server, Cloud, Gamepad2  , ExternalLink } from 'lucide-react';
import { useState } from "react";

const CompleteSkill = () => {
const skills = {
  Frontend: [
    { name: 'HTML', level: 'expert' },
    { name: 'CSS', level: 'expert' },
    { name: 'JavaScript', level: 'intermediate' },
    { name: 'React.js', level: 'intermediate' },
    { name: 'Next.js', level: 'beginner' },
    { name: 'Tailwind CSS', level: 'intermediate' },
    { name: 'Bootstrap', level: 'intermediate' },
    { name: 'Responsive Design', level: 'expert' },
  ],

  Backend: [
    { name: 'Node.js', level: 'intermediate' },
    { name: 'Express.js', level: 'intermediate' },
    { name: 'REST APIs', level: 'intermediate' },
    { name: 'JWT Authentication', level: 'beginner' },
  ],

  Database: [
    { name: 'MongoDB', level: 'intermediate' },
    { name: 'Mongoose', level: 'intermediate' },
    { name: 'CRUD Operations', level: 'expert' },
  ],

  Tools: [
    { name: 'Git', level: 'intermediate' },
    { name: 'GitHub', level: 'intermediate' },
    { name: 'VS Code', level: 'expert' },
    { name: 'Postman', level: 'intermediate' },
    { name: 'npm', level: 'intermediate' },
  ],

  DevOps: [
    { name: 'Vercel', level: 'intermediate' },
    { name: 'Netlify', level: 'intermediate' },
    { name: 'Environment Variables', level: 'intermediate' },
  ],
};


const getLevelColor = (level) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500';
      case 'intermediate':
        return 'bg-yellow-400';
      case 'beginner':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
};
const tabs = ["All", ...Object.keys(skills)];
const [activeTab, setActiveTab] = useState("All");
 const renderSkills = (skills) => (
  <div className="flex flex-wrap gap-3">
    {skills.map((skill) => (
      <span
        key={skill.name}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                   bg-white border border-gray-200 text-gray-700
                   transition-all duration-300
                   hover:-translate-y-1 hover:shadow-md
                   hover:border-blue-400 hover:text-blue-600
                   cursor-default"
      >
        {skill.name}
        {/* Dot on right side */}
        <span className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`}></span>
      </span>
    ))}
  </div>
);


    return (
        <div className=" bg-gray-50 pt-32 py-16 px-6  ">
            <section className="max-w-6xl mx-auto ">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Technical Skills & Full-Stack Development

                    </h2>
                    <p className="text-gray-600 text-lg">
                        Using modern web development tools and frameworks to build complete websites and projects.

                    </p>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Frontend Card */}
                    <div className="bg-white rounded-xl shadow-sm   border-sky-200 p-6 hover:shadow-md transition-shadow  border-2 hover:border-sky-600">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <Code className="text-blue-500" size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">Frontend</h3>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">React</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Next.js</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">TypeScript</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Tailwind CSS</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Angular</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Vite</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Bootstrap</span>
                        </div>

                        <p className="text-gray-600 text-sm">
                            Built modular React + Next.js apps with scalable state management and real-time dashboards.
                        </p>
                    </div>

                    {/* Backend Card */}
                    <div className="bg-white rounded-xl shadow-sm   border-sky-200 p-6 hover:shadow-md transition-shadow   border-2 hover:border-sky-600">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <Server className="text-blue-500" size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">Backend</h3>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Node.js</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">FastAPI</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">REST APIs</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">WebSockets</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">MongoDB</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">PostgreSQL</span>
                        </div>

                        <p className="text-gray-600 text-sm">
                            Built Node.js and FastAPI microservices with REST APIs and WebSockets, along with MongoDB and PostgreSQL databases, while completing full-stack projects.
                        </p>
                    </div>

                    {/* Cloud & DevOps Card */}
                    <div className="bg-white rounded-xl shadow-sm border-sky-200 p-6 hover:shadow-md transition-shadow border-2 hover:border-sky-600">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <Cloud className="text-blue-500" size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">Hosting & Deployment</h3>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Vercel</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Netlify</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Hostinger</span>
                        </div>

                        <p className="text-gray-600 text-sm">
                            Deployed live websites using Vercel, Netlify, and Hostinger, gaining hands-on experience with web hosting and deployment.
                        </p>
                    </div>


                    {/* AI / Tools Card */}
                    <div className="bg-white rounded-xl shadow-sm border-sky-200 p-6 hover:shadow-md transition-shadow  border-2 hover:border-sky-600">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <Gamepad2   className="text-blue-500" size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">Game Development</h3>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Unity</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">C#</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Game Mechanics</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">2D & 3D Systems</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm border border-gray-100 hover:border-sky-600">Physics & Animations</span>
                        </div>

                        <p className="text-gray-600 text-sm">
                            Developed games using Unity and C#, implementing gameplay mechanics, physics systems, animations, and 2D/3D game features.
                        </p>
                    </div>

                </div>

                {/* CTA Link */}
                <div className="text-center">
                    <a
                        href="#"
                        className="inline-flex items-center  gap-2 text-sky-500 font-semibold hover:text-sky-600 transition-colors"
                    >
                        See how I've applied these technologies in real projects
                        <ExternalLink className='mb-5 sm:mb-0' size={20} />
                    </a>
                </div>
            </section>
             <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Tabs */}
      <div className="flex justify-center items-center flex-wrap gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
              ${
                activeTab === tab
                  ? "bg-blue-500 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-12">
        {(activeTab === "All"
          ? Object.entries(skills)
          : [[activeTab, skills[activeTab]]]
        ).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-5">{category}</h3>
            
            {renderSkills(skills)}
             {/* <span className={`w-2 h-2 rounded-full ${getLevelColor(skill.level).replace('text-', 'bg-')}`}></span> */}
              
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default CompleteSkill;