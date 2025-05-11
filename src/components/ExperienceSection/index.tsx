import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TimelineItem from "./TimelineItem";
import StatisticsCircle from "./StatisticsCircle";
import { experiences, statistics } from "./data";

const ExperienceSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-12 bg-dark-300 text-white overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            My professional journey and accomplishments in the tech industry
          </p>
        </motion.div>

        <div ref={ref} className="relative mb-20">
          {/* Vertical timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500"></div>

          {/* Timeline items */}
          <div className="relative z-10">
            {experiences.map((experience, index) => (
              <TimelineItem key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>

        {/* Statistics Circle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-center text-xl font-semibold mb-10 text-gray-300">
            Professional Statistics
          </h3>
          <StatisticsCircle statistics={statistics} />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
