import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "PhysioMe - Physiotherapy Management System",
      description:
        "A comprehensive physiotherapy management system designed to streamline patient care and administrative workflows. Features real-time communication, appointment scheduling, and progress tracking capabilities.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      features: [
        "Patient-Physiotherapist Communication",
        "Appointment Scheduling System",
        "Progress Tracking & Analytics",
        "Administrative Dashboard",
        "Real-time Notifications",
      ],
      status: "Completed",
      statusColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      link: "#",
      github: "#",
      image: "🏥",
    },
    {
      title: "Job Portal Platform",
      description:
        "A modern job portal connecting job seekers with recruiters. Includes advanced filtering, resume management, application tracking, and comprehensive recruiter tools for efficient hiring processes.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      features: [
        "Advanced Job Search & Filters",
        "Resume Upload & Management",
        "Application Tracking System",
        "Recruiter Dashboard",
        "Email Notifications",
      ],
      status: "Completed",
      statusColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      link: "#",
      github: "#",
      image: "💼",
    },
    {
      title: "Thrive Together - Financial & Healthcare Platform",
      description:
        "An innovative platform developed during Odoo x MSU 2025 Hackathon, focusing on community wellness through integrated financial support and healthcare services with real-time collaboration features.",
      tech: ["React.js", "Python", "Odoo", "PostgreSQL"],
      features: [
        "Financial Support System",
        "Healthcare Service Integration",
        "Community Collaboration Tools",
        "Real-time Updates & Chat",
        "Resource Sharing Platform",
      ],
      status: "Hackathon Project",
      statusColor: "bg-blue-100 text-blue-700 border-blue-200",
      link: "#",
      github: "#",
      image: "🤝",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-8 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on, showcasing my skills
            in full-stack development and problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden"
            >
              <div className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Project Icon & Status */}
                  <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <span
                      className={`px-4 py-2 text-sm font-semibold rounded-full border ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm rounded-lg border border-blue-100 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                      >
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="lg:col-span-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Want to see more of my work?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            These are just a few highlights from my portfolio. Check out my
            GitHub for more projects and contributions.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
