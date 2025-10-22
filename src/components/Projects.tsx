import { Github, X } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const project = {
 title: 'AI Resume Builder',
    subtitle: 'AI-powered resume generator',
    description:
      'An intelligent resume builder that parses user input and produces ATS-friendly resumes using NLP. Allows templating, PDF export, and role-specific recommendations.',
    tech: ['java', 'spring-boot', 'reactjs', 'ollama', 'SQL'],
    github: 'https://github.com/TanvaySoni/resume-ai',
    demoVideo: '/videos/project-video.mp4', // Must be in public/videos/
  };

  return (
    <section id="projects" className="py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Projects
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my AI-based project and backend engineering.
        </p>

        <div className="max-w-md mx-auto">
          <div
            className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-xl transition-all duration-300 flex flex-col"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Project Preview */}
            <div
              className="w-full h-48 rounded-lg mb-4 overflow-hidden relative cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              {!hovered ? (
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                  <div className="text-6xl text-teal-600/20 font-mono">&lt;/&gt;</div>
                </div>
              ) : (
                <video
                  src={project.demoVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg transition-all duration-500"
                />
              )}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-teal-600 mb-2">TECH STACK</p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-white border border-gray-200 text-gray-700 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-teal-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalOpen(false)} // clicking overlay closes modal
        >
          {/* Modal content */}
          <div
            className="relative w-full max-w-4xl mx-auto px-4"
            onClick={(e) => e.stopPropagation()} // stops closing when clicking inside
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-teal-400 transition"
              onClick={() => setModalOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video */}
            <video
              src={project.demoVideo}
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-lg shadow-2xl border border-gray-700"
            />
          </div>
        </div>
      )}
    </section>
  );
}
