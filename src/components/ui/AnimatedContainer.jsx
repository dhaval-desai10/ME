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
      y: 15,
      scale: 0.99,
    });

    // Create simple, stable scroll trigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "play none play reverse",
      onEnter: () => {
        gsap.to(element.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: staggerDelay,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(element.children, {
          opacity: 0,
          y: 15,
          scale: 0.99,
          duration: 0.3,
          stagger: staggerDelay * 0.5,
          ease: "power2.inOut",
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
