import { Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Blog() {
  const posts = [
    {
      title: 'Building an AI Resume Builder — design choices and pitfalls',
      excerpt:
        'A deep dive into architectural decisions, NLP challenges, and UX considerations that shaped the AI Resume Builder project.',
      tags: ['AI', 'Python', 'NLP'],
      date: '2024-03-15',
    },
    {
      title: 'From Java to Data Science: Bridging backend and analytics',
      excerpt:
        'How my journey from enterprise Java development to data science enriched my perspective on building end-to-end solutions.',
      tags: ['Java', 'Data Science', 'Career'],
      date: '2024-02-20',
    },
    {
      title: 'AWS Architecture Patterns for Scalable Web Applications',
      excerpt:
        'Key lessons learned from AWS certification and applying cloud-native patterns to real-world projects.',
      tags: ['AWS', 'Cloud', 'Architecture'],
      date: '2024-01-10',
    },
  ];

  return (
    <section
      id="blog"
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
            Blog
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl">
            Technical writing on software development, backend systems,
            data science, and cloud architecture.
          </p>
        </motion.div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6
                         shadow-sm hover:shadow-2xl hover:border-teal-300 transition-all duration-300 cursor-pointer"
            >
              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug
                             group-hover:text-teal-600 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-400" />
                {post.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.12 }}
                    className="cursor-pointer px-3 py-1 rounded-full text-xs font-medium
                               bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700
                               border border-gray-200 shadow-sm
                               hover:shadow-md hover:border-teal-300
                               transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
