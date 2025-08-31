import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "PhysioMe - Physiotherapy Management System",
      description:
        "A comprehensive physiotherapy management system designed to streamline patient care and administrative workflows.",
      shortDescription:
        "Healthcare management system for physiotherapy clinics with patient tracking and scheduling.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      features: [
        "Patient-Physiotherapist Communication",
        "Appointment Scheduling System",
        "Progress Tracking & Analytics",
        "Administrative Dashboard",
        "Real-time Notifications",
      ],
      status: "Completed",
      link: "#",
      github: "#",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQF29x-qI11JEQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708407949524?e=2147483647&v=beta&t=j63A4tBp4X7UvPIjUCYeU3LSD5FlZRk7lsM83lrW7Dg",
      category: "Healthcare",
    },
    {
      title: "Job Portal Platform",
      description:
        "A modern job portal connecting job seekers with recruiters. Includes advanced filtering and application tracking.",
      shortDescription:
        "Modern job portal with advanced search filters and application tracking system.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      features: [
        "Advanced Job Search & Filters",
        "Resume Upload & Management",
        "Application Tracking System",
        "Recruiter Dashboard",
        "Email Notifications",
      ],
      status: "Completed",
      link: "#",
      github: "#",
      image:
        "https://media.istockphoto.com/id/1455906418/photo/man-using-laptop-showing-online-job-search-career-search-ideas-recruitment-hr-search-form.jpg?s=612x612&w=0&k=20&c=HpIzbY_3drlZwAMAKMI9FMX-Xg3V-YTCO8apxFlrVrc=",
      category: "Business",
    },
    {
      title: "Thrive Together - Financial & Healthcare Platform",
      description:
        "An innovative platform developed during Odoo x MSU 2025 Hackathon, focusing on community wellness.",
      shortDescription:
        "Community wellness platform combining financial support with healthcare services.",
      tech: ["React.js", "Python", "Odoo", "PostgreSQL"],
      features: [
        "Financial Support System",
        "Healthcare Service Integration",
        "Community Collaboration Tools",
        "Real-time Updates & Chat",
        "Resource Sharing Platform",
      ],
      status: "Hackathon Project",
      link: "#",
      github: "#",
      image: "https://thrivelabs.ai/wp-content/uploads/2024/08/Untitled.jpg",
      category: "Social Impact",
    },
    {
      title: "ReWear – Community Clothing Exchange",
      description:
        "A web-based platform that enables users to exchange unused clothing through direct swaps or a point-based redemption system. The goal is to promote sustainable fashion and reduce textile waste by encouraging users to reuse wearable garments instead of discarding them.",
      shortDescription:
        "Sustainable fashion platform for clothing exchange with point-based redemption system.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        "User Authentication & Profile Management",
        "Direct Clothing Swaps & Point-based Redemption",
        "Item Listing with Image Gallery",
        "User Dashboard with Swap History",
        "Admin Moderation Panel",
        "Featured Items Carousel",
        "Item Detail Pages with Swap Requests",
        "Sustainable Fashion Analytics",
      ],
      status: "In Development",
      link: "#",
      github: "#",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=center",
      category: "Sustainability",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-12 sm:py-20 md:py-24">
          {/* Header Section */}
          <div
            className="mb-12 text-center sm:mb-16"
            style={{ marginBottom: "3rem" }}
          >
            <h2
              className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                marginBottom: "1.5rem",
              }}
            >
              My <span className="text-orange-400">Projects</span>
            </h2>
            <p
              className="max-w-3xl px-4 mx-auto text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl sm:max-w-4xl"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                maxWidth: "600px",
              }}
            >
              Here are some of the projects I've worked on, showcasing my skills
              in full-stack development
            </p>
          </div>

          {/* Projects Grid - Medium Sized Cards */}
          <div
            className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            style={{
              marginBottom: "3rem",
              maxWidth: "1200px",
              margin: "0 auto 3rem auto",
              gap: "1.5rem",
            }}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 border shadow-xl bg-slate-900/60 backdrop-blur-sm border-orange-600/30 hover:border-orange-500/50 rounded-2xl group hover:scale-105"
                style={{
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Project Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: "180px" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <Badge
                      className="px-3 py-1 text-xs font-medium text-orange-100 border bg-orange-800/90 border-orange-600/50 backdrop-blur-sm"
                      style={{
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.75rem",
                      }}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900/80 to-transparent">
                    <span
                      className="text-sm font-medium text-orange-300"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent
                  className="flex flex-col justify-between flex-1 p-4"
                  style={{
                    padding: "1rem",
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <h3
                      className="mb-2 text-lg font-bold text-orange-100 line-clamp-2"
                      style={{
                        fontSize: "1.125rem",
                        marginBottom: "0.5rem",
                        lineHeight: "1.3",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mb-3 text-sm text-gray-300 line-clamp-2"
                      style={{
                        fontSize: "0.875rem",
                        marginBottom: "0.75rem",
                        lineHeight: "1.4",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack - Show only 3 main techs */}
                    <div
                      className="flex flex-wrap gap-1 mb-4"
                      style={{ gap: "0.25rem", marginBottom: "1rem" }}
                    >
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="px-2 py-1 text-xs border bg-slate-800/60 border-slate-600/40 text-slate-200"
                          style={{
                            padding: "0.25rem 0.5rem",
                            fontSize: "0.7rem",
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          className="px-2 py-1 text-xs text-orange-200 border bg-orange-800/40 border-orange-600/50"
                          style={{
                            padding: "0.25rem 0.5rem",
                            fontSize: "0.7rem",
                          }}
                        >
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="w-full text-sm font-medium text-white transition-all duration-300 bg-orange-600 border-0 hover:bg-orange-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-0"
                    style={{
                      padding: "0.75rem 1rem",
                      fontSize: "0.875rem",
                      width: "100%",
                      outline: "none",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Details Modal */}
          {selectedProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                zIndex: "50",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
              }}
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="bg-slate-900 border border-orange-600/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                style={{
                  backgroundColor: "rgb(15 23 42)",
                  border: "1px solid rgba(234, 88, 12, 0.3)",
                  borderRadius: "1rem",
                  maxWidth: "56rem",
                  width: "100%",
                  maxHeight: "90vh",
                  overflowY: "auto",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div
                  className="relative p-6 border-b border-orange-600/20"
                  style={{
                    padding: "1.5rem",
                    borderBottom: "1px solid rgba(234, 88, 12, 0.2)",
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute p-2 text-gray-400 transition-all duration-300 rounded-lg top-4 right-4 hover:text-orange-300 hover:bg-orange-900/20 hover:scale-110 focus:outline-none focus:ring-0"
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      padding: "0.5rem",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    <FiX size={24} />
                  </button>

                  <div className="flex items-start gap-4 pr-12">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="object-cover w-20 h-20 rounded-lg"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        objectFit: "cover",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <div>
                      <h2
                        className="mb-2 text-2xl font-bold text-orange-100"
                        style={{
                          fontSize: "1.5rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-3">
                        <Badge
                          className="text-orange-100 border bg-orange-800/40 border-orange-600/50"
                          style={{ padding: "0.25rem 0.75rem" }}
                        >
                          {selectedProject.status}
                        </Badge>
                        <span className="text-sm text-orange-300">
                          {selectedProject.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6" style={{ padding: "1.5rem" }}>
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Left Column */}
                    <div>
                      <h3
                        className="mb-3 text-lg font-semibold text-orange-100"
                        style={{
                          fontSize: "1.125rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        Project Overview
                      </h3>
                      <p
                        className="mb-6 leading-relaxed text-gray-300"
                        style={{
                          lineHeight: "1.6",
                          marginBottom: "1.5rem",
                        }}
                      >
                        {selectedProject.description}
                      </p>

                      <h3
                        className="mb-3 text-lg font-semibold text-orange-100"
                        style={{
                          fontSize: "1.125rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        Technology Stack
                      </h3>
                      <div
                        className="flex flex-wrap gap-2 mb-6"
                        style={{ gap: "0.5rem", marginBottom: "1.5rem" }}
                      >
                        {selectedProject.tech.map((tech, index) => (
                          <Badge
                            key={index}
                            className="border bg-slate-800/60 border-slate-600/40 text-slate-200"
                            style={{ padding: "0.375rem 0.75rem" }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4" style={{ gap: "1rem" }}>
                        <Button
                          className="text-white transition-all duration-300 bg-orange-600 border-0 hover:bg-orange-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-0"
                          style={{
                            padding: "0.75rem 1.5rem",
                            outline: "none",
                            border: "none",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <FiExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          className="text-orange-100 transition-all duration-300 border-0 bg-slate-800/60 hover:bg-slate-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-0"
                          style={{
                            padding: "0.75rem 1.5rem",
                            outline: "none",
                            border: "none",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <FiGithub className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <h3
                        className="mb-3 text-lg font-semibold text-orange-100"
                        style={{
                          fontSize: "1.125rem",
                          marginBottom: "0.75rem",
                        }}
                      >
                        Key Features
                      </h3>
                      <div className="space-y-3" style={{ gap: "0.75rem" }}>
                        {selectedProject.features.map((feature, index) => (
                          <div
                            key={index}
                            className="p-4 transition-all duration-200 border rounded-lg bg-slate-800/50 border-slate-600/30 hover:bg-orange-800/20 hover:border-orange-600/40"
                            style={{ padding: "1rem" }}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  marginTop: "0.375rem",
                                }}
                              ></div>
                              <span
                                className="font-medium leading-relaxed text-slate-200"
                                style={{
                                  fontSize: "0.875rem",
                                  lineHeight: "1.5",
                                }}
                              >
                                {feature}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <Card
            className="text-center transition-all duration-300 border-2 bg-orange-900/20 backdrop-blur-sm border-orange-800/30 hover:bg-orange-900/30 hover:border-orange-700/50 rounded-xl"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <CardContent style={{ padding: "2rem" }}>
              <h3
                className="mb-4 text-2xl font-bold text-orange-100 md:text-3xl"
                style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
              >
                Want to see more of my work?
              </h3>
              <p
                className="max-w-2xl mx-auto mb-6 text-lg leading-relaxed text-gray-300"
                style={{
                  fontSize: "1rem",
                  marginBottom: "1.5rem",
                  maxWidth: "400px",
                }}
              >
                Check out my GitHub for more projects and contributions.
              </p>
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-orange-600 border-0 hover:bg-orange-700 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-0"
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  outline: "none",
                  border: "none",
                  boxShadow: "0 6px 10px -1px rgba(0, 0, 0, 0.15)",
                }}
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "0.75rem",
                  }}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
