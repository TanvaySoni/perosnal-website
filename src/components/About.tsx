import { Code2, Cloud, Wrench } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      label: 'Experience',
      text: 'J2EE, Core Java, Business Development, Business Analyst, Communication, Data Science',
    },
    {
      icon: Cloud,
      label: 'Cloud',
      text: 'AWS Certified — Cloud Foundations & Architecting',
    },
    {
      icon: Wrench,
      label: 'Tools',
      text: 'Git, Zoho CRM, N8N, MS-Office, SQL, Pandas, scikit-learn',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          About
        </h2>

        <div className="prose prose-lg max-w-none mb-15 text-gray-700 leading-relaxed">
          <p>
            Tanvay Soni is a Motivated and detail-oriented Business Analyst freshly graduated with a strong interest in understanding 
business needs and improving processes. Skilled in gathering requirements, documenting them, and analyzing 
workflows to support smooth project execution. Comfortable working with stakeholders and contributing to 
Agile projects. Has basic knowledge of data analysis, data cleaning, and visualization to support informed 
decision-making. Known for clear communication, quick learning, and a positive, problem-solving attitude.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl hover:border-teal-200 hover:shadow-lg transition-all duration-300"
            >
              <item.icon className="w-8 h-8 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">{item.label}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
