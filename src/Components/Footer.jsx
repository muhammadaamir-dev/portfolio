import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16  ">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-20">

                {/* ---------------- First Section ---------------- */}
                <div className="space-y-4">
                    <h2 className="text-3xl text-sky-500 font-bold  ">Muhammad Aamir</h2>
                    <p className="text-white font-medium">Full Stack Web Developer | Game Developer | MERN Stack Developer</p>
                    <p className="text-gray-400 text-sm">
                        Passionate about creating interactive and scalable web applications. Always learning, building, and sharing knowledge.
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                        <a href="https://linkedin.com/in/muhammadaamir-dev" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/muhammadaamir-dev" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="mailto:muhammadaamir.mcs@gmail.com" className="hover:text-sky-600 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                    <p className="text-gray-500 mt-3 text-sm">Remote-first • Async-friendly</p>
                </div>

                {/* ---------------- Second Section: Quick Links ---------------- */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#about" className="hover:text-sky-600 transition-colors">About</a></li>
                            <li><a href="#projects" className="hover:text-sky-600 transition-colors">Projects</a></li>
                            <li><a href="#skills" className="hover:text-sky-600 transition-colors">Skills</a></li>
                            <li><a href="#experience" className="hover:text-sky-600 transition-colors">Experience</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-white font-semibold mb-3">More</h3>
                        <ul className="space-y-3">
                            <li><a href="#education" className="hover:text-sky-600 transition-colors">Education</a></li>
                            <li><a href="#certificates" className="hover:text-sky-600 transition-colors">Certificates</a></li>
                            <li><a href="#learning" className="hover:text-sky-600 transition-colors">Learning</a></li>
                            <li><a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* ---------------- Third Section: Open to Work ---------------- */}
                <div className="space-y-3">
                    <h3 className="text-white font-semibold mb-3">Open to Work Opportunities</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li>Freelance & Contract Work</li>
                        <li>Startups & Business Collaborations</li>
                        <li>Teaching & Mentorship</li>
                        <li>Speaking Engagements</li>
                    </ul>
                </div>
            </div>

            {/* ---------------- Footer Bottom ---------------- */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-gray-700 mt-12 pt-6 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
                <span>© {new Date().getFullYear()} Muhammad Aamir. All rights reserved.</span>
                <span>Made with ❤️ from Muhammad Aamir.</span>
            </div>


        </footer>
    );
};

export default Footer;
