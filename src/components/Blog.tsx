import { Calendar, Tag } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Building an AI Resume Builder — design choices and pitfalls',
      excerpt: 'A deep dive into the architectural decisions, NLP challenges, and user experience considerations that shaped the AI Resume Builder project.',
      tags: ['AI', 'Python', 'NLP'],
      date: '2024-03-15',
    },
    {
      title: 'From Java to Data Science: Bridging backend and analytics',
      excerpt: 'How my journey from enterprise Java development to data science enriched my perspective on building end-to-end solutions.',
      tags: ['Java', 'Data Science', 'Career'],
      date: '2024-02-20',
    },
    {
      title: 'AWS Architecture Patterns for Scalable Web Applications',
      excerpt: 'Key lessons learned from AWS certification and applying cloud-native patterns to real-world projects.',
      tags: ['AWS', 'Cloud', 'Architecture'],
      date: '2024-01-10',
    },
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Blog
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Technical writing on software development, data science, and cloud architecture.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-400" />
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
