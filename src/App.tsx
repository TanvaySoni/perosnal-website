import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      }
    };

    handleReducedMotion();
    window
      .matchMedia('(prefers-reduced-motion: reduce)')
      .addEventListener('change', handleReducedMotion);

    return () => {
      window
        .matchMedia('(prefers-reduced-motion: reduce)')
        .removeEventListener('change', handleReducedMotion);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWork = () => scrollToSection('projects');
  const handleContact = () => scrollToSection('contact');

  // ✅ Your resume file inside public/videos folder
  const resumeLink = "/videos/Tanvay_CV.pdf";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navigation onContactClick={handleContact} resumeLink={resumeLink} />
      <Hero onViewWork={handleViewWork} onContact={handleContact} resumeLink={resumeLink} />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
