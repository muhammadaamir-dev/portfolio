import React, { useState } from 'react';
import { Code2, ExternalLink, Github, Gamepad2, Globe, Layers, Shield } from 'lucide-react';
import FoodOrdering from "../assets/images/Food_Ordering.jpg"
import GroceryStore from "../assets/images/GroceryStore.jpg"
import BookStore from "../assets/images/BookStore.jpg"
import Resturant from "../assets/images/Resturant.jpg"
import Portfolio from "../assets/images/Portfolio.jpg"
import Ecommerce from "../assets/images/E_commerce.jpg"
import Donut from '../assets/images/Donut.webp'
import PlanetMerge from '../assets/images/PlanetMerge.webp'
import GoodSort from '../assets/images/GoodSort.webp'
import Icecream from '../assets/images/Icecream.webp'
import IndianBridal from '../assets/images/IndianBridal.webp'

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
      image: FoodOrdering,
      liveUrl: "https://aamirfoodordering.vercel.app/",
      githubUrl: "https://github.com/muhammadaamir-dev/Food_Ordering_app",
      status: "Live",
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
      image: BookStore,
      liveUrl: "https://book-store-ywss.vercel.app/",
      githubUrl: "https://github.com/muhammadaamir-dev/BookStore",
      status: "Live",
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
      image: GroceryStore,
      liveUrl: "https://aamirgrocerystore.vercel.app/ ",
      githubUrl: "https://github.com/muhammadaamir-dev/GroceryStore",
      status: "Live",
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
      image: Resturant,
      liveUrl: "https://full-stack-resturant-phi.vercel.app/",
      githubUrl: "https://github.com/muhammadaamir-dev/Resturant_FullStack",
      status: "Live",
      highlight: true,
      type: "web"
    },
    {
      id: 6,
      title: "Personal Portfolio Website",
      category: "Frontend",
      stack: ["React", "Tailwind CSS", "Animations", "React Router", "Email.js",],
      description: "A personal portfolio website showcasing projects, skills, and experience with modern UI animations and reusable component architecture.",
      features: ["Animated loading bar", "Reusable and modular components", "Props drilling for data flow", "Smooth UI animations", "Fully responsive design"],
      learnings: ["Building professional portfolio layouts", "Using animations in React", "Component reuse and optimization", "Clean UI/UX practices"],
      role: "Frontend Developer",
      image: Portfolio,
      liveUrl: "https://muhammadaamir.vercel.app/",
      githubUrl: "https://github.com/muhammadaamir-dev/portfolio",
      status: "Live",
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
      image: Ecommerce,
      liveUrl: null,
      githubUrl: null,
      status: "In Progress",
      highlight: true,
      type: "web"
    },
    {
  id: 6,
  title: "Ice Cream Cupcake Kitchen Game",
  category: "Game",
  stack: ["Unity", "C#", "Game UI", "Game Physics", "Mobile Optimization"],
  description: "A fun and interactive cooking simulation game where players create ice cream desserts, cupcakes, and burgers while managing their own food truck and restaurant. The game focuses on engaging gameplay mechanics, customization, and progressive unlocking systems to enhance user experience.",
  features: [
    "Interactive ice cream and cupcake making mechanics",
    "Ingredient shopping and recipe preparation system",
    "Burger cooking and street food serving gameplay",
    "Restaurant and food truck customization",
    "Unlockable ingredients and upgrades",
    "Customer interaction and order management",
    "Score and progression system with rewards"
  ],
  learnings: [
    "Game development using Unity and C#",
    "Designing interactive gameplay mechanics",
    "Mobile game optimization and performance handling",
    "UI/UX design for casual mobile games",
    "Implementing progression and reward systems"
  ],
  role: "Game Developer",
  image: Icecream,
  liveUrl: "https://play.google.com/store/apps/details?id=com.tgs.icecream.cupcake.makergame.restaurants.cookinggame",
  githubUrl: null,
  status: "Live",
  type: "games"
},
    {
  id: 7,
  title: "Goods Matching: Puzzle Game",
  category: "Game",
  stack: ["Unity", "C#", "Game Logic", "UI System", "Mobile Optimization"],
  description: "A puzzle-based match-3 game that combines classic tile-matching mechanics with the challenge of organizing goods on market shelves. Players strategically swap items to create matches, clear levels, and overcome progressively difficult challenges in an engaging casual gameplay experience.",
  features: [
    "Classic match-3 gameplay with item swapping mechanics",
    "Multiple levels with increasing difficulty",
    "Strategic puzzle-solving and decision making",
    "Smooth animations and interactive UI",
    "Score tracking and progression system",
    "Mobile-friendly controls and optimization"
  ],
  learnings: [
    "Implementing match-3 algorithms and game logic",
    "Level design and difficulty balancing",
    "Unity UI system and animations",
    "Mobile performance optimization",
    "Player engagement and reward mechanics"
  ],
  role: "Game Developer",
  image: GoodSort, 
  liveUrl:  "https://play.google.com/store/apps/details?id=com.tgs.goods.sort.game.sorting",
  githubUrl: null,
  status: "Live",
  type: "games"
},{
  id: 8,
  title: "Bridal Dress Up & Makeup Game",
  category: "Game",
  stack: ["Unity", "C#", "UI System", "2D Design", "Mobile Optimization"],
  description: "A fashion and makeover simulation game where players design stunning bridal looks using traditional Indian and modern western styles. The game allows users to experiment with dresses, makeup, accessories, and spa treatments while competing in fashion challenges to create the perfect bridal transformation.",
  features: [
    "Indian bridal dress-up with sarees and lehengas",
    "Western party and prom fashion styling",
    "Makeup artist gameplay with multiple tools",
    "Beauty spa and makeover mechanics",
    "Fashion competition and challenge modes",
    "Wide range of accessories and customization options",
    "Interactive UI with smooth transitions"
  ],
  learnings: [
    "Character customization systems in Unity",
    "UI/UX design for fashion simulation games",
    "Asset management and optimization",
    "Player engagement through customization mechanics",
    "Mobile performance optimization techniques"
  ],
  role: "Game Developer",
  image: IndianBridal,
  liveUrl:  "https://play.google.com/store/apps/details?id=com.tgs.bridal.wedding.dressup.makeovergame.fashionshow",
  githubUrl: null,
  status: "Live",
  type: "games"
}
,{
  id: 9,
  title: "Planet Merge Master",
  category: "Game",
  stack: ["Unity", "C#", "Game Logic", "2D Graphics", "Mobile Optimization"],
  description: "A relaxing yet strategic merge puzzle game where players combine smaller planets to create larger celestial bodies and build their own cosmic universe. The game blends casual gameplay with strategic decision-making, offering visually engaging mechanics and progressive challenges.",
  features: [
    "Planet merging mechanics with progressive evolution",
    "Strategic gameplay and space management system",
    "Visually engaging cosmic-themed graphics",
    "Smooth animations and interactive controls",
    "Level progression and reward system",
    "Relaxing casual gameplay experience",
    "Mobile-optimized performance"
  ],
  learnings: [
    "Designing merge-based gameplay systems",
    "Object spawning and upgrade mechanics in Unity",
    "Balancing game progression and difficulty",
    "Implementing animations and visual feedback",
    "Mobile performance optimization"
  ],
  role: "Game Developer",
  image: PlanetMerge,
  liveUrl: "https://play.google.com/store/apps/details?id=com.tgs.planet.merge.game",
  githubUrl: null,
  status: "Live",
  type: "games"
}
,{
  id: 10,
  title: "Donut Fever: Cooking Game",
  category: "Game",
  stack: ["Unity", "C#", "Game UI", "2D Graphics", "Mobile Optimization"],
  description: "A fun cooking and restaurant simulation game where players prepare, bake, and decorate a variety of donuts while managing their own bakery. The game combines interactive food-making mechanics with customer service challenges, upgrades, and progression systems to create an engaging casual gaming experience.",
  features: [
    "Interactive donut making and baking mechanics",
    "Multiple flavors including chocolate, strawberry, and vanilla",
    "Toppings customization with fruits and sprinkles",
    "Restaurant management and customer serving system",
    "Unlockable recipes and bakery upgrades",
    "Progression system with rewards and achievements",
    "Smooth UI interactions and animations"
  ],
  learnings: [
    "Designing cooking simulation gameplay systems",
    "Player progression and reward loop implementation",
    "UI interaction design in Unity",
    "Game economy balancing and upgrades",
    "Mobile performance optimization"
  ],
  role: "Game Developer",
  image: Donut,
  liveUrl: "https://play.google.com/store/apps/details?id=com.tgs.donut.cake.cooking.game",
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
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === 'all'
                ? 'bg-sky-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-sky-50 border border-gray-200'
              }`}
          >
            <Layers className="w-5 h-5" />
            All Projects
          </button>
          <button
            onClick={() => setActiveTab('web')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === 'web'
                ? 'bg-sky-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-sky-50 border border-gray-200'
              }`}
          >
            <Globe className="w-5 h-5" />
            Web Projects
          </button>
          <button
            onClick={() => setActiveTab('games')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === 'games'
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
              className={`bg-white rounded-xl shadow-md border-2 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${project.highlight ? 'border-sky-400' : 'border-gray-200'
                }`}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.status === 'Live' ? 'bg-green-500 text-white' :
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
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${project.category === 'Full Stack' ? 'bg-green-100 text-green-700' :
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
                    href={project.status === "In Progress" ? undefined : project.liveUrl}
                    target={project.status === "In Progress" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-semibold transition-colors
    ${project.status === "In Progress"
                        ? "bg-gray-400 cursor-not-allowed pointer-events-none"
                        : "bg-sky-500 hover:bg-sky-600"
                      }`}
                  >
                    {project.status !== "In Progress" && (
                      <ExternalLink className="w-4 h-4" />
                    )}

                    {project.status === "In Progress"
                      ? "In Progress"
                      : project.type === "games"
                        ? "Play Game"
                        : "Live Demo"}
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
