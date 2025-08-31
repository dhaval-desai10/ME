import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedHeading = ({
  children,
  level = "h2",
  animation = "fadeLeft",
  delay = 0,
  duration = 0.8,
  className = "",
  ...props
}) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const element = headingRef.current;
    if (!element) return;

    // Set initial state based on animation type
    let fromState = {};
    let toState = { duration, delay };

    switch (animation) {
      case "fadeLeft":
        fromState = { opacity: 0, x: -60 };
        toState = { ...toState, opacity: 1, x: 0 };
        break;
      case "fadeRight":
        fromState = { opacity: 0, x: 60 };
        toState = { ...toState, opacity: 1, x: 0 };
        break;
      case "fadeUp":
        fromState = { opacity: 0, y: 40 };
        toState = { ...toState, opacity: 1, y: 0 };
        break;
      case "fadeDown":
        fromState = { opacity: 0, y: -40 };
        toState = { ...toState, opacity: 1, y: 0 };
        break;
      default:
        fromState = { opacity: 0 };
        toState = { ...toState, opacity: 1 };
    }

    // Set initial state
    gsap.set(element, fromState);

    // Create scroll trigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(element, {
          ...toState,
          ease: "power3.out",
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [animation, delay, duration]);

  const HeadingComponent = level;

  return (
    <HeadingComponent ref={headingRef} className={className} {...props}>
      {children}
    </HeadingComponent>
  );
};

export default AnimatedHeading;
