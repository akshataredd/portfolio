import React from "react";
import { FaHeart, FaReact, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 py-10 px-6 mt-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div className="text-gray-700 text-sm">
          <p>
            Built with <FaReact className="inline text-blue-500" /> React & Tailwind CSS — Made with <FaHeart className="inline text-red-500" /> by Akshata
          </p>
        </div>

        <div className="flex gap-5 text-gray-600 text-lg">
          <a href="https://github.com/akshata" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/akshata" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
