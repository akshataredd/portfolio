// src/components/Hero.js
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer 👩‍💻",
      "AI/ML Enthusiast 🤖",
      "Clean Code Lover ✨",
      "Scalable System Builder 🔧"
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <section id="home" className="relative w-full h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center overflow-hidden">
      {/* Animated Blob */}
      <motion.div
        className="absolute w-96 h-96 bg-indigo-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }}
      />

      {/* Content */}
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Hi, I'm <span className="text-indigo-600">Akshata</span>
        </h1>

        {/* 💡 Typing Text with Gradient */}
        <p className="mt-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text inline-block">
          {text}
          <Cursor />
        </p>

        <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-xl mx-auto">
          Building smart, scalable, and human-centered digital experiences.
        </p>

        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
