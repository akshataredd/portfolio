// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaFingerprint, FaLeaf } from "react-icons/fa";

const projects = [
  {
    title: "CleanAirX",
    description:
      "AI-driven air pollution tracker with early warnings & complaint system.",
    tech: ["React", "Google Earth Engine", "Blockchain"],
    icon: <FaLeaf className="text-green-500 text-4xl" />,
  },
  {
    title: "PulseAuth",
    description:
      "Typing pattern-based biometric auth using ML + sensor data.",
    tech: ["Spring Boot", "Python", "ML"],
    icon: <FaFingerprint className="text-indigo-500 text-4xl" />,
  },
  {
    title: "TerraScope",
    description:
      "Smart farming system that predicts soil health from satellite images.",
    tech: ["CNN", "Java", "Sentinel Hub"],
    icon: <FaCode className="text-yellow-500 text-4xl" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
       <div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 leading-snug mb-4">
    <span className="inline-block align-middle mr-2 text-purple-500 text-5xl">👩‍💻</span>
    My Featured Projects
  </h2>
  <p className="text-gray-500 text-sm mt-1">
    Projects built to solve real-world problems with elegant solutions.
  </p>
</div>


        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gray-100 rounded-full shadow">{project.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <span className="text-xs text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full font-semibold">
                    #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
