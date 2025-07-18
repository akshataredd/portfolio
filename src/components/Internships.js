// src/components/Internships.js
import React from "react";

const internships = [
  {
    company: "Digisnare Technologies",
    role: "Web Development Intern",
    duration: "Jan 2023 – Apr 2023",
    work: [
      "Developed and maintained responsive websites.",
      "Worked with HTML, CSS, JavaScript, and WordPress.",
      "Collaborated with designers and backend developers."
    ],
    logo: "🌐"
  },
  {
    company: "IBM Virtual Internship",
    role: "AI/ML Intern (Remote)",
    duration: "May 2024 – Jun 2024",
    work: [
      "Built ML models for real-world data.",
      "Submitted project: 'CleanAirX' for air pollution detection.",
      "Learned Git, Python, IBM Watson Studio."
    ],
    logo: "🧠"
  }
];

const Internships = () => {
  return (
    <section id="internships" className="bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-12 text-center">
        <span className="inline-block align-middle mr-2 text-purple-500 text-5xl">🎓</span>
        Internships
      </h2>

      <div className="space-y-10 max-w-4xl mx-auto">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="relative bg-white shadow-xl rounded-2xl p-6 md:p-8 border-l-8 border-purple-400 hover:border-pink-500 transition-all duration-300 group"
          >
            <div className="absolute -left-5 top-6 text-3xl">{intern.logo}</div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition">
              {intern.role} @ {intern.company}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{intern.duration}</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {intern.work.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
