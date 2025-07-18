// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white/70 backdrop-blur-lg rounded-full shadow-md z-50 px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Akshata
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
        {["Home", "About", "Skills", "Projects","Internships", "Achievements", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
