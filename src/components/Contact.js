import React from "react";
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-white py-28 px-6 md:px-20 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-br from-indigo-300 to-purple-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="flex justify-center items-center gap-3 mb-10">
          <FaPaperPlane className="text-3xl text-purple-500" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600">
            Get In Touch
          </h2>
        </div>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          Whether it's a project opportunity, tech collaboration, or simply a conversation — I'm always open to meaningful connections.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          <a
            href="mailto:akshata@example.com"
            className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center"
          >
            <FaEnvelope className="text-4xl text-indigo-500 mb-3" />
            <p className="text-lg font-bold text-gray-800">Email</p>
            <p className="text-sm text-gray-600">akshata@example.com</p>
          </a>

          <a
            href="https://linkedin.com/in/akshata"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center"
          >
            <FaLinkedin className="text-4xl text-blue-600 mb-3" />
            <p className="text-lg font-bold text-gray-800">LinkedIn</p>
            <p className="text-sm text-gray-600">linkedin.com/in/akshata</p>
          </a>

          <a
            href="https://github.com/akshata"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center"
          >
            <FaGithub className="text-4xl text-gray-800 mb-3" />
            <p className="text-lg font-bold text-gray-800">GitHub</p>
            <p className="text-sm text-gray-600">github.com/akshata</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
