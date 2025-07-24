import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-3">
        <p className="text-sm">Developed by Kinana Bohra</p>
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/kinanabohra" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/kinanabohra" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-white" />
          </a>
          <a href="https://x.com/kinanabohra?t=5E1oIbt7IA-caTVkgsObRg&s=09" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-white" />
          </a>
        </div>
        <p className="text-xs mt-2">&copy; {new Date().getFullYear()} TechScribe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
