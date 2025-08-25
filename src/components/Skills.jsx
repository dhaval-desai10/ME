import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C/C++", "JavaScript", "Python", "Java"],
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git/GitHub", "VS Code", "Postman", "Figma"],
    },
  ];

  const additionalSkills = [
    {
      category: "Databases",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      category: "Version Control",
      items: ["Git", "GitHub", "GitLab"],
    },
    {
      category: "Design Tools",
      items: ["Figma", "Adobe XD", "Canva"],
    },
    {
      category: "Development Tools",
      items: ["VS Code", "Postman", "Chrome DevTools"],
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-sm font-medium text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Additional Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSkills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
              >
                <h4 className="font-semibold text-slate-800 mb-4 text-center">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-center py-2 px-3 bg-slate-50 rounded-lg text-sm text-slate-600 hover:bg-slate-100 transition-colors duration-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Overview */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">
            Technology Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Frontend</h4>
              <p className="text-sm text-slate-600">React.js, HTML5, CSS3, Tailwind CSS</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Backend</h4>
              <p className="text-sm text-slate-600">Node.js, Express.js, MongoDB</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Tools</h4>
              <p className="text-sm text-slate-600">Git, VS Code, Postman, Figma</p>
            </div>
          </div>
        </div>

        {/* Professional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              Achievements
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span className="text-sm text-slate-600">250+ Problems solved on competitive programming platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span className="text-sm text-slate-600">CodeChef 3-star rating (1600+)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span className="text-sm text-slate-600">Hackathon participant - Odoo x MSU 2025</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span className="text-sm text-slate-600">Full-stack web development projects</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">📚</span>
              Currently Learning
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">📖</span>
                <span className="text-sm text-slate-600">Advanced React patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">📖</span>
                <span className="text-sm text-slate-600">DevOps and deployment strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">📖</span>
                <span className="text-sm text-slate-600">Machine Learning basics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">📖</span>
                <span className="text-sm text-slate-600">System design principles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
