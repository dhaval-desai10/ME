import React from "react";

const UniversalBackground = ({ children }) => {
  return (
    <div
      className="relative min-h-screen"
      style={{ minHeight: "100vh", position: "relative" }}
    >
      {/* Universal Dark Blue Background for All Pages */}
      <div
        className="fixed inset-0 z-0 w-full h-full"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          background:
            "linear-gradient(135deg, #000000 0%, #020617 20%, #0c1426 40%, #1e293b 60%, #020617 80%, #000000 100%)",
        }}
      >
        {/* Primary Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(2, 6, 23, 0.85) 25%, rgba(15, 23, 42, 0.7) 50%, rgba(0, 0, 0, 0.95) 100%)",
          }}
        ></div>

        {/* Secondary Blue Shadow Overlay */}
        <div
          className="absolute inset-0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at top center, rgba(30, 58, 138, 0.08) 0%, rgba(15, 23, 42, 0.4) 30%, rgba(2, 6, 23, 0.8) 60%, rgba(0, 0, 0, 0.95) 100%)",
          }}
        ></div>

        {/* Tertiary Deep Shadow */}
        <div
          className="absolute inset-0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at bottom right, rgba(37, 99, 235, 0.05) 0%, rgba(30, 64, 175, 0.03) 20%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 1) 100%)",
          }}
        ></div>

        {/* Subtle Dot Pattern */}
        <div
          className="absolute inset-0 opacity-1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.03) 1px, transparent 0)",
            backgroundSize: "100px 100px",
            opacity: 0.3,
          }}
        ></div>

        {/* Dark Blue Shadow Effects */}
        <div
          className="absolute top-0 left-0 w-1/6 rounded-full h-1/6 filter blur-3xl"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "16.666667%",
            height: "16.666667%",
            borderRadius: "50%",
            filter: "blur(48px)",
            background:
              "radial-gradient(ellipse, rgba(29, 78, 216, 0.02) 0%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-1/5 rounded-full h-1/5 filter blur-3xl"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "20%",
            height: "20%",
            borderRadius: "50%",
            filter: "blur(48px)",
            background:
              "radial-gradient(ellipse, rgba(37, 99, 235, 0.015) 0%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute rounded-full top-1/3 right-1/4 w-1/8 h-1/8 filter blur-3xl"
          style={{
            position: "absolute",
            top: "33.333333%",
            right: "25%",
            width: "12.5%",
            height: "12.5%",
            borderRadius: "50%",
            filter: "blur(48px)",
            background:
              "radial-gradient(ellipse, rgba(30, 64, 175, 0.01) 0%, transparent 100%)",
          }}
        ></div>
      </div>

      {/* Content Layer */}
      <div
        className="relative z-10 min-h-screen"
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default UniversalBackground;
