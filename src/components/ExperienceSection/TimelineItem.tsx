import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Experience } from './types';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative mb-12 last:mb-0"
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center">
        {/* Left content for even items, empty div for odd items */}
        <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pr-12 opacity-0'}`}>
          {isEven && (
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-primary-300">{experience.company}</h3>
              <p className="text-lg text-white">{experience.role}</p>
              <p className="text-sm text-gray-400">{experience.period}</p>
            </div>
          )}
        </div>
        
        {/* Timeline dot */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center z-10">
            <Briefcase size={20} className="text-white" />
          </div>
          <div className="absolute w-20 h-20 rounded-full bg-primary-500/20 -top-4 -left-4 animate-pulse-slow"></div>
        </div>
        
        {/* Right content for odd items, empty div for even items */}
        <div className={`w-1/2 ${!isEven ? 'pl-12' : 'pl-12 opacity-0'}`}>
          {!isEven && (
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-primary-300">{experience.company}</h3>
              <p className="text-lg text-white">{experience.role}</p>
              <p className="text-sm text-gray-400">{experience.period}</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center z-10 mr-4">
            <Briefcase size={16} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary-300">{experience.company}</h3>
            <p className="text-base text-white">{experience.role}</p>
            <p className="text-xs text-gray-400">{experience.period}</p>
          </div>
        </div>
      </div>
      
      {/* Experience card - same for both layouts */}
      <div className={`md:w-1/2 ${!isEven ? 'md:ml-auto' : ''} ${isEven ? 'md:mr-auto' : ''} mt-4 md:mt-6 md:px-12`}>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-dark-200/80 backdrop-blur-sm p-5 rounded-lg border-l-4 border-primary-500 shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
        >
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {experience.description.map((item, idx) => (
              <li key={idx} className="text-sm md:text-base">{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;