import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const PageTransition = ({ children, className = "" }) => {
  const transitionRef = useRef(null);

  useEffect(() => {
    const element = transitionRef.current;
    if (!element) return;

    // Initial state
    gsap.set(element, {
      opacity: 0,
      y: 20,
    });

    // Animate in with faster, smoother transition
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    return () => {
      // Clean up
      gsap.killTweensOf(element);
    };
  }, []);

  return (
    <div
      ref={transitionRef}
      className={className}
      style={{ position: "relative", zIndex: 1 }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
