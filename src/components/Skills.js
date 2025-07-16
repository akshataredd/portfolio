import React from "react";
import {
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiTensorflow,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-yellow-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 leading-snug mb-4">
            <span className="inline-block align-middle mr-2 text-purple-500 text-5xl">👩‍💻</span>
            My Tech Stack
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Tools I love to build amazing things with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-gray-800 font-semibold text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
