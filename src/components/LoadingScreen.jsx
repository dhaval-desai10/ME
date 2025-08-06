import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LoadingScreen = ({ onLoadingComplete }) => {
  const loadingRef = useRef(null);
  const letterRefs = useRef([]);
  const welcomeRef = useRef(null);
  const loaderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const nameText = "DHAVAL DESAI";

  useEffect(() => {
    // Reset progress
    setProgress(0);

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      if (!loadingRef.current) return;

      // Create sophisticated entrance timeline
      const masterTl = gsap.timeline();

      // Phase 1: Name letter-by-letter reveal with advanced effects
      if (letterRefs.current.length > 0) {
        masterTl.fromTo(
          letterRefs.current.filter(Boolean),
          {
            opacity: 0,
            y: 50,
            rotationX: -90,
            scale: 0.5,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: {
              amount: 1.2,
              from: "center",
              ease: "power2.out",
            },
            ease: "back.out(1.7)",
          }
        );
      }

      // Phase 2: Welcome message with typewriter effect
      if (welcomeRef.current) {
        masterTl.fromTo(
          welcomeRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }

      // Phase 3: Tech stack indicators cascade
      const techElements = document.querySelectorAll(".tech-indicator");
      if (techElements.length > 0) {
        masterTl.fromTo(
          techElements,
          { opacity: 0, y: 20, scale: 0.8 },
          {
            opacity: 0.6,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }

      // Advanced progress loading with faster speed
      setTimeout(() => {
        let currentProgress = 0;
        let progressSpeed = 5;

        const progressInterval = setInterval(() => {
          // Much faster loading
          if (currentProgress < 40) {
            progressSpeed = Math.random() * 4 + 6; // Much faster start
          } else if (currentProgress < 80) {
            progressSpeed = Math.random() * 3 + 5; // Fast medium speed
          } else {
            progressSpeed = Math.random() * 2 + 4; // Faster at end
          }

          currentProgress += progressSpeed;

          if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(progressInterval);

            // Sophisticated exit sequence
            setTimeout(() => {
              const exitTl = gsap.timeline({
                onComplete: () => {
                  if (onLoadingComplete) onLoadingComplete();
                },
              });

              // Exit animations with staggered effects
              exitTl
                .to(techElements, {
                  opacity: 0,
                  y: -20,
                  scale: 0.8,
                  duration: 0.3,
                  stagger: 0.05,
                  ease: "power2.in",
                })
                .to(
                  welcomeRef.current,
                  {
                    opacity: 0,
                    y: -30,
                    duration: 0.4,
                    ease: "power2.in",
                  },
                  "-=0.2"
                )
                .to(
                  letterRefs.current.filter(Boolean),
                  {
                    opacity: 0,
                    y: -50,
                    rotationX: 90,
                    scale: 0.5,
                    filter: "blur(10px)",
                    duration: 0.6,
                    stagger: {
                      amount: 0.4,
                      from: "edges",
                      ease: "power2.in",
                    },
                    ease: "back.in(1.7)",
                  },
                  "-=0.2"
                )
                .to(
                  loadingRef.current,
                  {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.5,
                    ease: "power2.in",
                  },
                  "-=0.1"
                );
            }, 200);
          }

          setProgress(Math.min(currentProgress, 100));
        }, 60); // Much faster update frequency
      }, 800); // Start much sooner
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.6),
              0 0 30px rgba(59, 130, 246, 0.4);
          }
        }
        @keyframes borderLineTop {
          0%,
          25% {
            left: -100%;
            opacity: 0;
          }
          26%,
          50% {
            left: 0%;
            opacity: 1;
          }
          51%,
          75% {
            left: 100%;
            opacity: 1;
          }
          76%,
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        @keyframes borderLineRight {
          0%,
          25% {
            top: -100%;
            opacity: 0;
          }
          26%,
          50% {
            top: 0%;
            opacity: 1;
          }
          51%,
          75% {
            top: 100%;
            opacity: 1;
          }
          76%,
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes borderLineBottom {
          0%,
          25% {
            right: -100%;
            opacity: 0;
          }
          26%,
          50% {
            right: 0%;
            opacity: 1;
          }
          51%,
          75% {
            right: 100%;
            opacity: 1;
          }
          76%,
          100% {
            right: 100%;
            opacity: 0;
          }
        }
        @keyframes borderLineLeft {
          0%,
          25% {
            bottom: -100%;
            opacity: 0;
          }
          26%,
          50% {
            bottom: 0%;
            opacity: 1;
          }
          51%,
          75% {
            bottom: 100%;
            opacity: 1;
          }
          76%,
          100% {
            bottom: 100%;
            opacity: 0;
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }
        .rotate-animation {
          animation: rotate 2s linear infinite;
        }
        .border-loading-animation {
          animation: borderLoading 2s linear infinite;
        }
        .content-border {
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          position: relative;
          background: transparent;
          overflow: hidden;
        }
        .content-border::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.8),
            rgba(6, 182, 212, 0.8),
            transparent
          );
          animation: borderLineTop 3s linear infinite;
        }
        .content-border::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(6, 182, 212, 0.8),
            rgba(139, 92, 246, 0.8),
            transparent
          );
          animation: borderLineRight 3s linear infinite 0.75s;
        }
        .border-line-bottom {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            270deg,
            transparent,
            rgba(139, 92, 246, 0.8),
            rgba(236, 72, 153, 0.8),
            transparent
          );
          animation: borderLineBottom 3s linear infinite 1.5s;
        }
        .border-line-left {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(
            0deg,
            transparent,
            rgba(236, 72, 153, 0.8),
            rgba(59, 130, 246, 0.8),
            transparent
          );
          animation: borderLineLeft 3s linear infinite 2.25s;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      {/* Enhanced Content Section with Animated Border */}
      <div
        ref={loaderRef}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8"
      >
        {/* Animated Border Container */}
        <div className="p-12 content-border">
          <div className="border-line-bottom"></div>
          <div className="border-line-left"></div>
          {/* Animated Name Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              {nameText.split("").map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => (letterRefs.current[index] = el)}
                  className={`inline-block text-2xl md:text-4xl font-bold tracking-wider glow-animation ${
                    letter === " " ? "w-3" : "text-white"
                  }`}
                  style={{
                    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                    textShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {letter === " " ? "" : letter}
                </span>
              ))}
            </div>

            {/* Enhanced Tagline */}
            <div className="text-center float-animation">
              <div
                ref={welcomeRef}
                className="text-lg font-light tracking-wide text-gray-300 md:text-xl"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="text-blue-400 pulse-animation">&gt;</span>
                <span className="ml-2">Initializing Portfolio Experience</span>
                <span className="animate-pulse text-cyan-400">_</span>
              </div>
            </div>

            {/* Animated Decorative Elements */}
            <div className="flex justify-center mt-12 space-x-8">
              <div
                className="flex flex-col items-center space-y-2 float-animation"
                style={{ animationDelay: "0s" }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 pulse-animation"></div>
                <span className="font-mono text-xs text-gray-500">
                  Frontend
                </span>
              </div>
              <div
                className="flex flex-col items-center space-y-2 float-animation"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 pulse-animation"></div>
                <span className="font-mono text-xs text-gray-500">Backend</span>
              </div>
              <div
                className="flex flex-col items-center space-y-2 float-animation"
                style={{ animationDelay: "2s" }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 pulse-animation"></div>
                <span className="font-mono text-xs text-gray-500">Design</span>
              </div>
            </div>

            {/* Animated Connection Lines */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400 fade-in-up"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full pulse-animation"></div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 fade-in-up"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 pulse-animation"></div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent fade-in-up"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
