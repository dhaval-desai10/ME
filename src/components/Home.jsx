import React, { useState, useEffect, useRef } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCard from "@/components/ui/AnimatedCard";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import PageTransition from "@/components/ui/PageTransition";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function Home() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Page load animation for heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }

    // Check if elements exist
    if (!textRef.current || !cursorRef.current) return;

    // Create timeline with infinite repeat
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.5,
      onComplete: () => {
        console.log("Animation cycle completed");
      },
    });

    // Reset text to empty state first
    gsap.set(textRef.current, { text: "" });

    // Typing animation sequence
    tl.to(textRef.current, {
      duration: 0.05,
      text: "",
      ease: "none",
    })
      .to(textRef.current, {
        duration: 3,
        text: "Welcome to my learning journey",
        ease: "none",
      })
      .to({}, { duration: 2 }); // Pause before repeat

    // Separate cursor blinking animation
    const cursorTl = gsap.timeline({ repeat: -1, yoyo: true });
    cursorTl.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
      cursorTl.kill();
    };
  }, []);

  return (
    <PageTransition className="relative min-h-screen">
      {/* Scrollable Content Container */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen">
        {/* Main Content - Responsive and Properly Structured */}
        <div
          className="px-4 py-8 mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-12 sm:py-12 md:py-16 lg:py-20"
          style={{
            maxWidth: "1200px",
            padding: "2rem 1rem",
            "@media (min-width: 640px)": { padding: "2.5rem 1.5rem" },
            "@media (min-width: 768px)": { padding: "3rem 2rem" },
            "@media (min-width: 1024px)": { padding: "3rem 3rem" },
          }}
        >
          {/* GSAP Typing Animation Welcome Message */}
          <AnimatedSection animation="fadeUp" delay={0.8}>
            <div className="mb-6 text-center sm:mb-8 md:mb-10">
              <p
                className="mb-4 text-xl font-light text-orange-300 sm:text-2xl md:text-3xl lg:text-4xl sm:mb-6 md:mb-8"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  marginBottom: "1.5rem",
                  minHeight: "3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "300",
                }}
              >
                <span ref={textRef}></span>
                <span
                  ref={cursorRef}
                  style={{
                    color: "#fb923c",
                    paddingLeft: "4px",
                    fontSize: "inherit",
                  }}
                >
                  |
                </span>
              </p>

              {/* Sanskrit Sloka Section */}
              <div
                className="max-w-4xl p-6 mx-auto mt-8 border rounded-2xl bg-gradient-to-r from-orange-900/10 to-orange-800/10 backdrop-blur-sm border-orange-800/20"
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  maxWidth: "800px",
                }}
              >
                {/* Sanskrit Text Only */}
                <div className="text-center">
                  <p
                    className="mb-2 text-lg font-medium text-orange-200 sm:text-xl md:text-2xl"
                    style={{
                      fontSize: "clamp(1rem, 2.5vw, 1.375rem)",
                      fontFamily: "serif",
                      lineHeight: "1.6",
                      marginBottom: "0.5rem",
                    }}
                  >
                    कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
                  </p>
                  <p
                    className="text-lg font-medium text-orange-200 sm:text-xl md:text-2xl"
                    style={{
                      fontSize: "clamp(1rem, 2.5vw, 1.375rem)",
                      fontFamily: "serif",
                      lineHeight: "1.6",
                    }}
                  >
                    मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Hero Section with Better Responsive Spacing */}
          <div
            className="mb-12 space-y-8 text-center sm:space-y-12 md:space-y-16 sm:mb-16 md:mb-20"
            style={{ marginBottom: "2rem" }}
          >
            {/* Status Badge */}
            <AnimatedSection animation="fadeDown" delay={1.2}>
              <div
                className="flex justify-center mb-6 sm:mb-8"
                style={{ marginBottom: "1.5rem" }}
              >
                <Badge
                  className="px-4 py-2 text-sm font-medium text-orange-100 transition-colors rounded-full bg-orange-900/30 border-orange-800/50 sm:px-6 md:px-8 sm:py-3 sm:text-base hover:bg-orange-900/40"
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  }}
                >
                  <div
                    className="w-2 h-2 mr-2 bg-green-500 rounded-full sm:w-3 sm:h-3 animate-pulse sm:mr-3 md:mr-4"
                    style={{
                      width: "8px",
                      height: "8px",
                      marginRight: "0.5rem",
                    }}
                  ></div>
                  Available for work
                </Badge>
              </div>
            </AnimatedSection>

            {/* Main Heading with Better Responsive Sizing */}
            <div
              ref={headingRef}
              className="space-y-4 sm:space-y-6 md:space-y-8"
              style={{ marginBottom: "1.5rem" }}
            >
              <h1
                className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 5rem)",
                  lineHeight: "1.05",
                  fontWeight: "700",
                }}
              >
                Hi, I'm <span className="text-orange-400">Dhaval</span>
              </h1>
            </div>

            {/* Subtitle Section with Better Centering */}
            <AnimatedSection animation="fadeUp" delay={1.6}>
              <div
                className="max-w-2xl mx-auto space-y-4 text-center sm:space-y-6 sm:max-w-3xl md:max-w-4xl"
                style={{
                  maxWidth: "700px",
                  gap: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 auto",
                }}
              >
                <p
                  className="text-xl font-light sm:text-2xl md:text-3xl text-orange-100/90"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                    fontWeight: "300",
                  }}
                >
                  Full Stack Developer
                </p>

                <p
                  className="max-w-xl px-4 mx-auto text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl sm:max-w-2xl md:max-w-3xl"
                  style={{
                    fontSize: "clamp(1.125rem, 3vw, 1.375rem)",
                    maxWidth: "600px",
                    padding: "0 2rem",
                    lineHeight: "1.6",
                    margin: "0 auto",
                  }}
                >
                  Creating beautiful and functional web experiences with modern
                  technologies
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Action Buttons with Responsive Design */}
          <AnimatedSection animation="fadeUp" delay={2.0}>
            <div
              className="flex flex-col justify-center gap-4 mb-8 sm:flex-row sm:gap-6 md:gap-8 sm:mb-12 md:mb-16"
              style={{
                marginBottom: "2rem",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <Button
                size="lg"
                className="w-full px-8 py-3 text-base font-semibold text-white transition-all duration-300 transform bg-orange-600 shadow-lg hover:bg-orange-700 sm:px-12 md:px-16 sm:py-4 md:py-6 sm:text-lg rounded-xl hover:shadow-xl hover:scale-105 sm:w-auto focus:outline-none focus:ring-0 border-0"
                style={{
                  padding: "0.875rem 1.5rem",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  maxWidth: "280px",
                  outline: "none",
                  border: "none",
                }}
              >
                <span
                  className="flex items-center justify-center gap-2 sm:gap-3"
                  style={{ gap: "0.5rem" }}
                >
                  View My Work
                  <FiArrowDown
                    className="w-4 h-4 sm:w-5 sm:h-5 rotate-[-90deg]"
                    style={{ width: "16px", height: "16px" }}
                  />
                </span>
              </Button>

              <Button
                size="lg"
                className="w-full px-8 py-3 text-base font-semibold text-orange-100 transition-all duration-300 transform bg-slate-800/60 hover:bg-slate-700 sm:px-12 md:px-16 sm:py-4 md:py-6 sm:text-lg rounded-xl hover:scale-105 sm:w-auto focus:outline-none focus:ring-0 border-0"
                style={{
                  padding: "0.875rem 1.5rem",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  maxWidth: "280px",
                  outline: "none",
                  border: "none",
                }}
              >
                Get in Touch
              </Button>
            </div>
          </AnimatedSection>

          {/* Social Links with Responsive Sizing */}
          <AnimatedSection animation="fadeUp" delay={2.4}>
            <div
              className="flex justify-center gap-6 mb-8 sm:gap-8 md:gap-12 lg:gap-16 sm:mb-12 md:mb-16"
              style={{
                marginBottom: "2rem",
                gap: "1.5rem",
              }}
            >
              <a
                href="#"
                className="p-3 text-gray-400 transition-all duration-300 transform border border-transparent sm:p-4 md:p-6 hover:text-orange-300 hover:scale-110 rounded-xl hover:bg-orange-900/20 hover:border-orange-800/30"
                title="LinkedIn"
                style={{ padding: "0.75rem" }}
              >
                <FiLinkedin size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
              <a
                href="#"
                className="p-3 text-gray-400 transition-all duration-300 transform border border-transparent sm:p-4 md:p-6 hover:text-orange-300 hover:scale-110 rounded-xl hover:bg-orange-900/20 hover:border-orange-800/30"
                title="GitHub"
                style={{ padding: "0.75rem" }}
              >
                <FiGithub size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
              <a
                href="mailto:dhavaldesai7000@gmail.com"
                className="p-3 text-gray-400 transition-all duration-300 transform border border-transparent sm:p-4 md:p-6 hover:text-orange-300 hover:scale-110 rounded-xl hover:bg-orange-900/20 hover:border-orange-800/30"
                title="Email"
                style={{ padding: "0.75rem" }}
              >
                <FiMail size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
            </div>
          </AnimatedSection>

          {/* Info Cards - Perfectly Centered Cards */}
          <AnimatedContainer staggerDelay={0.15}>
            <div
              className="flex justify-center w-full mb-8 sm:mb-12 md:mb-16"
              style={{
                marginBottom: "2rem",
              }}
            >
              <div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8"
                style={{
                  gap: "1rem",
                  maxWidth: "720px",
                  width: "100%",
                  justifyItems: "center",
                  display: "grid",
                }}
              >
                <Card
                  className="w-full transition-all duration-300 border-2 bg-orange-900/20 backdrop-blur-sm border-orange-800/30 hover:bg-orange-900/30 hover:border-orange-700/50 group rounded-xl"
                  style={{
                    padding: "0.75rem",
                    aspectRatio: "5/4",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    maxHeight: "140px",
                    maxWidth: "220px",
                    minHeight: "120px",
                    width: "100%",
                  }}
                >
                  <CardHeader
                    className="px-3 pt-2 pb-1"
                    style={{
                      padding: "0.5rem 0.75rem 0.25rem 0.75rem",
                      textAlign: "center",
                    }}
                  >
                    <CardTitle
                      className="text-base font-semibold text-orange-100 sm:text-lg"
                      style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
                    >
                      Computer Science
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className="px-3 pt-0 pb-2"
                    style={{
                      padding: "0 0.75rem 0.5rem 0.75rem",
                      textAlign: "center",
                    }}
                  >
                    <p
                      className="text-sm leading-relaxed text-gray-300"
                      style={{
                        fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)",
                        lineHeight: "1.3",
                      }}
                    >
                      Student at DEPSTAR, Gujarat
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="w-full transition-all duration-300 border-2 bg-orange-900/20 backdrop-blur-sm border-orange-800/30 hover:bg-orange-900/30 hover:border-orange-700/50 group rounded-xl"
                  style={{
                    padding: "0.75rem",
                    aspectRatio: "5/4",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    maxHeight: "140px",
                    maxWidth: "220px",
                    minHeight: "120px",
                    width: "100%",
                  }}
                >
                  <CardHeader
                    className="px-3 pt-2 pb-1"
                    style={{
                      padding: "0.5rem 0.75rem 0.25rem 0.75rem",
                      textAlign: "center",
                    }}
                  >
                    <CardTitle
                      className="text-base font-semibold text-orange-100 sm:text-lg"
                      style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
                    >
                      Full Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className="px-3 pt-0 pb-2"
                    style={{
                      padding: "0 0.75rem 0.5rem 0.75rem",
                      textAlign: "center",
                    }}
                  >
                    <p
                      className="text-sm leading-relaxed text-gray-300"
                      style={{
                        fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)",
                        lineHeight: "1.3",
                      }}
                    >
                      Web Development Expertise
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="w-full transition-all duration-300 border-2 bg-orange-900/20 backdrop-blur-sm border-orange-800/30 hover:bg-orange-900/30 hover:border-orange-700/50 group rounded-xl sm:col-span-2 lg:col-span-1"
                  style={{
                    padding: "0.75rem",
                    aspectRatio: "5/4",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    maxHeight: "140px",
                    maxWidth: "220px",
                    minHeight: "120px",
                    width: "100%",
                  }}
                >
                  <CardHeader
                    className="px-3 pt-2 pb-1"
                    style={{
                      padding: "0.5rem 0.75rem 0.25rem 0.75rem",
                      textAlign: "center",
                    }}
                  >
                    <CardTitle
                      className="text-base font-semibold text-orange-100 sm:text-lg"
                      style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
                    >
                      Problem Solver
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className="px-3 pt-0 pb-2"
                    style={{
                      padding: "0 0.75rem 0.5rem 0.75rem",
                      textAlign: "center",
                    }}
                  >
                    <p
                      className="text-sm leading-relaxed text-gray-300"
                      style={{
                        fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)",
                        lineHeight: "1.3",
                      }}
                    >
                      Coding Enthusiast
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedContainer>
        </div>

        {/* Scroll Indicator - Responsive */}
        <AnimatedSection animation="fadeUp" delay={3.0}>
          <div
            className="absolute transform -translate-x-1/2 bottom-8 sm:bottom-12 md:bottom-16 left-1/2 text-orange-300/70"
            style={{ bottom: "2rem" }}
          >
            <div className="flex flex-col items-center gap-2 sm:gap-4">
              <span
                className="text-sm font-medium sm:text-base"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
              >
                Scroll to explore
              </span>
              <FiArrowDown
                className="w-6 h-6 animate-bounce sm:w-8 sm:h-8"
                size={24}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}

export default Home;
