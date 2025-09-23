import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin } from 'lucide-react';

const CONFIG = {
  EMAIL: 'divyanjaleeabesekara2001@gmail.com',
  WHATSAPP_E164: '94740886814', 
  MAPS_QUERY: 'Malabe,sri Lanka', 
  FORMSPREE_ENDPOINT: 'https://formspree.io/f/xxxxxxxx', // <- replace with your Formspree form ID
};

const Contact: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);

  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      value: CONFIG.EMAIL,
      color: 'from-pink-400 to-purple-400',
      href: `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent(
        'Project inquiry from portfolio'
      )}&body=${encodeURIComponent(
        `Hi Divyanjalee,

I came across your portfolio and would love to talk about a project.

- Project/role:
- Timeline:
- Budget (optional):

Thanks!`
      )}`,
      target: '_self' as const,
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      value: 'Schedule a call',
      color: 'from-green-400 to-blue-400',
      // WhatsApp deep link (opens app/web)
      href: `https://wa.me/${CONFIG.WHATSAPP_E164}?text=${encodeURIComponent(
        'Hi Divyanjalee — saw your portfolio and would like to chat about a project.'
      )}`,
      target: '_blank' as const,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available worldwide',
      color: 'from-orange-400 to-pink-400',
      href: `https://www.google.com/maps/search/${encodeURIComponent(CONFIG.MAPS_QUERY)}`,
      target: '_blank' as const,
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!CONFIG.FORMSPREE_ENDPOINT || CONFIG.FORMSPREE_ENDPOINT.endsWith('xxxxxxxx')) {
      // Fallback: open mailto with the form contents (keeps UI unchanged)
      const form = e.currentTarget;
      const data = new FormData(form);
      const name = String(data.get('name') || '');
      const email = String(data.get('email') || '');
      const type = String(data.get('type') || '');
      const message = String(data.get('message') || '');

      const mailto = `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent(
        `[Portfolio] ${type || 'Message'} from ${name}`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nMessage:\n${message}`
      )}`;
      window.location.href = mailto;
      return;
    }

    try {
      setSubmitting(true);
      const form = e.currentTarget;
      const res = await fetch(CONFIG.FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (res.ok) {
        alert('Thanks! Your message has been sent.');
        form.reset();
      } else {
        alert('Sorry, something went wrong. Try emailing me directly.');
      }
    } catch {
      alert('Network error. Please email me directly.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-thin text-gray-800 mb-6">Let's Create Together</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Action tiles (now clickable) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.target}
                rel={item.target === '_blank' ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact form (posts to Formspree or falls back to mailto) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select
                  name="type"
                  className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                >
                  <option>UI/UX Design</option>
                  <option>Digital Illustration</option>
                  <option>Brand Identity</option>
                  <option>Other</option>
                </select>
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-4 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center space-x-2 disabled:opacity-75"
              >
                <Send className="w-5 h-5" />
                <span>{submitting ? 'Sending…' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
