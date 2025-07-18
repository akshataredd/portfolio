import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-gray-600 text-sm">
        
        {/* Footer Text */}
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Akshata V Reddy. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/akshataredd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/akshata-v-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
