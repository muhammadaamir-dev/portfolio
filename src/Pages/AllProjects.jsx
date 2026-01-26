import React, { useState } from 'react';
import { Code2, ExternalLink, Github, Gamepad2, Globe, Layers, Shield } from 'lucide-react';

const AllProjects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Food Ordering App",
      category: "Frontend",
      stack: ["React", "Tailwind CSS"],
      description: "A modern food ordering web application built with React, focusing on reusable components, efficient state management, and a responsive user interface.",
      features: ["Dynamic food menu with images and pricing", "Add to cart and order management", "Reusable React components", "Props drilling and state management", "Responsive UI design"],
      learnings: ["Component-based architecture in React", "Props drilling for data flow", "State handling using useState", "Building scalable frontend applications"],
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
      type: "web"
    },
    {
      id: 2,
      title: "Book Store Application",
      category: "Full Stack",
      stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      description: "A full stack MERN application that allows users to browse books, register, login securely, and manage data with JWT-based authentication.",
      features: ["User authentication using JWT", "Protected routes for authorized users", "Reusable frontend components", "REST APIs for backend communication", "Responsive UI using Tailwind CSS"],
      learnings: ["JWT authentication and authorization", "Backend API development with Express", "Connecting frontend with MongoDB", "Full stack application flow"],
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
      type: "web"
    },
    {
      id: 3,
      title: "Grocery Store Website",
      category: "Frontend",
      stack: ["React", "Tailwind CSS", "React Router"],
      description: "A fully responsive grocery store frontend website designed with React and Tailwind CSS, featuring clean navigation and modern UI sections.",
      features: ["Multi-page navigation using React Router", "Reusable UI components", "Responsive navbar and layout", "Modern landing page sections", "Testimonial slider and footer"],
      learnings: ["Routing and navigation in React", "Responsive UI design with Tailwind", "Reusable component development", "Frontend project structuring"],
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1543168256-418811576931?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
      type: "web"
    },
    {
      id: 4,
      title: "Restaurant Management System",
      category: "Full Stack",
      stack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
      description: "A complete MERN stack restaurant application with admin and user panels, enabling online ordering, table booking, and secure authentication.",
      features: ["JWT-based authentication and authorization", "Admin dashboard for managing menus and orders", "User food ordering and table booking", "Image upload with Cloudinary", "Full CRUD operations"],
      learnings: ["Building large-scale MERN applications", "Role-based access control", "REST API design and testing", "Context API and state management", "Deployment on Vercel"],
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
      highlight: true,
      type: "web"
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      category: "Full Stack",
      stack: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
      description: "An advanced e-commerce platform built with the MERN stack, featuring product management, authentication, and a powerful admin panel.",
      features: ["User authentication (Login / Signup / Logout)", "Admin panel for product and user management", "Product search, filtering, and cart system", "Global state management with Redux", "Image upload and management"],
      learnings: ["Advanced state management using Redux", "Admin dashboard implementation", "Secure authentication workflows", "Scalable frontend-backend integration"],
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      status: "In Progress",
      highlight: true,
      type: "web"
    },
    {
      id: 6,
      title: "Personal Portfolio Website",
      category: "Frontend",
      stack: ["React", "Tailwind CSS", "Animations"],
      description: "A personal portfolio website showcasing projects, skills, and experience with modern UI animations and reusable component architecture.",
      features: ["Animated loading bar", "Reusable and modular components", "Props drilling for data flow", "Smooth UI animations", "Fully responsive design"],
      learnings: ["Building professional portfolio layouts", "Using animations in React", "Component reuse and optimization", "Clean UI/UX practices"],
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed",
      type: "web"
    },
    {
      id: 7,
      title: "Action Shooting Game",
      category: "Game",
      stack: ["Unity", "C#", "Game Physics"],
      description: "Exciting action-packed shooting game with engaging gameplay and smooth controls.",
      features: ["Live Gameplay", "Smooth Controls", "Sound Effects", "Score System"],
      learnings: ["Unity game engine", "C# programming", "Game physics implementation"],
      role: "Game Developer",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: null,
      status: "Live",
      type: "games"
    },
    {
      id: 8,
      title: "Puzzle Adventure Game",
      category: "Game",
      stack: ["Unity", "C#", "Level Design"],
      description: "Mind-bending puzzle game with multiple levels and challenging mechanics.",
      features: ["Multiple Levels", "Puzzle Mechanics", "Achievement System", "Progressive Difficulty"],
      learnings: ["Level design principles", "Puzzle game mechanics", "Achievement systems"],
      role: "Game Developer",
      image: "https://images.unsplash.com/photo-1561750386-8d8f8e5f8c7c?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: null,
      status: "Live",
      type: "games"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 p-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-sky-500">Projects</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Showcasing web applications and games built with modern technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-sky-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-sky-50 border border-gray-200'
            }`}
          >
            <Layers className="w-5 h-5" />
            All Projects 
          </button>
          <button
            onClick={() => setActiveTab('web')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'web'
                ? 'bg-sky-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-sky-50 border border-gray-200'
            }`}
          >
            <Globe className="w-5 h-5" />
            Web Projects 
          </button>
          <button
            onClick={() => setActiveTab('games')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'games'
                ? 'bg-sky-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-sky-50 border border-gray-200'
            }`}
          >
            <Gamepad2 className="w-5 h-5" />
            Game Projects  
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`bg-white rounded-xl shadow-md border-2 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                project.highlight ? 'border-sky-400' : 'border-gray-200'
              }`}
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === 'Live' ? 'bg-green-500 text-white' :
                    project.status === 'In Progress' ? 'bg-yellow-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
                {project.highlight && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">
                    {project.title}
                  </h3>
                  {project.type === 'games' ? (
                    <Gamepad2 className="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" />
                  ) : (
                    <Code2 className="w-5 h-5 text-sky-500 flex-shrink-0 ml-2" />
                  )}
                </div>

                <div className="mb-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'Full Stack' ? 'bg-green-100 text-green-700' :
                    project.category === 'Frontend' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {project.category === 'Full Stack' && <Shield className="w-3 h-3" />}
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-xs text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-sky-500 mt-1.5 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {project.type === 'games' ? 'Play Game' : 'Live Demo'}
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default AllProjects
