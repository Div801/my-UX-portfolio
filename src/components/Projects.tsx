import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App Redesign",
      category: "UI/UX Design",
      description: "Complete redesign of a shopping app focusing on user journey optimization and conversion improvement.",
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Mobile Design", "UX Research", "Prototyping"],
      color: "from-pink-300 to-purple-300"
    },
    {
      id: 2,
      title: "Nenasala Website Redesign",
      category: "UI/UX Design",
      description: "Improving accessibility and modern UI for a Sri Lankan platform.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Web Design", "Dashboard", "Data Viz"],
      color: "from-green-300 to-blue-300"
    },
    {
      id: 3,
      title: "Banking App Redesign",
      category: "UI/UX Design",
      description: "Comprehensive redesign focused on accessibility, security, and intuitive financial management.",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["FinTech", "Accessibility", "Mobile"],
      color: "from-orange-300 to-pink-300"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-thin text-gray-800 mb-6">UI/UX Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of recent redesign projects that showcase my approach to solving complex user experience challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-purple-500 bg-purple-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-50 rounded-full hover:bg-pink-50 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-600 hover:text-pink-500" />
                  </motion.button>
                </div>

                <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-pink-500 font-medium group-hover:text-purple-500 transition-colors duration-300"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;