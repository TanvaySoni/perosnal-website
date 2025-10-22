import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      name: 'AWS Cloud Foundations',
      issuer: 'Amazon Web Services',
      img: '/images/cloud-foundation.jpg', // ✅ Correct path (no 'public/')
      credential: 'https://www.credly.com/badges/eec7e6d7-6f16-42fa-9a02-8cf6b301dc80/public_url',
    },
    {
      name: 'AWS Architecting',
      issuer: 'Amazon Web Services',
      img: '/images/cloud-architecting.jpg', // ✅ Correct path (no 'public/')
      credential: 'https://www.credly.com/badges/49c57674-5b47-4f64-8608-a6c1501888bb/public_url',
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
              </div>

              {/* Certificate image */}
              {cert.img && (
                <img
                  src={cert.img}
                  alt={`${cert.name} certificate`}
                  className="w-full rounded-lg border border-gray-100 shadow-sm mt-3"
                />
              )}

              {/* Credential link */}
              {cert.credential && (
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-sm text-teal-700 hover:text-teal-900 transition-colors"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
