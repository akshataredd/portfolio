// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm"; // ✅ New form section
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships/>
        <Achievements/>
        <Contact />         {/* Old section: LinkedIn, GitHub, etc. */}
        <ContactForm />     {/* New section: Attractive Contact Us Form */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
