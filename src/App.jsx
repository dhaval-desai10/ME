import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import UniversalBackground from "./components/UniversalBackground";

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
    <UniversalBackground>
      {/* All sections in one scrollable container */}
      <main className="relative z-10">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <Home />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <Skills />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <Projects />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <About />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <Contact />
          </div>
        </section>
      </main>

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </UniversalBackground>
  );
};

export default App;
