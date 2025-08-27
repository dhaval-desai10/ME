import React from "react";
import { motion } from "framer-motion";

// Helper components for icons to keep the main component clean
const LeetCodeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.48 4.26l-2.82 5.32h5.48L19 4.26h-5.52zM4 19.74h5.52l2.82-5.32H6.84L4 19.74zM20 19.74h-5.52l-2.82-5.32h5.48L20 19.74zM13.48 4.26l2.82 5.32h-5.48L8.08 4.26h5.4z" />
  </svg>
);

const CodeChefIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="16" />
    <circle cx="128" cy="128" r="48" fill="currentColor" />
    <path
      d="M128 208C172.183 208 208 172.183 208 128"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
    />
  </svg>
);

const GraduationCapIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l6.16-3.422A12.083 12.083 0 0122 12v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6c0-1.933 1.567-3.5 3.5-3.5 1.176 0 2.23.574 2.84 1.468"
    />
  </svg>
);

// Main Home Component
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 py-20 overflow-hidden sm:px-6 lg:px-8 bg-slate-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/2 translate-y-1/2 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>

      <motion.div
        className="z-10 w-full max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="relative inline-block mb-6">
            <div className="flex items-center justify-center text-3xl font-bold text-white rounded-full shadow-2xl w-36 h-36 bg-gradient-to-br from-slate-700 to-slate-900 ring-4 ring-white/20">
              DD
            </div>
            <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-green-500 border-4 rounded-full border-slate-50 animate-pulse">
              ✓
            </div>
          </div>

          <motion.h1
            variants={itemVariants}
            className="mb-3 text-4xl font-extrabold text-slate-800 md:text-6xl"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Dhaval Desai
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-8 text-lg text-slate-600 md:text-xl"
          >
            Full Stack Developer & Competitive Programmer
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            <span className="px-5 py-2 text-sm font-semibold text-blue-800 transition-all duration-300 rounded-full bg-blue-100/80 hover:bg-blue-200/80 hover:shadow-md">
              MERN Stack
            </span>
            <span className="px-5 py-2 text-sm font-semibold text-purple-800 transition-all duration-300 rounded-full bg-purple-100/80 hover:bg-purple-200/80 hover:shadow-md">
              C++ & Data Structures
            </span>
            <span className="px-5 py-2 text-sm font-semibold text-green-800 transition-all duration-300 rounded-full bg-green-100/80 hover:bg-green-200/80 hover:shadow-md">
              Problem Solving
            </span>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-3"
        >
          <StatCard
            icon={<LeetCodeIcon />}
            value="250+"
            label="Problems Solved"
            source="LeetCode & CodeChef"
            color="blue"
          />
          <StatCard
            icon={<GraduationCapIcon />}
            value="8.7"
            label="Current CGPA"
            source="CSE @ DEPSTAR"
            color="purple"
          />
          <StatCard
            icon={<CodeChefIcon />}
            value="1600"
            label="CodeChef Rating"
            source="3-Star Coder"
            color="green"
          />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={itemVariants}
          className="p-8 border shadow-lg bg-white/60 backdrop-blur-lg border-gray-200/80 rounded-2xl"
        >
          <h3 className="mb-6 text-2xl font-bold text-slate-900">
            Let's Connect
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <SocialLink
              href="mailto:dhavaldesai7000@gmail.com"
              label="Email"
              icon={
                <svg
                  className="w-6 h-6"
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
              }
              color="red"
            />
            <SocialLink
              href="tel:+919016159449"
              label="Phone"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
              color="green"
            />
            <SocialLink
              href="#"
              label="LinkedIn"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
              color="blue"
            />
            <SocialLink
              href="#"
              label="GitHub"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              }
              color="gray"
            />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-slate-500 animate-bounce"
        >
          <svg
            className="w-8 h-8 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="mt-2 text-sm">Explore More</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Reusable StatCard component
const StatCard = ({ icon, value, label, source, color }) => {
  const colors = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600",
  };

  return (
    <motion.div
      className="p-6 text-left transition-all duration-300 border shadow-lg bg-white/60 backdrop-blur-lg border-gray-200/80 rounded-2xl hover:shadow-xl hover:-translate-y-1"
      whileHover={{ scale: 1.05, rotate: -1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div
        className={`flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-slate-100 ${colors[color]}`}
      >
        {icon}
      </div>
      <div className={`text-3xl font-bold ${colors[color]}`}>{value}</div>
      <div className="mt-1 text-base font-semibold text-slate-700">{label}</div>
      <div className="text-sm text-slate-500">{source}</div>
    </motion.div>
  );
};

// Reusable SocialLink component
const SocialLink = ({ href, label, icon, color }) => {
  const colorClasses = {
    red: "text-red-600 bg-red-100/80 hover:bg-red-200/80",
    green: "text-green-600 bg-green-100/80 hover:bg-green-200/80",
    blue: "text-blue-600 bg-blue-100/80 hover:bg-blue-200/80",
    gray: "text-gray-800 bg-gray-200/80 hover:bg-gray-300/80",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center gap-2 p-4 font-semibold transition-all duration-300 rounded-xl ${colorClasses[color]} hover:shadow-lg hover:scale-105`}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </motion.a>
  );
};

export default Home;
