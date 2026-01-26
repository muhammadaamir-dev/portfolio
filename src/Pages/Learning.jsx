import React from 'react';
import { Code2, TrendingUp, CheckCircle, Circle } from 'lucide-react';

const Learning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Learning <span className="text-sky-500">& Progress</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Transitioning from game development to full-stack web development with hands-on project experience.
          </p>
        </div>

        {/* MERN Stack Development Card */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
          
          {/* Title Section */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-sky-100 p-3 rounded-lg">
              <Code2 className="w-6 h-6 text-sky-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Advanced MERN Stack Development
              </h2>
              <p className="text-gray-600 text-sm">
                Building production-ready full-stack applications with MongoDB, Express.js, React.js, and Node.js.
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-bold text-sky-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-sky-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>

          {/* Learning Milestones */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">
                Learning Milestones
              </h3>
            </div>

            <ul className="space-y-4">
              {/* Completed Milestone 1 */}
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-500 line-through">MERN Stack Training Program (SeeBiz - 6 months)</span>
              </li>

              {/* Completed Milestone 2 */}
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-500 line-through">Built 5 Full-Stack Projects (E-commerce, Auth Systems, RESTful APIs)</span>
              </li>

              {/* In Progress Milestone */}
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-sky-500 flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-500"></div>
                </div>
                <span className="text-gray-900 font-medium">Advanced Backend Architecture & Scalability Patterns</span>
              </li>

              {/* Planned Milestone 1 */}
              <li className="flex items-center gap-3">
                <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <span className="text-gray-500">Cloud Deployment (AWS/Azure) & DevOps Practices (Planned)</span>
              </li>

              {/* Planned Milestone 2 */}
              <li className="flex items-center gap-3">
                <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <span className="text-gray-500">TypeScript & Next.js Advanced Features (Planned)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Background Note */}
        <div className="mt-6 bg-sky-50 border border-sky-200 rounded-xl p-6">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-semibold text-sky-700">Background:</span> Transitioning from game development to web development, bringing strong problem-solving skills and programming fundamentals to build scalable MERN stack applications.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Learning