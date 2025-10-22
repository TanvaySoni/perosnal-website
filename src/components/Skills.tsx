export default function Skills() {
  const skillGroups = [
    {
      category: 'Backend',
      skills: ['Core Java', 'J2EE', 'Django', 'Flask'],
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
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 rounded-full text-sm font-medium border border-teal-100 hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
