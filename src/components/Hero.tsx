import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onViewWork: () => void;
  onContact: () => void;
   resumeLink: string;
}

export default function Hero({ onViewWork, onContact }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white px-6 pt-28 pb-16">
      
      {/* Backend code animation background */}
      <div className="absolute inset-0 opacity-[0.06] font-mono text-sm text-teal-700 pointer-events-none">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          className="space-y-2 whitespace-pre"
        >
{`POST /api/auth/login
200 OK - JWT issued
@Service UserService
@Repository UserRepository
@Transactional
Hibernate session opened
SELECT * FROM users WHERE email=?
GET /api/projects
Response 200 - JSON
Spring Boot Application Started
Cloud deployment successful`}
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6">
            Hi — I’m <span className="text-teal-600">Tanvay Soni</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Java Backend Developer • Spring Boot • REST APIs
          </p>

          <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10">
            Early-career software developer with hands-on experience in
            <strong> Java (JDK 17+), Spring Boot, RESTful API design, SQL, and AWS</strong>.
            I build scalable backend systems, integrate modern frontends, and
            deliver clean, reliable solutions in Agile environments.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button
              onClick={onViewWork}
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onContact}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-lg"
            >
              Contact Me
            </button>

            <a
              href="/TanvaySoni_CV.pdf"
              download
              className="px-6 py-4 text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-2 font-medium"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 rounded-full p-1 bg-gradient-to-tr from-teal-400/40 via-blue-400/20 to-purple-400/20 shadow-xl">
            <img
              src="/images/profile-image.png"
              alt="Tanvay Soni"
              className="w-full h-full object-cover rounded-full border-4 border-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
