import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-400 py-12 lg:px-20 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="pt-6 mt-4 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {currentYear} Rahul Kumawat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
