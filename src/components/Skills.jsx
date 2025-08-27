import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      skills: ["C/C++", "JavaScript", "Python", "Java"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Frontend Development",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Backend Development",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Tools & Technologies",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      skills: ["Git/GitHub", "VS Code", "Postman", "Figma"],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const achievements = [
    { number: "250+", label: "Problems Solved", desc: "LeetCode & CodeChef" },
    { number: "1600+", label: "CodeChef Rating", desc: "3-Star Coder" },
    { number: "8.7", label: "Current CGPA", desc: "CSE @ DEPSTAR" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full px-8 py-24 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-5xl font-bold text-gray-900">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Expertise
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            Technologies and tools I use to build modern, scalable applications
            and solve complex problems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-xl hover:border-gray-200"
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 p-4 transition-colors duration-200 rounded-lg bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <span className="font-medium text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="p-12 mb-20 bg-white border border-gray-100 shadow-lg rounded-2xl">
          <h3 className="mb-12 text-3xl font-bold text-center text-gray-900">
            Achievements & Stats
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {achievement.number}
                </div>
                <div className="mb-1 text-xl font-semibold text-gray-900">
                  {achievement.label}
                </div>
                <div className="text-gray-600">{achievement.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="p-8 border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
            <h4 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-900">
              <span className="text-3xl">🎯</span>
              Current Focus
            </h4>
            <ul className="space-y-4">
              {[
                "Advanced React Patterns & Architecture",
                "DevOps & Cloud Deployment (AWS)",
                "System Design & Scalability",
                "Machine Learning Fundamentals",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 border bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border-emerald-100">
            <h4 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-900">
              <span className="text-3xl">🏆</span>
              Highlights
            </h4>
            <ul className="space-y-4">
              {[
                "Hackathon Participant - Odoo x MSU 2025",
                "Full-stack Project Portfolio",
                "Competitive Programming Enthusiast",
                "Open Source Contributor",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-emerald-500"></div>
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
