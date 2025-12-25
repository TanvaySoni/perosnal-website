import { Linkedin, Github, Mail, Download } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Tanvay Soni</h3>
            <p className="text-gray-400">Software Developer</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/tanvay/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-teal-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/TanvaySoni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-teal-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:tanvaysoni90823@gmail.com"
              className="p-3 bg-gray-800 rounded-lg hover:bg-teal-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="/TanvaySoni_CV.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-teal-600 transition-colors"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Tanvay Soni. Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
