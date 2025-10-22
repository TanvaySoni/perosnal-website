import { Code2, Cloud, Wrench } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      label: 'Experience',
      text: 'J2EE, Core Java, Python, Django, Data Science',
    },
    {
      icon: Cloud,
      label: 'Cloud',
      text: 'AWS Certified — Cloud Foundations & Architecting',
    },
    {
      icon: Wrench,
      label: 'Tools',
      text: 'Git, Docker, SQL, Pandas, scikit-learn',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          About
        </h2>

        <div className="prose prose-lg max-w-none mb-12 text-gray-700 leading-relaxed">
          <p>
            Tanvay Soni is a pragmatic, curiosity-driven software developer who builds practical systems that make people's lives easier. He blends a strong foundation in core Java / J2EE with Python-powered data science and web frameworks — always aiming for elegant, reliable solutions. Outside of code, Tanvay enjoys turning complex data into crisp insights and crafting polished user experiences. His recent work includes an AI-powered resume builder; he also holds AWS Cloud Foundations and Architecting certifications. He's collaborative, detail-oriented, and loves learning new tools that deliver real-world impact.
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
