import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for
            technology
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="text-2xl">👨‍💻</span>
                My Journey
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I'm <strong>Dhaval Desai</strong>, a passionate Computer
                  Science Engineering student at DEPSTAR with a deep love for
                  problem-solving and building innovative solutions. My journey
                  in tech began with curiosity about how things work and evolved
                  into a passion for creating them.
                </p>
                <p>
                  Currently maintaining a <strong>CGPA of 8.7</strong>, I
                  believe in balancing academic excellence with practical
                  application. I've solved over <strong>250+ problems</strong>{" "}
                  on competitive programming platforms and achieved a{" "}
                  <strong>3-star rating on CodeChef</strong> with 1600+ rating.
                </p>
                <p>
                  My expertise lies in <strong>Full Stack Development</strong>{" "}
                  using the MERN stack, where I enjoy bringing ideas to life
                  through clean, efficient code and intuitive user experiences.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-slate-800 mb-4">
                🎯 What Drives Me
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Solving complex problems through elegant code</li>
                <li>• Building applications that make a difference</li>
                <li>• Competitive programming and algorithm optimization</li>
                <li>• Learning new technologies and staying updated</li>
                <li>• Contributing to open-source projects</li>
              </ul>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                Education
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-slate-600 pl-4">
                  <h4 className="font-semibold text-slate-800">
                    Computer Science and Engineering
                  </h4>
                  <p className="text-slate-600">
                    Devang Patel Institute of Advance Technology and Research
                    (DEPSTAR)
                  </p>
                  <p className="text-sm text-slate-500">
                    2023 - 2027 • CGPA: 8.7
                  </p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-slate-800">
                    Higher Secondary (XII - GSEB)
                  </h4>
                  <p className="text-slate-600">
                    Sardar Patel Educational Institute
                  </p>
                  <p className="text-sm text-slate-500">2023 • 93.31%</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                Achievements
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-slate-800">
                      Hackathon Participation
                    </p>
                    <p className="text-sm text-slate-600">
                      Participated in Odoo x MSU 2025 Hackathon - "Thrive
                      Together" project
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-slate-800">
                      Competitive Programming
                    </p>
                    <p className="text-sm text-slate-600">
                      250+ problems solved on LeetCode and CodeChef platforms
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-slate-800">
                      CodeChef Rating
                    </p>
                    <p className="text-sm text-slate-600">
                      Achieved 1600+ rating with 3-star status
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-slate-800">
                      Academic Excellence
                    </p>
                    <p className="text-sm text-slate-600">
                      Maintaining 8.7+ CGPA in Computer Science Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-6">
            ⚡ Quick Facts About Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-slate-700 mb-2">2+</div>
              <p className="text-sm text-slate-600">
                Years of Programming Experience
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600 mb-2">5+</div>
              <p className="text-sm text-slate-600">Major Projects Completed</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-sm text-slate-600">Technologies Learned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
