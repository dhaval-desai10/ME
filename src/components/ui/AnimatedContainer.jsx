import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedContainer = ({
  children,
  staggerDelay = 0.1,
  className = "",
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || !element.children.length) return;

    // Set initial state for all children
    gsap.set(element.children, {
      opacity: 0,
      y: 20,
      scale: 0.98,
    });

    // Create scroll trigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(element.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: staggerDelay,
          ease: "power3.out",
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [staggerDelay]);

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default AnimatedContainer;
