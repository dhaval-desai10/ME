import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans">
      {/* All sections in one scrollable container */}
      <main className="pb-32">
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
};

export default App;
