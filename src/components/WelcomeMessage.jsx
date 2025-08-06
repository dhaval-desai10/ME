import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WelcomeMessage = ({ onWelcomeComplete }) => {
  const welcomeRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!welcomeRef.current) return;

      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            if (onWelcomeComplete) onWelcomeComplete();
          }, 200);
        },
      });

      // Welcome message animation - faster with text effects
      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      )
        .fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          [textRef.current, subtitleRef.current],
          {
            opacity: 0,
            y: -30,
            duration: 0.4,
            ease: "power2.in",
          },
          "+=1.5"
        )
        .to(
          welcomeRef.current,
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.2"
        );
    }, 300);

    return () => clearTimeout(timer);
  }, [onWelcomeComplete]);

  return (
    <div
      ref={welcomeRef}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black"
    >
      <style jsx>{`
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blink {
          0%,
          50% {
            border-right-color: transparent;
          }
          51%,
          100% {
            border-right-color: #06b6d4;
          }
        }
        .typewriter {
          overflow: hidden;
          border-right: 2px solid #06b6d4;
          white-space: nowrap;
          animation: typewriter 2s steps(34) 0.3s forwards,
            blink 0.75s step-end infinite;
          width: 0;
        }
        .glow-text {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5),
            0 0 40px rgba(6, 182, 212, 0.3);
        }
      `}</style>
      <div className="text-center">
        <h1
          ref={textRef}
          className="mb-6 text-4xl font-bold text-white md:text-6xl typewriter glow-text"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Welcome to My Learning Journey
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg font-light text-gray-300 md:text-xl"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Exploring the world of web development, one project at a time
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
