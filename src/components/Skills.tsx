import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/portfolioData";

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getColorClass = (categoryIndex: number) => {
    const colorClasses = [
      "bg-slate-500 text-white",
      "bg-secondary-600 text-white",
      "bg-accent-600 text-white",
      "bg-success-600 text-white",
    ];
    return colorClasses[categoryIndex % colorClasses.length];
  };

  return (
    <section id="skills" className="py-20 lg:px-20 bg-dark-300 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            The technologies, frameworks, and tools I specialize in
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-dark-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3
                className={`text-lg font-semibold mb-4 inline-block py-2 px-3 rounded ${getColorClass(
                  categoryIndex
                )}`}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                    className="bg-primary-800 text-gray-300 py-2 px-4 rounded-full text-sm hover:bg-primary-900 hover:text-primary-100 transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
