import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Server, Cloud, Gamepad2, ExternalLink } from 'lucide-react';

const Skills = () => {
    const navigate = useNavigate();

    const handleViewProjects = () => {
        navigate('/projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className=" bg-gray-50  py-16 px-6">
            <section className="max-w-6xl mx-auto">
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
                    <button
                        onClick={handleViewProjects}
                        className="inline-flex items-center gap-2 text-sky-500 font-semibold hover:text-sky-600 transition-colors cursor-pointer"
                    >
                        See how I've applied these technologies in real projects
                        <ExternalLink className='mb-5 sm:mb-0' size={20} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Skills;