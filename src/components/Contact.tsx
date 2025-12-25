import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 pt-12 sm:pt-20 pb-20 sm:pb-28
                 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thank-you"
            className="space-y-6 bg-white p-8 rounded-2xl
                       border border-gray-100 shadow-sm"
          >
            {/* Netlify required hidden inputs */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border rounded-lg
                           focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border rounded-lg
                           focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full px-4 py-3 border rounded-lg
                           focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border rounded-lg
                           focus:ring-2 focus:ring-teal-500 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-600
                         text-white font-semibold rounded-lg
                         hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Connect with me
            </h3>

            <p className="text-gray-600">
              I'm always interested in new opportunities, collaborations, and
              interesting conversations.
            </p>

            <a
              href="mailto:tanvaysoni90823@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition"
            >
              <Mail className="w-5 h-5" />
              tanvaysoni90823@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/tanvay/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition"
            >
              <Linkedin className="w-5 h-5" />
              linkedin.com/in/tanvay
            </a>

            <a
              href="https://github.com/TanvaySoni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition"
            >
              <Github className="w-5 h-5" />
              github.com/TanvaySoni
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
