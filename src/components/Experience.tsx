import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../data/portfolioData";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-6 sm:px-20 bg-dark-300 text-white"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>

          <p className="text-gray-400 max-w-xl mx-auto">
            My professional journey and accomplishments in the tech industry
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Vertical line only on large screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col lg:flex-row lg:items-center"
              >
                {/* Left Side */}
                <div className="relative flex flex-row lg:flex-col items-start lg:items-end lg:w-1/2 lg:pr-12 mb-4 lg:mb-0">
                  {/* Timeline Icon */}
                  <div
                    className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center z-10 mr-4 lg:mr-0 
                  lg:absolute lg:left-1/2 lg:top-0 lg:-translate-x-1/2"
                  >
                    <Briefcase size={20} className="text-white" />
                  </div>

                  {/* Company Info */}
                  <div className="text-left lg:text-right">
                    <h3 className="text-xl font-semibold text-primary-300">
                      {experience.company}
                    </h3>
                    <p className="text-lg text-gray-300">{experience.role}</p>
                    <p className="text-sm text-gray-400">{experience.period}</p>
                  </div>
                </div>

                {/* Right Side */}
                <div className="lg:w-1/2 lg:pl-12 pl-4">
                  <div className="bg-dark-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Circular Achievements */}
        <div className="flex justify-center items-center mt-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-[280px] sm:w-[300px] md:w-[320px] aspect-square"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-20 blur-xl"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 opacity-30"></div>
            <div className="absolute inset-4 rounded-full bg-dark-300 flex flex-col items-center justify-center text-center p-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-300 mb-2">
                  10+
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Projects Completed
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-300 mb-2">
                  3+
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Years Experience
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-300 mb-2">
                  8+
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Technologies
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
