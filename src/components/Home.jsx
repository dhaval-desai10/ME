import React, { useEffect, useRef } from "react";
// import boyLaptopCartoon from "../assets/boy-laptop-cartoon.svg"; // Removed: file does not exist and is unused
// Removed unused/missing SVG imports
// External image for hero
const externalBoyCodingImg =
  "https://png.pngtree.com/thumb_back/fh260/background/20250120/pngtree-a-cartoon-boy-wearing-glasses-and-hoodie-is-coding-on-his-image_16934156.jpg";
import { gsap } from "gsap";

const Home = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    { number: "6+", label: "Learning Projects" },
    { number: "2+", label: "Year Learning" },
    { number: "∞", label: "Passion to Learn" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!heroRef.current) return;

      const tl = gsap.timeline();

      // Hero section animation - faster
      tl.fromTo(
        nameRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      )
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .fromTo(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .fromTo(
          buttonsRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.8,
            rotation: -10,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        )
        .fromTo(
          statsRef.current.filter(Boolean),
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define inline styles for animations to avoid styled-jsx issues
  const floatStyle = {
    animation: "float 6s ease-in-out infinite",
  };

  const pulseStyle = {
    animation: "pulse 2s ease-in-out infinite",
  };

  const glowStyle = {
    animation: "glow 3s ease-in-out infinite",
  };

  const gradientTextStyle = {
    background: "linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6)",
    color: "#3b82f6", // fallback solid color
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
    /* fallback for browsers that do not support background-clip: text */
    /* color property ensures visibility */
  };

  const heroButtonStyle = {
    position: "relative",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4); }
        }
        .name-char {
          display: inline-block;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s;
          cursor: none;
          perspective: 600px;
          color: #3b82f6; /* fallback color for maximum compatibility */
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          /* fallback for browsers that do not support background-clip: text */
        }
        .name-char.x:hover { transform: rotateX(360deg) scale(1.1); color: #06b6d4; z-index: 1; }
        .name-char.y:hover { transform: rotateY(360deg) scale(1.1); color: #06b6d4; z-index: 1; }
        .name-char.z:hover { transform: rotateZ(360deg) scale(1.1); color: #06b6d4; z-index: 1; }
      `}</style>

      <section
        id="home"
        ref={heroRef}
        className="min-h-screen bg-black"
        style={{ paddingTop: "12px" }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between min-h-screen py-8 lg:flex-row lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 mb-20 text-center lg:text-left lg:mb-0 lg:pr-8">
              {/* Greeting */}
              <div ref={titleRef} className="mb-6">
                <span className="text-lg font-medium text-blue-400 md:text-xl">
                  Hello, I'm
                </span>
              </div>

              {/* Name */}
              <h1
                ref={nameRef}
                className="mb-8 text-5xl font-bold md:text-7xl lg:text-8xl interactive"
                style={{
                  ...gradientTextStyle,
                  fontFamily: "'Space Grotesk', sans-serif",
                  whiteSpace: "nowrap",
                  letterSpacing: "2px",
                  textAlign: "center",
                  width: "100%",
                  display: "block",
                }}
              >
                {Array.from("DHAVAL DESAI").map((char, index) => {
                  const axis =
                    index % 3 === 0 ? "x" : index % 3 === 1 ? "y" : "z";
                  return (
                    <span
                      key={index}
                      className={`name-char ${axis}`}
                      style={{ display: "inline-block" }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  );
                })}
              </h1>

              {/* Description */}
              <div
                ref={descriptionRef}
                className="mb-6"
                style={{ marginBottom: "1.5rem" }}
              >
                <h2 className="mb-4 text-2xl font-light text-white md:text-3xl lg:text-4xl">
                  Aspiring Full Stack Developer
                </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
                  Currently learning and exploring web development. Building
                  projects to improve my skills in modern technologies and
                  frameworks.
                </p>
              </div>

              {/* Buttons */}
              <div
                ref={buttonsRef}
                className="flex flex-col justify-center gap-4 mb-6 sm:flex-row sm:gap-4 lg:justify-start"
                style={{ marginBottom: "1.5rem" }}
              >
                <button
                  onClick={() => scrollToSection("#projects")}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-full text-lg font-semibold min-w-[200px] shadow-lg shadow-blue-500/25 interactive"
                  style={heroButtonStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow =
                      "0 15px 35px rgba(59, 130, 246, 0.3)";
                    e.target.style.filter = "brightness(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 4px 14px 0 rgba(0, 0, 0, 0.25)";
                    e.target.style.filter = "brightness(1)";
                  }}
                >
                  View My Learning
                </button>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="border-2 border-blue-500 text-blue-400 px-10 py-4 rounded-full text-lg font-semibold min-w-[200px] bg-transparent backdrop-blur-sm interactive"
                  style={heroButtonStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.background = "rgba(59, 130, 246, 0.15)";
                    e.target.style.borderColor = "rgba(6, 182, 212, 0.8)";
                    e.target.style.color = "#60a5fa";
                    e.target.style.boxShadow =
                      "0 15px 35px rgba(59, 130, 246, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.background = "transparent";
                    e.target.style.borderColor = "rgb(59 130 246)";
                    e.target.style.color = "rgb(96 165 250)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  Connect With Me
                </button>
              </div>

              {/* Stats */}
              <div
                className="grid max-w-lg grid-cols-3 gap-6 mx-auto mt-2 lg:mx-0"
                style={{ marginTop: "0.5rem" }}
              >
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    ref={(el) => (statsRef.current[index] = el)}
                    className="p-4 text-center transition-all duration-300 border rounded-xl bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-blue-500/30"
                  >
                    <div
                      className="mb-2 text-2xl font-bold text-white md:text-3xl"
                      style={pulseStyle}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image/Visual */}
            <div className="flex justify-center flex-1 lg:justify-end lg:pl-8">
              <div
                ref={imageRef}
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
              >
                {/* Animated Background */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
                  style={glowStyle}
                ></div>

                {/* Profile Container */}
                <div
                  className="absolute flex items-center justify-center p-1 rounded-full inset-4 bg-gradient-to-br from-blue-500 to-cyan-500"
                  style={floatStyle}
                >
                  <div className="flex flex-col items-center justify-center w-full h-full bg-black rounded-full">
                    <img
                      src={externalBoyCodingImg}
                      alt="Cartoon boy coding on laptop"
                      style={{
                        width: "220px",
                        height: "220px",
                        objectFit: "cover",
                        borderRadius: "16px",
                      }}
                    />
                    <div className="flex gap-4 mt-2">
                      <a
                        href="https://github.com/dhaval-desai10"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        className="transition-transform hover:scale-110"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          style={{ color: "#6366F1" }}
                        >
                          <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.19 22 16.436 22 12.012 22 6.484 17.523 2 12 2z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/dhaval-desai-82122028a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        className="transition-transform hover:scale-110"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          style={{ color: "#06b6d4" }}
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute w-20 h-20 rounded-full top-10 right-10 bg-blue-500/30 blur-xl"
                  style={floatStyle}
                ></div>
                <div
                  className="absolute w-16 h-16 rounded-full bottom-10 left-10 bg-cyan-500/30 blur-xl"
                  style={{ ...floatStyle, animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute right-0 w-12 h-12 rounded-full top-1/2 bg-purple-500/30 blur-xl"
                  style={{ ...floatStyle, animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
          <div className="flex flex-col items-center text-gray-400">
            <span className="mb-2 text-sm font-light">Scroll Down</span>
            <div className="flex justify-center w-6 h-10 border border-gray-400 rounded-full">
              <div className="w-1 h-3 mt-2 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
