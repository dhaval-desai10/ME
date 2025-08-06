import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Animate navbar on load
    const timer = setTimeout(() => {
      if (!navRef.current) return;

      const tl = gsap.timeline();

      tl.fromTo(
        navRef.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      )
        .fromTo(
          logoRef.current,
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .fromTo(
          menuItemsRef.current.filter(Boolean),
          {
            y: -20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.6"
        );
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <style jsx>{`
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
        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }
        .logo-hover {
          cursor: pointer;
          display: inline-block;
        }
        .logo-letter {
          display: inline-block;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center bottom;
        }
        .logo-hover:hover .logo-letter {
          animation: bounce-letter 0.6s ease-in-out;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        }
        .logo-hover:hover .logo-letter:nth-child(1) {
          animation-delay: 0s;
        }
        .logo-hover:hover .logo-letter:nth-child(2) {
          animation-delay: 0.1s;
        }
        .logo-hover:hover .logo-letter:nth-child(3) {
          animation-delay: 0.2s;
        }
        .logo-hover:hover .logo-letter:nth-child(4) {
          animation-delay: 0.3s;
        }
        .logo-hover:hover .logo-letter:nth-child(5) {
          animation-delay: 0.4s;
        }
        .logo-hover:hover .logo-letter:nth-child(6) {
          animation-delay: 0.5s;
        }
        .logo-hover:hover .logo-dot {
          color: #06b6d4;
          text-shadow: 0 0 25px rgba(6, 182, 212, 1);
          animation: pulse-dot 0.8s ease-in-out 0.6s;
        }
        @keyframes bounce-letter {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
        }
        @keyframes pulse-dot {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
        }
        .nav-item {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 8px 16px;
          border-radius: 8px;
        }
        .nav-item::before {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }
        .nav-item:hover::before {
          width: 80%;
        }
        .nav-item:hover {
          color: #06b6d4;
          transform: translateY(-2px);
          background: rgba(59, 130, 246, 0.1);
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
        }
        .hire-btn {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .hire-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }
        .hire-btn:hover::before {
          left: 100%;
        }
        .hire-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }
      `}</style>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-30 bg-black/90 backdrop-blur-lg border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div ref={logoRef} className="flex items-center">
              <span
                className="text-2xl font-bold text-white glow-animation logo-hover interactive"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="logo-letter">D</span>
                <span className="logo-letter">H</span>
                <span className="logo-letter">A</span>
                <span className="logo-letter">V</span>
                <span className="logo-letter">A</span>
                <span className="logo-letter">L</span>
                <span className="text-blue-400 logo-dot">.</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  onClick={() => handleMenuClick(item.href)}
                  className="nav-item text-gray-300 font-medium interactive"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md font-medium"
                >
                  {item.name}
                </button>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full font-medium">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
