import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram, Dribbble } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Dribbble, href: '#', color: 'hover:text-pink-500' },
    { icon: Instagram, href: '#', color: 'hover:text-purple-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
    { icon: Github, href: '#', color: 'hover:text-gray-700' },
  ];

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-gray-50 rounded-2xl text-gray-400 ${link.color} transition-colors duration-300`}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center text-gray-600 mb-4"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-2"
            >
              <Heart className="w-5 h-5 text-pink-400 fill-current" />
            </motion.div>
            <span>by Divya</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-500 text-sm"
          >
            © 2025 Divyanjalee Abeskara. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;