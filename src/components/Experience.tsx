import React from "react";
import ExperienceCard, { Experience as ExpType } from "./ExperienceCard";

const experiences: ExpType[] = [
  {
    role: "Software Development Intern",
    company: "47 Billion Information Technology Pvt. Ltd.",
    type: "Onsite",
    duration: "Jan 2026 – Present",
    logo: "/images/47billion.png", // ✅ place in public/images
    tech: ["React", "Tailwind CSS", "FastAPI", "Supabase", "LangChain", "Gemini API"],
    points: [
      "Built responsive UI pages and reusable components using React + Tailwind CSS.",
      "Integrated AI PDF Chatbot features using RAG (LangChain + Gemini API).",
      "Created FastAPI endpoints for PDF upload, parsing and retrieval pipeline.",
      "Improved maintainability through reusable components and clean folder structure.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      {/* ✅ Use same width as Hero */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Experience{" "}
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                Highlights
              </span>
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Internship experience focused on real-world development, AI integrations, and scalable solutions.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            Updated: <span className="font-semibold text-gray-700">2026</span>
          </div>
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
