import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Palette, Layers, Mail, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', icon: User, href: '#about' },
    { name: 'UI/UX', icon: Layers, href: '#projects' },
    { name: 'Illustrations', icon: Palette, href: '#illustrations' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-light text-gray-800"
          >
            Div's Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors duration-300"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/20 md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 py-3 text-gray-600 hover:text-pink-500 transition-colors duration-300"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-lg">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;