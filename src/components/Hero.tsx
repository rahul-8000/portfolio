import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { Mail, Phone, ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center bg-gradient-to-br from-dark-400 to-dark-200 text-white py-20 lg:py-28 px-12 sm:px-6 lg:px-20"
    >
      <div className="container mx-auto py-16 md:py-20 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-primary-300 text-xl md:text-2xl mb-3"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-2xl md:text-3xl text-primary-400 mb-5"
            >
              {personalInfo.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-gray-300 text-base md:text-lg mb-6 max-w-lg mx-auto lg:mx-0"
            >
              {personalInfo.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >
              <a
                href="#contact"
                className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-md transition-colors duration-300 text-center"
              >
                Contact Me
              </a>
              <a
                href="/rahul_kumawat.pdf"
                download
                className="bg-transparent hover:bg-primary-900 text-primary-300 border border-primary-600 py-3 px-6 rounded-md transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary-300" />
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="hover:text-primary-300 transition-colors duration-300 break-all"
                >
                  {personalInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary-300" />
                <a
                  href={`tel:${personalInfo.contact.phone}`}
                  className="hover:text-primary-300 transition-colors duration-300"
                >
                  +91 {personalInfo.contact.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-20 blur-xl"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 opacity-30"></div>
              <div className="absolute inset-4 rounded-full bg-dark-300 overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Arrow Down Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#experience"
            className="text-gray-400 hover:text-primary-300 transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
