import React from "react";

export type Experience = {
  role: string;
  company: string;
  type?: string;
  duration: string;
  tech?: string[];
  points?: string[];
  link?: string;
  logo?: string;
};

type Props = {
  exp: Experience;
};

const ExperienceCard: React.FC<Props> = ({ exp }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-6">
      {/* Top */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          {exp.logo ? (
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-14 h-14 rounded-xl border border-gray-200 bg-white object-contain"
            />
          ) : (
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold">
              {exp.company?.[0] || "C"}
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>

            <p className="text-gray-600 mt-1">
              <span className="font-semibold text-gray-800">{exp.company}</span>
              {exp.type ? <span className="text-gray-500"> • {exp.type}</span> : null}
            </p>

            {/* Duration */}
            <p className="text-sm text-gray-500 mt-1">{exp.duration}</p>
          </div>
        </div>

        {/* Tag */}
        <span className="inline-flex w-fit text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
          Internship
        </span>
      </div>

      {/* Tech */}
      {!!exp.tech?.length && (
        <div className="flex flex-wrap gap-2 mt-5">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Points */}
      {!!exp.points?.length && (
        <ul className="mt-5 space-y-2 text-gray-700">
          {exp.points.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-[9px] h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Proof link */}
      {exp.link ? (
        <a
          href={exp.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-teal-700 hover:text-blue-700"
        >
          View Proof <span>→</span>
        </a>
      ) : null}
    </div>
  );
};

export default ExperienceCard;
