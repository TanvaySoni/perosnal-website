import { motion } from 'framer-motion';

export default function Skills() {
  const skillGroups = [
    {
      category: 'Backend',
      skills: ['Core Java', 'J2EE', 'Spring Boot', 'Django', 'RESTful APIs'],
    },
    {
      category: 'Data & ML',
      skills: ['Python', 'Data Science', 'Data Analytics', 'scikit-learn'],
    },
    {
      category: 'Cloud & Infra',
      skills: ['AWS Foundations', 'AWS Architecting', 'Docker'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'SQL', 'Pandas', 'Maven'],
    },
  ];

  return (
    <section
      id="skills"
      className="relative px-4 sm:px-6 pt-12 sm:pt-20 pb-20 sm:pb-28
 bg-gradient-to-b from-white via-gray-50/70 to-white"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading – highlighted & left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" />
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group bg-white/80 backdrop-blur p-6 rounded-2xl border border-gray-100 
                         shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.12 }}
                    className="cursor-pointer px-4 py-2 rounded-full text-sm font-medium
                               bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700
                               border border-teal-100 shadow-sm
                               hover:shadow-md hover:border-teal-300
                               transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
