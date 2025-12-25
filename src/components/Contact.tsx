import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          subject: formData.get('subject') as string,
          message: formData.get('message') as string,
        }),
      });

      setStatus('success');
      form.reset();
   } catch {
  setStatus('error');
}
  };

  return (
    <section id="contact" className="px-4 sm:px-6 py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Have a project in mind or want to collaborate? Let’s talk.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-2xl border shadow-sm"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <input name="name" required placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg" />
            <input name="email" type="email" required placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg" />
            <input name="subject" placeholder="Subject"
              className="w-full px-4 py-3 border rounded-lg" />
            <textarea name="message" required rows={5} placeholder="Message"
              className="w-full px-4 py-3 border rounded-lg resize-none" />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-semibold flex justify-center items-center gap-2"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <Send className="w-4 h-4" />
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-green-600 font-medium">
                <CheckCircle className="w-5 h-5" />
                Message sent successfully!
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* INFO */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Connect with me</h3>
            <a href="mailto:tanvaysoni90823@gmail.com" className="flex gap-3">
              <Mail /> tanvaysoni90823@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/tanvay/" target="_blank" className="flex gap-3">
              <Linkedin /> LinkedIn
            </a>
            <a href="https://github.com/TanvaySoni" target="_blank" className="flex gap-3">
              <Github /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
