import { ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
  onContact: () => void;
}

export default function Hero({ onViewWork, onContact }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-transparent to-blue-50/20 pointer-events-none" />

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center gap-16 animate-fade-in">
        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Hi — I'm <span className="text-teal-600">Tanvay Soni</span>.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Business Analyst , Side Skill- Software Developer • J2EE • Python • Data Science
          </p>

          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
            i am a detail-oriented Business Analyst freshly graduated with a strong interest in understanding 
business needs and improving processes.
            I build dependable web systems and data tools that turn complexity into clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <button
              onClick={onViewWork}
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              View Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onContact}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-lg"
            >
              Contact Me
            </button>

<a
  href="/TanvaySoni_CV.pdf"       // Path inside public folder
  download="TanvaySoni_CV.pdf" // Suggested download filename
  className="px-6 py-4 text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-2 font-medium"
>
  <Download className="w-5 h-5" />
  Resume
</a>

          </div>
        </div>

        {/* Profile Picture */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-teal-400/40 via-blue-400/20 to-purple-400/20 shadow-2xl hover:shadow-[0_0_50px_rgba(0,230,255,0.6)] transition-all duration-500 hover:scale-105 cursor-pointer">
            <img
              src="/images/profile-image.png" // Replace with your actual image
              alt="Tanvay Soni"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner"
            />
            {/* Futuristic lighting overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-300/20 to-purple-400/20 opacity-0 hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-auto animate-scroll" />
        </div>
      </div>
    </section>
  );
}
