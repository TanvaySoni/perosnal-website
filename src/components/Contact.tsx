import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const mailtoLink = `mailto:tanvaysoni90823@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'sent' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Connect with me
                </h3>
                <p className="text-gray-600 mb-6">
                  I'm always interested in new opportunities, collaborations, and interesting conversations.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:tanvaysoni90823@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors group"
                >
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-teal-50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">tanvaysoni90823@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/tanvay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors group"
                >
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-teal-50 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">linkedin.com/in/tanvay</span>
                </a>

                <a
                  href="https://github.com/TanvaySoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition-colors group"
                >
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-teal-50 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="font-medium">github.com/TanvaySoni</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
