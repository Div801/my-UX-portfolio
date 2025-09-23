import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Palette } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
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

          {/* Caption — minimal staged lines */}
          <div className="max-w-3xl mx-auto mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="text-xl leading-relaxed text-gray-600 text-center space-y-1"
            >
              {/* Line 1 */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                }}
              >
                Graduating next year.
              </motion.p>

              {/* Line 2 (subtle gradient emphasis on two words) */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.12, duration: 0.55, ease: 'easeOut' } }
                }}
              >
                Curious about <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">people</span>, precise with <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">pixels</span>.
              </motion.p>

              {/* Line 3 + underline reveal */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { delay: 0.24, duration: 0.6, ease: 'easeOut' } }
                }}
                className="inline-block"
              >
                <p>UI/UX and Frontend — one small improvement at a time.</p>
                <motion.span
                  aria-hidden="true"
                  className="block h-px mt-2 bg-gradient-to-r from-pink-300 to-purple-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
                  style={{ transformOrigin: 'left center' }}
                />
              </motion.div>
            </motion.div>
          </div>

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
              <h3 className="text-xl font-medium text-gray-800 mb-4">UI/UX</h3>
              <p className="text-gray-600 leading-relaxed">
                Wireframes, simple prototypes, and quick user checks with a focus on clarity.
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
              <h3 className="text-xl font-medium text-gray-800 mb-4">Frontend</h3>
              <p className="text-gray-600 leading-relaxed">
                Learning React/Next.js and Tailwind. Clean components and responsive layouts.
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
              <h3 className="text-xl font-medium text-gray-800 mb-4">Process</h3>
              <p className="text-gray-600 leading-relaxed">
                Research → design → test → iterate. Small scope, steady improvements.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
