import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, languages } from '../data/portfolioData';
import { BookOpen, Globe } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="education" className="py-20 bg-dark-300 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Languages</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            My academic background and language proficiencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-dark-200 rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary-700 p-3 rounded-full mr-4">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-primary-300">Education</h3>
            </div>

            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-6 pb-6 border-b border-gray-700 last:border-0 last:pb-0 last:mb-0"
              >
                <h4 className="text-xl font-semibold mb-2">{item.degree}</h4>
                <p className="text-gray-400 mb-1">{item.institution}</p>
                <p className="text-sm text-gray-500">{item.period}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-dark-200 rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className="bg-secondary-700 p-3 rounded-full mr-4">
                <Globe size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-secondary-300">Languages</h3>
            </div>

            {languages.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-6 pb-6 border-b border-gray-700 last:border-0 last:pb-0 last:mb-0"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold">{item.language}</h4>
                  <span className="text-sm bg-dark-100 text-secondary-300 py-1 px-3 rounded-full">
                    {item.proficiency}
                  </span>
                </div>
                <div className="w-full bg-dark-400 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-secondary-500 to-secondary-300 h-2.5 rounded-full w-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;