// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const projects = [
  {
    title: "TerraScope",
    description:
      "Smart farming system that predicts soil health from satellite images.",
    tech: ["CNN", "Java", "Sentinel Hub"],
    icon: <FaCode className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Rootinity",
    description:
      "Hair health tracker with nutrient detection and weekly analysis system.",
    tech: ["React", "Node.js", "ML"],
    icon: <FaCode className="text-pink-500 text-3xl" />,
  },
  {
    title: "Streamlining Digital Storage",
    description:
      "Encrypted cloud solution to manage WhatsApp & device files securely.",
    tech: ["Spring Boot", "MongoDB", "Encryption"],
    icon: <FaCode className="text-blue-500 text-3xl" />,
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col bg-white rounded-xl border-l-4 border-indigo-500 shadow-md hover:shadow-xl transition-all duration-300 group p-6"
            >
              {/* Project Header */}
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full shadow-md group-hover:scale-110 transition">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <span className="text-sm text-gray-400 font-medium">
                    #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Chips */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Left Gradient Strip */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-l-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
