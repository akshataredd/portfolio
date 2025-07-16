import React from "react";
import profileImg from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import { FaUserAstronaut } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-white py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        {/* Profile Image */}
        <motion.div
          className="md:col-span-5 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 rounded-full shadow-2xl border-4 border-white overflow-hidden">
            <img
              src={profileImg}
              alt="Akshata"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* About Text Content */}
        <motion.div
          className="md:col-span-7 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaUserAstronaut className="text-3xl text-purple-500" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 leading-tight">
              About Me
            </h2>
          </div>

          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Hello! I’m <span className="text-purple-700 font-semibold">Akshata</span>, a dedicated and creative Full Stack Developer with a strong flair for solving real-world problems using AI and ML. I bring user-centric design, clean architecture, and optimized code together to build seamless digital experiences.
          </p>

          <p className="text-gray-700 text-base mb-4">
            With a deep understanding of modern development stacks and a passion for learning, I aim to deliver products that are not only functional but also intelligent and scalable. From UI/UX finesse to backend logic and cloud deployment, I handle it all.
          </p>

          <p className="italic text-sm text-gray-600">
            "Great code isn’t just logical — it’s intuitive, scalable, and inspiring."
          </p>

          <a
            href="/Akshata_Resume.pdf"
            download
            className="inline-block mt-6 px-6 py-3 border-2 border-purple-500 text-purple-700 font-medium rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
