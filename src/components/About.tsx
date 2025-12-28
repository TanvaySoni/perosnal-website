import { Code2, Cloud, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Backend Engineering',
      text: 'Java, J2EE, Spring Boot',
    },
    {
      icon: Cloud,
      title: 'Cloud',
      text: 'AWS (EC2, S3, IAM, RDS), cloud fundamentals',
    },
    {
      icon: Wrench,
      title: 'Tools & Ecosystem',
      text: 'Git, GitHub, intellij IDEA, VS Code',
    },
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" />
        </motion.div>

        {/* TOP ROW: Image + Text */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-12">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden
                       bg-gradient-to-br from-teal-50 to-blue-50
                       p-[2px] shadow-md"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/about-work.jpeg"
                alt="Tanvay Soni working on backend development"
                className="w-full h-full object-cover
                           saturate-90 contrast-95 brightness-95
                           transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10" />
            </div>
          </motion.div>

          {/* Summary text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur rounded-2xl p-8
                       border border-gray-100 shadow-sm"
          >
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              I am a passionate <strong>Java Backend Developer</strong> with hands-on
              experience in building scalable applications using{' '}
              <strong>Java, Spring Boot</strong>.
            </p>

            <p className="text-gray-700 mb-4">
              I have worked on real-world projects involving authentication,
              database integration, and backend system design.
            </p>

            <p className="text-gray-700">
              Comfortable working in <strong>Agile environments</strong>, I am a quick
              learner with a strong interest in backend systems and cloud-native development.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM ROW: Skills side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group p-6 rounded-xl bg-white/70 backdrop-blur
                         border border-gray-100 shadow-sm
                         hover:shadow-xl hover:border-teal-300
                         transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-teal-500/15 to-blue-500/15
                                group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
