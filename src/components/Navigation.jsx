import React from "react";
import { motion } from "framer-motion";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const Navigation = ({ activeSection, setActiveSection }) => {
  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className="fixed-navigation"
      style={{
        position: "fixed",
        zIndex: 9999,
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul
        className="flex items-center justify-center gap-1 p-2 border border-gray-200/50 rounded-2xl shadow-2xl bg-white/90 backdrop-blur-xl"
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(59, 130, 246, 0.2)",
          gap: "0.25rem",
          padding: "0.5rem 1.5rem",
          borderRadius: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          minWidth: "320px",
          width: "auto",
          maxWidth: "90vw",
        }}
      >
        {navItems.map((item) => (
          <li key={item.id} className="relative">
            <button
              onClick={() => handleSectionClick(item.id)}
              className={`relative flex items-center justify-center gap-2 px-4 py-2 rounded-xl z-10 transition-all duration-300 focus:outline-none focus:ring-0 ${
                activeSection === item.id
                  ? "text-blue-600 scale-105"
                  : "text-gray-500 hover:text-gray-900 hover:scale-105"
              }`}
              style={{
                color: activeSection === item.id ? "#f97316" : "#9ca3af",
                padding: "0.5rem 1rem",
                minWidth: "3.5rem",
                height: "2.5rem",
                gap: "0.5rem",
                transform:
                  activeSection === item.id ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
                borderRadius: "0.75rem",
                outline: "none",
                border: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
                "@media (max-width: 640px)": {
                  minWidth: "2.5rem",
                  padding: "0.4rem 0.6rem",
                  gap: "0.25rem",
                },
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.color = "#f59e0b";
                  e.target.style.transform = "scale(1.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.color = "#9ca3af";
                  e.target.style.transform = "scale(1)";
                }
              }}
            >
              <div
                style={{
                  width: "1rem",
                  height: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {React.cloneElement(item.icon, {
                  className: "w-4 h-4",
                  style: { width: "1rem", height: "1rem" },
                })}
              </div>
              <span
                className="text-xs font-semibold hidden sm:inline"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  textAlign: "center",
                  lineHeight: "1",
                }}
              >
                {item.label}
              </span>
            </button>
            {activeSection === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 z-0 rounded-xl shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(251, 146, 60, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",
                  borderRadius: "0.75rem",
                  boxShadow: "0 4px 6px -1px rgba(251, 146, 60, 0.3)",
                  width: "100%",
                  height: "100%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
