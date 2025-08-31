import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const achievements = [
    {
      title: "Hackathon Participation",
      description:
        "Participated in Odoo x MSU 2025 Hackathon - 'Thrive Together' project",
      icon: "🏆",
    },
    {
      title: "Competitive Programming",
      description: "250+ problems solved on LeetCode and CodeChef platforms",
      icon: "🧩",
    },
    {
      title: "CodeChef Rating",
      description: "Achieved 1600+ rating with 3-star status",
      icon: "⭐",
    },
    {
      title: "Academic Excellence",
      description: "Maintaining 8.7+ CGPA in Computer Science Engineering",
      icon: "🎓",
    },
  ];

  const interests = [
    "Solving complex problems through elegant code",
    "Building applications that make a difference",
    "Competitive programming and algorithm optimization",
    "Learning new technologies and staying updated",
    "Contributing to open-source projects",
  ];

  const stats = [
    {
      value: "2+",
      label: "Years of Programming Experience",
      color: "text-orange-400",
    },
    {
      value: "5+",
      label: "Major Projects Completed",
      color: "text-orange-400",
    },
    { value: "10+", label: "Technologies Learned", color: "text-orange-400" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
          {/* Header */}
          <div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            style={{ marginBottom: "3rem" }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                marginBottom: "1.5rem",
              }}
            >
              About <span className="text-orange-400">Me</span>
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-4"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                maxWidth: "600px",
              }}
            >
              Get to know more about my journey, education, and passion for
              technology
            </p>
          </div>

          {/* Main Content - Responsive */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16"
            style={{
              gap: "2rem",
              marginBottom: "3rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* Personal Story */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <Card
                className="bg-slate-900/60 backdrop-blur-sm border border-orange-600/30 hover:border-orange-500/50 transition-all duration-300 rounded-2xl shadow-2xl"
                style={{ maxWidth: "420px", margin: "0 auto" }}
              >
                <CardHeader
                  style={{ padding: "1.5rem", paddingBottom: "1rem" }}
                >
                  <CardTitle
                    className="text-2xl font-bold text-orange-100 flex items-center"
                    style={{ gap: "0.75rem", fontSize: "1.25rem" }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>👨‍💻</span>
                    My Journey
                  </CardTitle>
                </CardHeader>
                <CardContent
                  className="text-gray-300 leading-relaxed"
                  style={{
                    padding: "0 1.5rem 1.5rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    I'm{" "}
                    <strong className="text-orange-100">Dhaval Desai</strong>, a
                    passionate Computer Science Engineering student at DEPSTAR
                    with a deep love for problem-solving and building innovative
                    solutions.
                  </p>
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    Currently maintaining a{" "}
                    <strong className="text-orange-200">CGPA of 8.7</strong>, I
                    believe in balancing academic excellence with practical
                    application. I've solved over{" "}
                    <strong className="text-orange-200">250+ problems</strong>{" "}
                    on competitive programming platforms and achieved a{" "}
                    <strong className="text-orange-200">
                      3-star rating on CodeChef
                    </strong>{" "}
                    with 1600+ rating.
                  </p>
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    My expertise lies in{" "}
                    <strong className="text-orange-200">
                      Full Stack Development
                    </strong>{" "}
                    using the MERN stack, where I enjoy bringing ideas to life
                    through clean, efficient code.
                  </p>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card
                className="bg-slate-900/60 backdrop-blur-sm border border-orange-600/30 hover:border-orange-500/50 transition-all duration-300 rounded-2xl shadow-2xl"
                style={{ maxWidth: "420px", margin: "0 auto" }}
              >
                <CardHeader
                  style={{ padding: "1.5rem", paddingBottom: "1rem" }}
                >
                  <CardTitle
                    className="text-xl font-bold text-orange-100"
                    style={{ fontSize: "1.125rem" }}
                  >
                    🎯 What Drives Me
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
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                        style={{ gap: "0.75rem" }}
                      >
                        <div
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 mt-2 flex-shrink-0"
                          style={{
                            width: "6px",
                            height: "6px",
                            marginTop: "0.5rem",
                          }}
                        ></div>
                        <span
                          className="text-gray-300 leading-relaxed"
                          style={{ fontSize: "0.9rem", lineHeight: "1.5" }}
                        >
                          {interest}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Education & Achievements */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Education */}
              <Card
                className="bg-slate-900/60 backdrop-blur-sm border border-orange-600/30 hover:border-orange-500/50 transition-all duration-300 rounded-2xl shadow-2xl"
                style={{ maxWidth: "420px", margin: "0 auto" }}
              >
                <CardHeader
                  style={{ padding: "1.5rem", paddingBottom: "1rem" }}
                >
                  <CardTitle
                    className="text-2xl font-bold text-orange-100 flex items-center"
                    style={{ gap: "0.75rem", fontSize: "1.25rem" }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>🎓</span>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent
                  style={{
                    padding: "0 1.5rem 1.5rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    className="border-l-4 border-orange-600/70 bg-gradient-to-r from-orange-800/20 to-transparent rounded-r-lg"
                    style={{ padding: "1rem", paddingLeft: "1rem" }}
                  >
                    <h4
                      className="font-semibold text-orange-100"
                      style={{ marginBottom: "0.375rem", fontSize: "1rem" }}
                    >
                      Computer Science and Engineering
                    </h4>
                    <p
                      className="text-gray-300"
                      style={{ marginBottom: "0.375rem", fontSize: "0.875rem" }}
                    >
                      Devang Patel Institute of Advance Technology and Research
                      (DEPSTAR)
                    </p>
                    <p
                      className="text-sm text-gray-400"
                      style={{ fontSize: "0.8rem" }}
                    >
                      2023 - 2027 • CGPA: 8.7
                    </p>
                  </div>

                  <div
                    className="border-l-4 border-orange-500/70 bg-gradient-to-r from-orange-700/20 to-transparent rounded-r-lg"
                    style={{ padding: "1rem", paddingLeft: "1rem" }}
                  >
                    <h4
                      className="font-semibold text-orange-100"
                      style={{ marginBottom: "0.375rem", fontSize: "1rem" }}
                    >
                      Higher Secondary (XII - GSEB)
                    </h4>
                    <p
                      className="text-gray-300"
                      style={{ marginBottom: "0.375rem", fontSize: "0.875rem" }}
                    >
                      Sardar Patel Educational Institute
                    </p>
                    <p
                      className="text-sm text-gray-400"
                      style={{ fontSize: "0.8rem" }}
                    >
                      2023 • 93.31%
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card
                className="bg-slate-900/60 backdrop-blur-sm border border-orange-600/30 hover:border-orange-500/50 transition-all duration-300 rounded-2xl shadow-2xl"
                style={{ maxWidth: "420px", margin: "0 auto" }}
              >
                <CardHeader
                  style={{ padding: "1.5rem", paddingBottom: "1rem" }}
                >
                  <CardTitle
                    className="text-2xl font-bold text-orange-100 flex items-center"
                    style={{ gap: "0.75rem", fontSize: "1.25rem" }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>🏆</span>
                    Achievements
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
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-3 bg-gradient-to-r from-slate-800/40 to-slate-900/40 border border-slate-600/30 rounded-lg hover:from-orange-800/30 hover:to-orange-900/30 hover:border-orange-600/50 transition-all duration-200"
                        style={{ gap: "0.75rem", padding: "0.75rem" }}
                      >
                        <span
                          className="text-xl flex-shrink-0 mt-1"
                          style={{
                            fontSize: "1.125rem",
                            marginTop: "0.125rem",
                          }}
                        >
                          {achievement.icon}
                        </span>
                        <div>
                          <p
                            className="font-medium text-orange-100 mb-1"
                            style={{
                              marginBottom: "0.25rem",
                              fontSize: "0.9rem",
                            }}
                          >
                            {achievement.title}
                          </p>
                          <p
                            className="text-sm text-gray-300"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <Card
            className="bg-orange-900/20 backdrop-blur-sm border-2 border-orange-800/30 hover:bg-orange-900/30 hover:border-orange-700/50 transition-all duration-300 rounded-xl text-center"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            <CardHeader style={{ padding: "1.5rem", paddingBottom: "1rem" }}>
              <CardTitle
                className="text-2xl md:text-3xl font-bold text-orange-100 mb-4"
                style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
              >
                ⚡ Quick Facts About Me
              </CardTitle>
            </CardHeader>
            <CardContent style={{ padding: "0 1.5rem 1.5rem 1.5rem" }}>
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                style={{ gap: "1.5rem" }}
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-600/30 rounded-xl hover:from-orange-800/30 hover:to-orange-900/30 hover:border-orange-600/50 transition-all duration-300 group"
                    style={{ padding: "1.25rem" }}
                  >
                    <div
                      className={`text-3xl md:text-4xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                      style={{ fontSize: "2rem", marginBottom: "0.75rem" }}
                    >
                      {stat.value}
                    </div>
                    <p
                      className="text-sm md:text-base text-gray-300 font-medium leading-relaxed"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
