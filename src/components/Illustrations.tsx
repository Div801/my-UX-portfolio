import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Star, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;  
  tech: string;
  github: string;
};

// Minimal Cheems-y Shiba SVG (data URL, no hosting needed)
const CHEEMS_IMAGE = `data:image/svg+xml;utf8,` + encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900' viewBox='0 0 1600 900'>
  <rect width='1600' height='900' fill='#F7F4EF'/>
  <radialGradient id='g' cx='50%' cy='45%'>
    <stop offset='0%' stop-color='#FFFFFF' stop-opacity='1'/>
    <stop offset='100%' stop-color='#EDE7DF' stop-opacity='1'/>
  </radialGradient>
  <rect width='1600' height='900' fill='url(#g)'/>
  <g transform='translate(800,480)'>
    <ellipse cx='0' cy='0' rx='240' ry='220' fill='#F1C38E'/>
    <ellipse cx='0' cy='20' rx='200' ry='170' fill='#F9D4A8'/>
    <path d='M-170,-130 l-60,-110 a20,20 0 0 1 30,-22 l90,62 z' fill='#F1C38E'/>
    <path d='M170,-130 l60,-110 a20,20 0 0 0 -30,-22 l-90,62 z' fill='#F1C38E'/>
    <path d='M-135,-145 l-45,-80 80,55 z' fill='#F9D4A8' opacity='0.9'/>
    <path d='M135,-145 l45,-80 -80,55 z' fill='#F9D4A8' opacity='0.9'/>
    <ellipse cx='-80' cy='-10' rx='18' ry='22' fill='#2B2B2B'/>
    <ellipse cx='80' cy='-10' rx='18' ry='22' fill='#2B2B2B'/>
    <ellipse cx='0' cy='60' rx='120' ry='80' fill='#FFF' opacity='0.95'/>
    <path d='M0,40 q22,10 0,20 q-22,-10 0,-20Z' fill='#2B2B2B'/>
    <path d='M-30,82 q30,24 60,0' stroke='#2B2B2B' stroke-width='6' fill='none' stroke-linecap='round'/>
    <ellipse cx='-120' cy='60' rx='22' ry='12' fill='#F5B5B5' opacity='0.5'/>
    <ellipse cx='120' cy='60' rx='22' ry='12' fill='#F5B5B5' opacity='0.5'/>
    <ellipse cx='0' cy='210' rx='180' ry='20' fill='#000' opacity='0.06'/>
  </g>
  <rect x='0' y='820' width='1600' height='80' fill='#F3EDE4' opacity='0.8'/>
</svg>
`);

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Pet Care App – Vet Tele-Consult (Research)",
      description:
        "On-demand veterinary tele-consultation platform. Built the NLP chatbot for symptom triage and a vet booking flow with secure scheduling and case notes.",
      image:
        "https://images.pexels.com/photos/4587995/pexels-photo-4587995.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: "Flutter , Flask, MongoDB, NLP (spaCy), JWT",
      github: "https://github.com/Dhanuka001/PawPal-frontend",
    },
    {
      id: 2,
      title: "Meme Maker App",
      description:
        "A small solo project to create, edit, and share memes with text, stickers, and filters.",
      image: CHEEMS_IMAGE,
      tech: "React, TailwindCSS, Node.js",
      github: "https://github.com/Div801/Memes-Maker",
    },
    {
      id: 3,
      title: "Fitness App – Meal Planning (Completed)",
      description:
        "Shipped a meal-planning module: personalized plans, macro calculator, grocery list export, and schedule reminders. Integrated with the app’s auth and profile data.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tech: "React, Node.js, MongoDB",
      github: "https://github.com/Div801/pafMealPlan",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="other-projects" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
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
            <h2 className="text-5xl font-thin text-gray-800">Other Projects</h2>
            <Sparkles className="w-8 h-8 text-purple-400 ml-3" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated selection of my frontend and full-stack work showcasing creativity and technical skills.
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
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.pexels.com/photos/4388156/pexels-photo-4388156.jpeg?auto=compress&cs=tinysrgb&w=1600";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* GitHub Icon Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2"
                >
                  <Github className="w-5 h-5 text-gray-800" />
                </a>
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
          <a
            href="https://github.com/Dhanuka001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              View More Projects
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
