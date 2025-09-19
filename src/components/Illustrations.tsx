import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Meme Maker App",
      description: "A MERN stack web app to create, edit, and share memes with stickers and filters.",
      image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: "React, Node.js, Express, MongoDB"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A minimal and interactive portfolio built with React and TailwindCSS.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: "React, TailwindCSS, Framer Motion"
    },
    {
      id: 3,
      title: "Pet Care App Backend",
      description: "API system for booking vets, rating them, and managing pet profiles.",
      image: "https://images.pexels.com/photos/4587995/pexels-photo-4587995.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: "Node.js, Express, MongoDB"
    },
    {
      id: 4,
      title: "E-commerce Redesign",
      description: "UX/UI redesign project for a Sri Lankan e-commerce website with modern layouts.",
      image: "https://images.pexels.com/photos/7947697/pexels-photo-7947697.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: "Figma, UX Research, Wireframing"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-pink-400 mr-3" />
            <h2 className="text-5xl font-thin text-gray-800">Projects</h2>
            <Sparkles className="w-8 h-8 text-purple-400 ml-3" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated selection of my frontend and full‑stack projects showcasing creativity and technical skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2"
                >
                  <Code className="w-5 h-5 text-purple-500" />
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-500 bg-purple-50 px-3 py-1 rounded-full">
                    {project.tech}
                  </span>
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>

                <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;