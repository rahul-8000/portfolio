import React from 'react';
import { motion } from 'framer-motion';
import { StatisticItem } from './types';

interface StatisticsCircleProps {
  statistics: StatisticItem[];
}

const StatisticsCircle: React.FC<StatisticsCircleProps> = ({ statistics }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-[280px] sm:w-[320px] aspect-square mx-auto"
    >
      {/* Radial glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-20 blur-xl"></div>
      
      {/* Gradient ring */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-500 opacity-30"></div>
      
      {/* Inner circle with content */}
      <div className="absolute inset-4 rounded-full bg-dark-300 flex flex-col items-center justify-center text-center p-4">
        <div className="grid gap-6">
          {statistics.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-bold bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Animated ring */}
      <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 opacity-50"></div>
      <div className="absolute inset-[-5px] rounded-full border border-primary-500/20 animate-pulse-slow"></div>
    </motion.div>
  );
};

export default StatisticsCircle;