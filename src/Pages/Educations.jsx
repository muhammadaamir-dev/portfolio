import React, { useState } from 'react';
import { GraduationCap, School, Calendar, Award, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';



const Educations = () => {
  const [expandedSchool, setExpandedSchool] = useState(null);
  const [activeTab, setActiveTab] = useState('school');

  const toggleSchool = (id) => {
    setExpandedSchool(expandedSchool === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Education <span className="text-sky-500">& Background</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Academic achievements and educational foundation that shaped my software engineering career.
          </p>
        </div>

        {/* University Section - Featured */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-6 relative">
          {/* Featured Badge */}
           

          <div className="flex flex-col md:flex-row gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="bg-sky-500 p-6 rounded-2xl shadow-md">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                The Islamia University of Bahawalpur
              </h2>
              <h3 className="text-xl text-sky-600 font-semibold mb-3">
                Master of Computer Science (MCS)
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Computer Science, Software Engineering
              </p>

              {/* Duration and Grade */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  2022 - 2024
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  Grade: A
                </span>
              </div>

              {/* CGPA Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-sky-600" />
                    <h4 className="font-semibold text-gray-700 text-sm">CGPA</h4>
                  </div>
                  <p className="text-3xl font-bold text-sky-600">
                    3.67 <span className="text-lg text-gray-500">/ 4.00</span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1">(A)</p>
                </div>
              </div>

              {/* Key Coursework */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-gray-700" />
                  <h4 className="font-semibold text-gray-900">Key Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures & Algorithms', 'Databases', 'Artificial Intelligence', 'Software Engineering', 'Web Technologies', 'Advanced Programming'].map((course, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-sky-100 text-sky-700 text-sm rounded-lg"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveTab('training')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'training'
                ? 'bg-gray-200 text-gray-900'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Training Programs
          </button>
          <button
            onClick={() => setActiveTab('degree')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'degree'
                ? 'bg-sky-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Bachelor's Degree
          </button>
          <button
            onClick={() => setActiveTab('school')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'school'
                ? 'bg-sky-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            School Education
          </button>
        </div>

        {/* Bachelor's Degree Section */}
        {activeTab === 'degree' && (
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="bg-green-100 p-5 rounded-xl">
                  <GraduationCap className="w-10 h-10 text-green-600" />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  The Islamia University of Bahawalpur
                </h2>
                <h3 className="text-xl text-green-600 font-semibold mb-3">
                  Bachelor of Science in Computer Science (BSc CS)
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Computer Science, Programming, Software Development
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    2018 - 2022
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    Grade: A
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-gray-700" />
                    <h4 className="font-semibold text-gray-900">Key Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Object Oriented Programming', 'Data Structures', 'Database Systems', 'Web Development', 'Software Engineering', 'Computer Networks', 'Operating Systems', 'Discrete Mathematics'].map((course, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-green-100 text-green-700 text-sm rounded-lg"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* School Education Section */}
        {activeTab === 'school' && (
          <div className="space-y-4">
            
            {/* Intermediate/College */}
            <div className="bg-white rounded-xl shadow-md border-2 border-sky-200 overflow-hidden">
              <button
                onClick={() => toggleSchool('college')}
                className="w-full p-6 flex items-center justify-between hover:bg-sky-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-sky-100 p-3 rounded-lg">
                    <School className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-900">
                      Unique Group of Institutions
                    </h3>
                    <p className="text-sky-600 font-medium text-sm">
                      Intermediate (FSc Pre-Engineering)
                    </p>
                    <div className="flex gap-4 text-sm text-gray-600 mt-1">
                      <span>2017 - 2019</span>
                      <span>•</span>
                      <span>Grade: A+</span>
                    </div>
                  </div>
                </div>
                {expandedSchool === 'college' ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              
              {expandedSchool === 'college' && (
                <div className="px-6 pb-6 border-t border-sky-100">
                  <div className="pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Mathematics', 'Physics', 'Chemistry', 'Computer Science'].map((subject, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Matriculation */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSchool('matric')}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <School className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-900">
                      Al-Barakah School
                    </h3>
                    <p className="text-sky-600 font-medium text-sm">
                      Matriculation (SSC)
                    </p>
                    <div className="flex gap-4 text-sm text-gray-600 mt-1">
                      <span>2005 - 2017</span>
                      <span>•</span>
                      <span>Grade: A+</span>
                    </div>
                  </div>
                </div>
                {expandedSchool === 'matric' ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              
              {expandedSchool === 'matric' && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Mathematics', 'Science', 'English', 'Urdu', 'Islamiyat', 'Pakistan Studies'].map((subject, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

        {/* Training Programs Section */}
        {activeTab === 'training' && (
          <div className="space-y-4">
            {/* SeeBiz Training */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-sky-100 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-sky-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    MERN Stack Development Program
                  </h3>
                  <p className="text-sky-600 font-medium text-sm">
                    SeeBiz Training Institute
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    June 2024 - December 2024 • 6 Months
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Comprehensive full-stack development training covering MongoDB, Express.js, React.js, and Node.js with hands-on project experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'Full-Stack Projects'].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-sky-100 text-sky-700 text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Udemy Course */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    MERN Stack Bootcamp
                  </h3>
                  <p className="text-purple-600 font-medium text-sm">
                    Udemy Online Course
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    2024 • Self-paced Learning
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Advanced MERN Stack development bootcamp focusing on building scalable full-stack applications, authentication systems, and modern web development practices.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Advanced React', 'Backend Development', 'Database Design', 'Authentication', 'Deployment'].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Educations