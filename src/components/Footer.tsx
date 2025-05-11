import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-400 py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-300">Rahul Kumawat</h3>
            <p className="mb-4 text-gray-400 max-w-xs">
              {personalInfo.description}
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-300 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-300 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.contact.email}`} className="text-gray-400 hover:text-primary-300 transition-colors duration-300">
                <Mail size={20} />
              </a>
              <a href={`tel:${personalInfo.contact.phone}`} className="text-gray-400 hover:text-primary-300 transition-colors duration-300">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary-300 transition-colors duration-300">Home</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-primary-300 transition-colors duration-300">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary-300 transition-colors duration-300">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-primary-300 transition-colors duration-300">Skills</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-primary-300 transition-colors duration-300">Education</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-300">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Mail size={20} className="mt-1 text-primary-300" />
                <span>{personalInfo.contact.email}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={20} className="mt-1 text-primary-300" />
                <span>{personalInfo.contact.phone}</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary-300">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{personalInfo.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {currentYear} Rahul Kumawat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;