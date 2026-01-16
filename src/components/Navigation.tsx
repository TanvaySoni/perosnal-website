import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onContactClick: () => void;
  resumeLink: string;
}

export default function Navigation({ onContactClick, resumeLink }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // ✅ Added Experience here
  const navLinks = [
    { label: "Experience", id: "experience" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-lg" : "bg-white/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        {/* ✅ Logo (NO TSExperience + NO nested button) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl md:text-2xl font-extrabold tracking-tight hover:opacity-90 transition-all duration-300"
          aria-label="Go to top"
        >
          <span className="text-teal-700">Tanvay </span>
          <span className="text-teal-700">
             Soni
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-700 hover:text-teal-600 transition-all duration-200 hover:scale-105 font-medium"
            >
              {link.label}
            </button>
          ))}

          {/* Contact Button */}
          <button
            onClick={onContactClick}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300"
          >
            Contact
          </button>

          {/* Resume Button */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-teal-600 transition-all duration-200"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-white/95 shadow-md border-t border-gray-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-teal-600 transition-all duration-200 text-left font-medium text-lg"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                onContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-200"
            >
              Contact
            </button>

            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
