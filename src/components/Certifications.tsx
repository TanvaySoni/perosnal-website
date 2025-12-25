import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certs = [
    {
      name: 'AWS Cloud Foundations',
      issuer: 'Amazon Web Services',
      img: '/images/cloud-foundation.jpg',
      credential:
        'https://www.credly.com/badges/eec7e6d7-6f16-42fa-9a02-8cf6b301dc80/public_url',
    },
    {
      name: 'AWS Architecting',
      issuer: 'Amazon Web Services',
      img: '/images/cloud-architecting.jpg',
      credential:
        'https://www.credly.com/badges/49c57674-5b47-4f64-8608-a6c1501888bb/public_url',
    },
  ];

  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" />
        </motion.div>

        {/* Certificates grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6
                         shadow-sm hover:shadow-2xl hover:border-teal-300 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-teal-500/15 to-blue-500/15
                                group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Certificate image */}
              {cert.img && (
                <div className="relative overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                  <img
                    src={cert.img}
                    alt={`${cert.name} certificate`}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                  bg-gradient-to-tr from-teal-400/10 via-transparent to-blue-400/10" />
                </div>
              )}

              {/* Credential link */}
              {cert.credential && (
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-teal-700
                             hover:text-teal-900 transition-colors"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
