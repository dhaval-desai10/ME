import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import AnimatedContainer from "@/components/ui/AnimatedContainer";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C/C++", "JavaScript", "Python", "Java"],
      description: "Core programming languages I work with",
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
      description: "Building beautiful user interfaces",
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
      description: "Server-side development and databases",
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git/GitHub", "VS Code", "Postman", "Figma"],
      description: "Development tools and workflow",
    },
  ];

  const achievements = [
    {
      number: "250+",
      label: "Problems Solved",
      desc: "LeetCode & CodeChef",
      icon: "💻",
    },
    {
      number: "1600+",
      label: "CodeChef Rating",
      desc: "3-Star Coder",
      icon: "⭐",
    },
    { number: "8.7", label: "Current CGPA", desc: "CSE @ DEPSTAR", icon: "🎓" },
  ];

  const focusAreas = [
    "Advanced React Patterns",
    "DevOps & Cloud Deployment",
    "System Design & Scalability",
    "Machine Learning Fundamentals",
  ];

  const highlights = [
    "Hackathon Participant - Odoo x MSU 2025",
    "Full-stack Project Portfolio",
    "Competitive Programming Enthusiast",
    "Open Source Contributor",
  ];

  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center">
            <AnimatedHeading
              level="h2"
              animation="fadeLeft"
              className="mb-6 sm:mb-8 text-3xl font-bold text-white"
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Skills & <span className="text-orange-400">Expertise</span>
            </AnimatedHeading>
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <p
                className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-gray-300 px-4"
                style={{
                  fontSize: "1.125rem",
                  maxWidth: "600px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                Technologies and tools I use to build modern, scalable
                applications
              </p>
            </AnimatedSection>
          </div>

          {/* Skills Grid - Responsive with Staggered Animation */}
          <AnimatedContainer staggerDelay={0.2}>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
              style={{ gap: "1.5rem", marginBottom: "3rem" }}
            >
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 border shadow-2xl bg-slate-900/60 backdrop-blur-sm border-orange-600/30 hover:border-orange-500/50 rounded-2xl group"
                  style={{
                    padding: "1.5rem",
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  <CardHeader
                    style={{ padding: "1rem", paddingBottom: "0.75rem" }}
                  >
                    <div className="flex items-center" style={{ gap: "1rem" }}>
                      <div
                        className="shadow-lg rounded-2xl bg-gradient-to-br from-orange-500/90 to-orange-600/90"
                        style={{
                          padding: "0.75rem",
                          minWidth: "50px",
                          minHeight: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: "1.5rem" }}>
                          {category.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <CardTitle
                          className="text-2xl font-bold text-orange-100 transition-colors group-hover:text-orange-200"
                          style={{
                            marginBottom: "0.5rem",
                            fontSize: "1.125rem",
                            lineHeight: "1.4",
                          }}
                        >
                          {category.title}
                        </CardTitle>
                        <p
                          className="text-base leading-relaxed text-gray-400"
                          style={{ fontSize: "0.875rem", lineHeight: "1.5" }}
                        >
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent style={{ padding: "0 1rem 1rem 1rem" }}>
                    <div
                      className="grid grid-cols-2"
                      style={{ gap: "0.75rem" }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="transition-all duration-300 border rounded-xl bg-slate-800/50 border-slate-600/40 hover:bg-orange-800/30 hover:border-orange-600/50 hover:shadow-lg group/skill"
                          style={{ padding: "0.75rem" }}
                        >
                          <div
                            className="flex items-center"
                            style={{ gap: "0.5rem" }}
                          >
                            <div
                              className="w-3 h-3 rounded-full shadow-sm bg-gradient-to-r from-orange-400 to-orange-500"
                              style={{ width: "8px", height: "8px" }}
                            ></div>
                            <span
                              className="text-sm font-medium transition-colors text-slate-200 group-hover/skill:text-orange-100"
                              style={{ fontSize: "0.8rem" }}
                            >
                              {skill}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedContainer>

          {/* Achievements */}
          <div style={{ marginBottom: "4rem" }}>
            <AnimatedHeading
              level="h3"
              animation="fadeRight"
              className="text-3xl font-bold text-center text-white"
              style={{ marginBottom: "2rem", fontSize: "1.75rem" }}
            >
              Achievements
            </AnimatedHeading>
            <AnimatedContainer staggerDelay={0.15}>
              <div
                className="grid grid-cols-1 md:grid-cols-3"
                style={{ gap: "1.5rem", maxWidth: "900px", margin: "0 auto" }}
              >
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="text-center transition-all duration-300 border shadow-2xl bg-slate-900/60 backdrop-blur-sm border-orange-600/30 hover:border-orange-500/50 rounded-2xl group"
                    style={{ maxWidth: "280px", margin: "0 auto" }}
                  >
                    <CardContent style={{ padding: "1.5rem" }}>
                      <div
                        className="flex flex-col items-center"
                        style={{ gap: "1rem" }}
                      >
                        <div
                          className="transition-transform duration-300 shadow-lg rounded-2xl bg-gradient-to-br from-orange-500/90 to-orange-600/90 group-hover:scale-105"
                          style={{
                            padding: "1rem",
                            width: "50px",
                            height: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span style={{ fontSize: "1.5rem" }}>
                            {achievement.icon}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                          }}
                        >
                          <div
                            className="text-4xl font-bold text-orange-400 transition-colors group-hover:text-orange-300"
                            style={{ fontSize: "2rem" }}
                          >
                            {achievement.number}
                          </div>
                          <div
                            className="text-lg font-semibold text-orange-100"
                            style={{ fontSize: "1rem" }}
                          >
                            {achievement.label}
                          </div>
                          <div
                            className="text-sm text-gray-400 border rounded-lg bg-slate-800/50 border-slate-700/30"
                            style={{
                              padding: "0.375rem 0.75rem",
                              fontSize: "0.8rem",
                            }}
                          >
                            {achievement.desc}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedContainer>
          </div>

          {/* Learning Journey */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div
              className="grid grid-cols-1 gap-8 lg:grid-cols-2"
              style={{ gap: "1.5rem", maxWidth: "800px", margin: "0 auto" }}
            >
              {/* Current Focus */}
              <AnimatedCard delay={0.1}>
                <Card
                  className="transition-all duration-300 border shadow-2xl bg-slate-900/60 backdrop-blur-sm border-orange-600/30 hover:border-orange-500/50 rounded-2xl group"
                  style={{ maxWidth: "380px", margin: "0 auto" }}
                >
                  <CardHeader
                    style={{ padding: "1.5rem", paddingBottom: "1rem" }}
                  >
                    <CardTitle
                      className="flex items-center gap-4 text-2xl font-bold text-orange-100 transition-colors group-hover:text-orange-200"
                      style={{ fontSize: "1.25rem", gap: "0.75rem" }}
                    >
                      <div
                        className="p-3 shadow-lg rounded-2xl bg-gradient-to-br from-orange-500/90 to-orange-600/90"
                        style={{
                          padding: "0.75rem",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: "1.25rem" }}>🎯</span>
                      </div>
                      Current Focus
                    </CardTitle>
                  </CardHeader>
                  <CardContent style={{ padding: "0 1.5rem 1.5rem 1.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                      }}
                    >
                      {focusAreas.map((item, index) => (
                        <div
                          key={index}
                          className="p-4 transition-all duration-300 border rounded-xl bg-slate-800/50 border-slate-600/40 hover:bg-orange-800/30 hover:border-orange-600/50 hover:shadow-lg group/item"
                          style={{ padding: "0.75rem" }}
                        >
                          <div
                            className="flex items-center gap-3"
                            style={{ gap: "0.5rem" }}
                          >
                            <div
                              className="flex-shrink-0 w-3 h-3 rounded-full shadow-sm bg-gradient-to-r from-orange-400 to-orange-500"
                              style={{ width: "8px", height: "8px" }}
                            ></div>
                            <span
                              className="text-sm font-medium transition-colors text-slate-200 group-hover/item:text-orange-100"
                              style={{ fontSize: "0.875rem" }}
                            >
                              {item}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>

              {/* Highlights */}
              <AnimatedCard delay={0.3}>
                <Card
                  className="transition-all duration-300 border shadow-2xl bg-slate-900/60 backdrop-blur-sm border-orange-600/30 hover:border-orange-500/50 rounded-2xl group"
                  style={{ maxWidth: "380px", margin: "0 auto" }}
                >
                  <CardHeader
                    style={{ padding: "1.5rem", paddingBottom: "1rem" }}
                  >
                    <CardTitle
                      className="flex items-center gap-4 text-2xl font-bold text-orange-100 transition-colors group-hover:text-orange-200"
                      style={{ fontSize: "1.25rem", gap: "0.75rem" }}
                    >
                      <div
                        className="p-3 shadow-lg rounded-2xl bg-gradient-to-br from-orange-500/90 to-orange-600/90"
                        style={{
                          padding: "0.75rem",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: "1.25rem" }}>🏆</span>
                      </div>
                      Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent style={{ padding: "0 1.5rem 1.5rem 1.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                      }}
                    >
                      {highlights.map((item, index) => (
                        <div
                          key={index}
                          className="p-4 transition-all duration-300 border rounded-xl bg-slate-800/50 border-slate-600/40 hover:bg-orange-800/30 hover:border-orange-600/50 hover:shadow-lg group/item"
                          style={{ padding: "0.75rem" }}
                        >
                          <div
                            className="flex items-center gap-3"
                            style={{ gap: "0.5rem" }}
                          >
                            <div
                              className="flex-shrink-0 w-3 h-3 rounded-full shadow-sm bg-gradient-to-r from-orange-400 to-orange-500"
                              style={{ width: "8px", height: "8px" }}
                            ></div>
                            <span
                              className="text-sm font-medium transition-colors text-slate-200 group-hover/item:text-orange-100"
                              style={{ fontSize: "0.875rem" }}
                            >
                              {item}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Skills;
