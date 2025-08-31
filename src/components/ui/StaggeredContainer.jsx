import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StaggeredContainer = ({
  children,
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.6,
  animation = "fadeUp",
  className = "",
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || !element.children.length) return;

    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === element) {
        st.kill();
      }
    });

    // Set initial state based on animation type
    let fromState = {};
    let toState = { duration, ease: "power3.out" };

    switch (animation) {
      case "fadeUp":
        fromState = { opacity: 0, y: 30 };
        toState = { ...toState, opacity: 1, y: 0 };
        break;
      case "fadeLeft":
        fromState = { opacity: 0, x: -30 };
        toState = { ...toState, opacity: 1, x: 0 };
        break;
      case "fadeRight":
        fromState = { opacity: 0, x: 30 };
        toState = { ...toState, opacity: 1, x: 0 };
        break;
      case "scale":
        fromState = { opacity: 0, scale: 0.8 };
        toState = { ...toState, opacity: 1, scale: 1 };
        break;
      default:
        fromState = { opacity: 0 };
        toState = { ...toState, opacity: 1 };
    }

    // Set initial state for all children
    gsap.set(element.children, fromState);

    // Create scroll trigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(element.children, {
          ...toState,
          delay: delay,
          stagger: staggerDelay,
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [delay, staggerDelay, duration, animation]);

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default StaggeredContainer;
