import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Palette } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-thin text-gray-800 mb-8"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            I'm a passionate designer who believes in creating digital experiences that are not only 
            visually stunning but also deeply meaningful. My work spans across UI/UX design and digital 
            illustration, always striving to blend creativity with purposeful functionality.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Crafting intuitive interfaces that prioritize user experience while maintaining 
                aesthetic excellence and brand consistency.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-green-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-300 to-blue-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Digital Art</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating expressive illustrations that tell stories and evoke emotions 
                through color, composition, and thoughtful details.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-300 to-pink-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Creative Process</h3>
              <p className="text-gray-600 leading-relaxed">
                Combining research, empathy, and iteration to deliver designs that 
                resonate with users and achieve business goals.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;