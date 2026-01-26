 import { useState, useEffect, useRef } from "react";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  /* ---------------- Scroll Effect ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Scroll to section ID (HOME ONLY) ---------------- */
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // Pehle home pe jao
      navigate("/");
      // Phir scroll karo
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already home pe ho
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ---------------- Dropdown Wrapper ---------------- */
  const NavItem = ({ title, name, children }) => {
    const ref = useRef(null);
    const isOpen = activeDropdown === name;

    const toggleDropdown = (e) => {
      e.stopPropagation();
      setActiveDropdown(isOpen ? null : name);
    };

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setActiveDropdown(null);
        }
      };
      
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
      <div className="relative" ref={ref}>
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-1 px-3 py-2 text-base font-semibold text-gray-700 hover:text-sky-600"
        >
          {title}
          <ChevronDown
            size={16}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-2 w-52 rounded-xl bg-white shadow-lg border border-gray-200 animate-dropdown z-50">
            {children}
          </div>
        )}
      </div>
    );
  };

  /* ---------------- DROPDOWN ITEM ---------------- */
  const DropItem = ({ title, path }) => {
    const handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(`🚀 Navigating to: ${path}`);
      
      // Close dropdown first
      setActiveDropdown(null);
      setOpen(false);
      
      // Navigate
      navigate(path);
      
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    };

    return (
      <button
        onClick={handleClick}
        className="block w-full text-left px-4 py-2.5 text-md font-semibold text-gray-600 hover:bg-blue-50 hover:text-sky-600 first:rounded-t-xl last:rounded-b-xl"
      >
        {title}
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-sm" : "bg-gray-50"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="text-3xl font-bold text-sky-500"
          >
            Muhammad Aamir
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection("home")}
              className="px-3 py-2 text-base font-semibold text-gray-700 hover:text-sky-600"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="px-3 py-2 text-base font-semibold text-gray-700 hover:text-sky-600"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="px-3 py-2 text-base font-semibold text-gray-700 hover:text-sky-600"
            >
              Contact
            </button>

            <NavItem title="Work" name="work">
              <DropItem title="Projects" path="/projects" />
              <DropItem title="Skills" path="/skills" />
              <DropItem title="Experience" path="/experience" />
            </NavItem>

            <NavItem title="More" name="more">
              <DropItem title="Education" path="/education" />
              <DropItem title="Certificates" path="/certificates" />
              <DropItem title="Learning" path="/learning" />
            </NavItem>

            <a
              href="/resume/Muhammad-Aamir-Resume.pdf"
              download
              className="ml-2 flex items-center gap-2 bg-sky-500 px-5 py-2 text-white rounded-lg hover:bg-sky-600 transition-colors"
            >
              <Download size={16}  /> Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-lg rounded-lg p-5 space-y-3 mt-2">
            <button 
              onClick={() => {
                scrollToSection("home");
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-semibold"
            >
              Home
            </button>
            <button 
              onClick={() => {
                scrollToSection("about");
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-semibold"
            >
              About
            </button>
            <button 
              onClick={() => {
                scrollToSection("contact");
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-semibold"
            >
              Contact
            </button>

            <hr className="my-2" />

            <button 
              onClick={() => {
                navigate("/projects");
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-semibold"
            >
              Projects
            </button>
            <button 
              onClick={() => {
                navigate("/skills");
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-semibold"
            >
              Skills
            </button>
            <button 
              onClick={() => {
                navigate("/experience");
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-semibold"
            >
              Experience
            </button>
            <button 
              onClick={() => {
                navigate("/education");
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-semibold"
            >
              Education
            </button>
            <button 
              onClick={() => {
                navigate("/certificates");
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-semibold"
            >
              Certificates
            </button>
            <button 
              onClick={() => {
                navigate("/learning");
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg font-semibold"
            >
              Learning
            </button>
          </div>
        )}
      </nav>

      <style>{`
        .animate-dropdown {
          animation: dropdown 0.2s ease-out forwards;
        }
        @keyframes dropdown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;