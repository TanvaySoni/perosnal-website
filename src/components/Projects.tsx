import { Github, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<number | null>(null);

  const projects = [
    {
      title: 'AI Resume Builder',
      subtitle: 'AI-powered resume generator',
      description:
        'An intelligent resume builder that parses user input and produces ATS-friendly resumes using NLP. Allows templating, PDF export, and role-specific recommendations.',
      tech: ['Java', 'Spring Boot', 'ReactJS', 'Ollama', 'SQL'],
      github: 'https://github.com/TanvaySoni/resume-ai',
      demoVideo: '/videos/project-video.mp4',
    },
    {
      title: 'AI Deepfake Detection System',
      subtitle: 'Detects manipulated images & videos',
      description:
        'A deep learning-based system that identifies deepfake images and videos using CNN-based feature extraction and facial forensics techniques. Designed to improve media authenticity and cyber security.',
      tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Flask'],
      github: 'https://github.com/TanvaySoni/deepfake-detection',
      demoVideo: '/videos/deepfake-demo.mp4',
    },
  ];

  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 pt-12 sm:pt-20 pb-20 sm:pb-28
 bg-gradient-to-b from-white via-gray-50/70 to-white"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl">
            A showcase of my AI-based projects and backend engineering work.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6 
                         shadow-sm hover:shadow-2xl hover:border-teal-300 transition-all duration-300 flex flex-col"
            >
              {/* Preview */}
              <div
                className="relative w-full h-52 rounded-xl mb-5 overflow-hidden cursor-pointer"
                onClick={() => setModalOpen(index)}
              >
                {hoveredIndex !== index ? (
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
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                bg-gradient-to-tr from-teal-400/10 via-transparent to-blue-400/10" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {project.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-teal-600 mb-2">
                  TECH STACK
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.12 }}
                      className="cursor-pointer px-3 py-1 rounded-full text-xs font-medium
                                 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700
                                 border border-teal-100 shadow-sm
                                 hover:shadow-md hover:border-teal-300
                                 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalOpen(null)}
        >
          <div
            className="relative w-full max-w-4xl mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-teal-400 transition"
              onClick={() => setModalOpen(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <video
              src={projects[modalOpen].demoVideo}
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-xl shadow-2xl border border-gray-700"
            />
          </div>
        </div>
      )}
    </section>
  );
}
