import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const profileRef = useRef(null);
  const timelineRef = useRef(null);
  const skillsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance animation for the entire section
      gsap.fromTo(
        ".about-container",
        { 
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-container",
            start: "top 90%",
            end: "top 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hero text animation with magnetic effect
      gsap.fromTo(
        ".hero-text",
        { 
          opacity: 0,
          scale: 0.8,
          rotationX: 45
        },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".hero-text",
            start: "top 85%",
            end: "bottom 40%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Profile card with floating animation
      gsap.fromTo(
        ".profile-card",
        { 
          opacity: 0,
          x: -200,
          rotation: -10
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.8,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: ".profile-card",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Timeline items with stagger effect
      gsap.fromTo(
        ".timeline-item",
        { 
          opacity: 0,
          x: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills cards with wave effect
      gsap.fromTo(
        ".skill-card",
        { 
          opacity: 0,
          y: 80,
          rotationY: 45
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats counter animation
      gsap.fromTo(
        ".stat-number",
        { 
          opacity: 0,
          scale: 0.5,
          textContent: 0
        },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onStart: () => {
              // Animate counters
              const statNumbers = document.querySelectorAll('.stat-number');
              statNumbers.forEach((stat, index) => {
                const target = stat.dataset.target;
                gsap.to(stat, {
                  textContent: target,
                  duration: 2,
                  ease: "power2.out",
                  snap: { textContent: 1 },
                  delay: index * 0.2
                });
              });
            }
          }
        }
      );

      // Parallax effect for background elements
      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const gradientTextStyle = {
    background: "linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const timelineData = [
    {
      year: "2022",
      title: "Started Computer Science",
      description: "Began my journey at Charusat University with a passion for technology",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2023",
      title: "First Web Project",
      description: "Built my first full-stack application using React and Node.js",
      icon: "🚀",
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2024",
      title: "Advanced Learning",
      description: "Mastered modern frameworks and started competitive programming",
      icon: "💻",
      color: "from-green-500 to-teal-500"
    },
    {
      year: "2025",
      title: "Portfolio & Growth",
      description: "Building this portfolio and preparing for industry challenges",
      icon: "⭐",
      color: "from-orange-500 to-red-500"
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 90, icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { name: "Backend Development", level: 85, icon: "⚙️", color: "from-green-500 to-teal-500" },
    { name: "Database Management", level: 80, icon: "🗄️", color: "from-purple-500 to-pink-500" },
    { name: "Problem Solving", level: 88, icon: "🧩", color: "from-orange-500 to-red-500" },
    { name: "Team Collaboration", level: 92, icon: "🤝", color: "from-indigo-500 to-purple-500" },
    { name: "UI/UX Design", level: 75, icon: "✨", color: "from-pink-500 to-rose-500" }
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3),
                        0 0 40px rgba(59, 130, 246, 0.1),
                        0 0 60px rgba(59, 130, 246, 0.05);
          }
          50% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5),
                        0 0 60px rgba(59, 130, 246, 0.2),
                        0 0 80px rgba(59, 130, 246, 0.1);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          75% { border-radius: 40% 60% 60% 40% / 60% 30% 60% 70%; }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .gradient-bg {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .morph-shape {
          animation: morph 8s ease-in-out infinite;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .hover-lift:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .skill-progress {
          position: relative;
          overflow: hidden;
        }
        
        .skill-progress::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .magnetic-hover {
          transition: transform 0.3s ease;
        }
        
        .magnetic-hover:hover {
          transform: scale(1.05);
        }
      `}</style>

      <section
        id="about"
        ref={aboutRef}
        className="relative min-h-screen bg-black overflow-hidden"
      >
        {/* Parallax Background */}
        <div className="parallax-bg absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full morph-shape"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full morph-shape" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full morph-shape" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="about-container relative z-10 px-4 py-20">
          <div className="max-w-7xl mx-auto">
            
            {/* Hero Section */}
            <div className="hero-text text-center mb-20">
              <h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
                style={gradientTextStyle}
              >
                About Me
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Crafting digital experiences with passion, precision, and a touch of magic ✨
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Profile Section */}
              <div className="lg:col-span-5">
                <div className="profile-card glass-effect rounded-3xl p-8 hover-lift pulse-glow">
                  <div className="text-center mb-8">
                    <div className="relative inline-block mb-6">
                      <div className="w-48 h-48 mx-auto rounded-full gradient-bg p-1 float-animation">
                        <img
                          src="https://png.pngtree.com/thumb_back/fh260/background/20250120/pngtree-a-cartoon-boy-wearing-glasses-and-hoodie-is-coding-on-his-image_16934156.jpg"
                          alt="Dhaval Desai"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                        💻
                      </div>
                    </div>
                    
                    <h2 className="text-4xl font-bold text-white mb-2">Dhaval Desai</h2>
                    <p className="text-xl text-blue-400 mb-4">Full Stack Developer</p>
                    <p className="text-gray-400">Computer Science Student at Charusat University</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="stats-container grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 glass-effect rounded-xl magnetic-hover">
                      <div className="stat-number text-2xl font-bold text-blue-400" data-target="8.7">0</div>
                      <div className="text-xs text-gray-400">CGPA</div>
                    </div>
                    <div className="text-center p-4 glass-effect rounded-xl magnetic-hover">
                      <div className="stat-number text-2xl font-bold text-green-400" data-target="15">0</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                    <div className="text-center p-4 glass-effect rounded-xl magnetic-hover">
                      <div className="stat-number text-2xl font-bold text-purple-400" data-target="2">0</div>
                      <div className="text-xs text-gray-400">Years</div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 glass-effect rounded-xl magnetic-hover">
                      <span className="text-2xl">🎓</span>
                      <span className="text-gray-300">Charusat University</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 glass-effect rounded-xl magnetic-hover">
                      <span className="text-2xl">📍</span>
                      <span className="text-gray-300">Bhavnagar, Gujarat</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 glass-effect rounded-xl magnetic-hover">
                      <span className="text-2xl">🏐</span>
                      <span className="text-gray-300">State Level Volleyball Player</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline & Skills Section */}
              <div className="lg:col-span-7 space-y-12">
                
                {/* Journey Timeline */}
                <div className="timeline-container">
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">My Journey</h3>
                  <div className="space-y-6">
                    {timelineData.map((item, index) => (
                      <div key={index} className="timeline-item flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl float-animation`}>
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-1 glass-effect rounded-xl p-6 hover-lift">
                          <div className="flex items-center space-x-4 mb-3">
                            <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                              {item.year}
                            </span>
                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                          </div>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="skills-grid">
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">Core Skills</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-card glass-effect rounded-xl p-6 hover-lift">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 skill-progress">
                          <div 
                            className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mt-20 text-center">
              <div className="glass-effect rounded-3xl p-12 hover-lift pulse-glow max-w-4xl mx-auto">
                <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic mb-6 leading-relaxed">
                  "Code is like humor. When you have to explain it, it's bad. 
                  But when it works perfectly, it's pure magic." ✨
                </blockquote>
                <div className="text-lg text-blue-400 font-medium">— Dhaval Desai</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
