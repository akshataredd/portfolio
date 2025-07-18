// src/components/Achievements.js
import React from "react";

const achievements = [
  {
    title: "Unisys Innovation Program",
    description: "Selected for the national Unisys Innovation Challenge for scalable AI-based environmental solutions.",
    date: "2023",
  },
  {
    title: "TCS Youth Employment Program",
    description: "Completed employability training under TCS iON Youth Employability Program.",
    date: "2024",
  },
  {
    title: "AWS by Intellipaat",
    description: "Earned AWS certification covering cloud fundamentals and core services.",
    date: "2024",
  },
  {
    title: "React.js by Simplilearn",
    description: "Certified in modern front-end web development using React.js and JSX.",
    date: "2023",
  },
  {
    title: "Web Developer Internship",
    description: "3-month internship at DigiSnare Technologies working on real-world websites and blogs.",
    date: "2023",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen bg-white py-20 px-4 md:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 leading-snug mb-12 text-center">
        <span className="inline-block align-middle mr-3 text-purple-500 text-5xl">🏆</span>
        Achievements & Certifications
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="relative bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-transparent hover:border-indigo-200"
          >
            <div className="absolute top-[-12px] right-[-12px] text-2xl">🎖️</div>
            <h3 className="text-lg font-semibold text-indigo-700">{item.title}</h3>
            <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
            <p className="mt-4 text-sm text-gray-500 italic">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
