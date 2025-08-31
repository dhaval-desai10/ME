import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./ui/AnimatedSection";
import AnimatedCard from "./ui/AnimatedCard";
import AnimatedHeading from "./ui/AnimatedHeading";
import StaggeredContainer from "./ui/StaggeredContainer";
import AnimatedContainer from "./ui/AnimatedContainer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "dhavaldesai7000@gmail.com",
      href: "mailto:dhavaldesai7000@gmail.com",
      bgColor: "from-red-800/40 to-red-900/40",
      borderColor: "border-red-600/30",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "(+91) 9016159449",
      href: "tel:+919016159449",
      bgColor: "from-green-800/40 to-green-900/40",
      borderColor: "border-green-600/30",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Gujarat, India",
      href: "#",
      bgColor: "from-slate-800/40 to-slate-900/40",
      borderColor: "border-slate-600/30",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "https://www.linkedin.com/in/dhaval-desai-82122028a/",
      color: "text-blue-100",
      bg: "from-blue-800/40 to-blue-900/40",
      border: "border-blue-600/30",
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: "https://github.com/dhaval-desai10",
      color: "text-slate-100",
      bg: "from-slate-700/40 to-slate-800/40",
      border: "border-slate-600/30",
    },
    {
      name: "CodeChef",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.5 2L7.5 6l4 4-4 4 4 4h4l2-2L12 12l5.5-5.5L20 6l-2-2L13.5 6h-2L11.5 2z" />
        </svg>
      ),
      href: "https://www.codechef.com/users/dhaval_desai",
      color: "text-orange-100",
      bg: "from-orange-800/40 to-orange-900/40",
      border: "border-orange-600/30",
    },
    {
      name: "LeetCode",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
      href: "https://leetcode.com/u/Dhaval_Desai_dd/",
      color: "text-yellow-100",
      bg: "from-yellow-800/40 to-yellow-900/40",
      border: "border-yellow-600/30",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-12 sm:py-20 md:py-24">
          {/* Header */}
          <div className="mb-12 text-center sm:mb-16 md:mb-20">
            <AnimatedHeading
              level="h2"
              animation="fadeUp"
              delay={0.1}
              style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Get In <span className="text-orange-400">Touch</span>
            </AnimatedHeading>
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <p
                className="max-w-3xl px-4 mx-auto text-base leading-relaxed text-gray-300 sm:text-lg"
                style={{
                  fontSize: "1.125rem",
                  maxWidth: "600px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology
              </p>
            </AnimatedSection>
          </div>

          <AnimatedContainer stagger={0.2}>
            <div
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 sm:gap-12"
              style={{ gap: "2rem", alignItems: "stretch" }}
            >
              {/* Contact Information */}
              <div
                className="space-y-8"
                style={{
                  gap: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Contact Cards */}
                <AnimatedCard delay={0.1}>
                  <Card className="transition-all duration-300 border-2 bg-orange-900/20 backdrop-blur-sm border-orange-800/30 hover:bg-orange-900/30 hover:border-orange-700/50 rounded-xl">
                    <CardHeader
                      style={{ padding: "1.25rem", paddingBottom: "0.5rem" }}
                    >
                      <CardTitle
                        className="text-xl font-bold text-orange-100"
                        style={{
                          fontSize: "1.125rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        📞 Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent
                      className="space-y-6"
                      style={{
                        padding: "0 1.25rem 1.25rem 1.25rem",
                        gap: "0.75rem",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {contactInfo.map((contact, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4"
                          style={{
                            padding: "0.875rem",
                            backgroundColor: "rgba(51, 65, 85, 0.3)",
                            borderRadius: "0.5rem",
                            gap: "0.875rem",
                          }}
                        >
                          <div
                            className={`w-14 h-14 bg-gradient-to-br ${contact.bgColor} border ${contact.borderColor} rounded-xl flex items-center justify-center text-2xl`}
                            style={{
                              width: "2.5rem",
                              height: "2.5rem",
                              fontSize: "1.125rem",
                            }}
                          >
                            {contact.icon}
                          </div>
                          <div style={{ lineHeight: "1.4" }}>
                            <p
                              className="mb-1 font-medium text-orange-100"
                              style={{
                                fontSize: "0.9rem",
                                marginBottom: "0.25rem",
                                fontWeight: "600",
                              }}
                            >
                              {contact.label}
                            </p>
                            <a
                              href={contact.href}
                              className="text-gray-300 transition-colors hover:text-orange-300"
                              style={{ fontSize: "0.85rem", lineHeight: "1.3" }}
                            >
                              {contact.value}
                            </a>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </AnimatedCard>

                {/* Social Links */}
                <AnimatedCard delay={0.3}>
                  <Card className="transition-all duration-300 border-2 bg-orange-900/20 backdrop-blur-sm border-orange-800/30 hover:bg-orange-900/30 hover:border-orange-700/50 rounded-xl">
                    <CardHeader
                      style={{ padding: "1.25rem", paddingBottom: "0.5rem" }}
                    >
                      <CardTitle
                        className="text-xl font-bold text-orange-100"
                        style={{
                          fontSize: "1.125rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        🔗 Connect With Me
                      </CardTitle>
                    </CardHeader>
                    <CardContent
                      style={{ padding: "0 1.25rem 1.25rem 1.25rem" }}
                    >
                      <div
                        className="grid grid-cols-2 gap-4"
                        style={{ gap: "0.875rem" }}
                      >
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 p-4 bg-gradient-to-br ${social.bg} border ${social.border} rounded-lg hover:scale-105 hover:from-orange-800/30 hover:to-orange-900/30 hover:border-orange-600/50 transition-all duration-300 group`}
                            style={{
                              padding: "0.875rem",
                              gap: "0.5rem",
                              borderRadius: "0.5rem",
                            }}
                          >
                            <div
                              className={`${social.color} group-hover:text-orange-100 transition-colors`}
                              style={{ fontSize: "1.125rem" }}
                            >
                              {social.icon}
                            </div>
                            <span
                              className="text-sm font-medium text-gray-300 transition-colors group-hover:text-orange-100"
                              style={{ fontSize: "0.8rem", fontWeight: "500" }}
                            >
                              {social.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </div>

              {/* Contact Form */}
              <AnimatedCard delay={0.5}>
                <Card className="transition-all duration-300 border-2 bg-orange-900/20 backdrop-blur-sm border-orange-800/30 hover:bg-orange-900/30 hover:border-orange-700/50 rounded-xl h-full flex flex-col">
                  <CardHeader
                    style={{ padding: "1.25rem", paddingBottom: "0.5rem" }}
                  >
                    <CardTitle
                      className="text-xl font-bold text-orange-100"
                      style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}
                    >
                      📧 Send Me a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    style={{
                      padding: "0 1.25rem 1.25rem 1.25rem",
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 flex-1 flex flex-col"
                      style={{
                        gap: "0.75rem",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <div style={{ marginBottom: "0.75rem" }}>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-orange-100"
                          style={{
                            fontSize: "0.85rem",
                            marginBottom: "0.3rem",
                            fontWeight: "500",
                          }}
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 text-gray-200 placeholder-gray-400 transition-all duration-300 border rounded-lg bg-slate-800/40 border-slate-600/30 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="Enter your full name"
                          style={{ padding: "0.5rem", fontSize: "0.85rem" }}
                        />
                      </div>

                      <div style={{ marginBottom: "0.75rem" }}>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-orange-100"
                          style={{
                            fontSize: "0.85rem",
                            marginBottom: "0.3rem",
                            fontWeight: "500",
                          }}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 text-gray-200 placeholder-gray-400 transition-all duration-300 border rounded-lg bg-slate-800/40 border-slate-600/30 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="Enter your email address"
                          style={{ padding: "0.5rem", fontSize: "0.85rem" }}
                        />
                      </div>

                      <div style={{ marginBottom: "0.75rem" }}>
                        <label
                          htmlFor="subject"
                          className="block mb-2 text-sm font-medium text-orange-100"
                          style={{
                            fontSize: "0.85rem",
                            marginBottom: "0.3rem",
                            fontWeight: "500",
                          }}
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 text-gray-200 placeholder-gray-400 transition-all duration-300 border rounded-lg bg-slate-800/40 border-slate-600/30 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="What's this about?"
                          style={{ padding: "0.5rem", fontSize: "0.85rem" }}
                        />
                      </div>

                      <div style={{ marginBottom: "1rem", flex: "1" }}>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-orange-100"
                          style={{
                            fontSize: "0.85rem",
                            marginBottom: "0.3rem",
                            fontWeight: "500",
                          }}
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-3 py-2 text-gray-200 placeholder-gray-400 transition-all duration-300 border rounded-lg resize-none bg-slate-800/40 border-slate-600/30 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="Tell me about your project or just say hello!"
                          style={{
                            padding: "0.5rem",
                            fontSize: "0.85rem",
                            minHeight: "4rem",
                            flex: "1",
                          }}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="flex items-center justify-center w-full gap-2 px-4 py-3 text-base font-semibold text-white transition-all duration-300 bg-orange-600 border-2 border-orange-600 hover:bg-orange-700 hover:border-orange-700 mt-auto"
                        style={{
                          padding: "0.75rem 1rem",
                          fontSize: "0.9rem",
                          gap: "0.4rem",
                          marginTop: "auto",
                        }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ width: "1rem", height: "1rem" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </AnimatedContainer>

          {/* Quick Response Note */}
          <AnimatedSection animation="fadeUp" delay={0.8}>
            <Card
              className="mt-16 text-center transition-all duration-300 border-2 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border-slate-600/30 hover:from-orange-800/30 hover:to-orange-900/30 hover:border-orange-600/50 rounded-xl"
              style={{ marginTop: "2rem" }}
            >
              <CardContent className="p-8" style={{ padding: "1.25rem" }}>
                <p
                  className="text-lg leading-relaxed text-gray-300"
                  style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
                >
                  💬{" "}
                  <strong className="text-orange-100">Quick Response:</strong> I
                  typically respond to messages within 24 hours. For urgent
                  matters, feel free to reach out via phone or WhatsApp.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
