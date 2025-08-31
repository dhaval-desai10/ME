import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.5,
  trigger = null,
  className = "",
  stagger = 0,
  once = false,
  threshold = 0.2,
  ...props
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === element) {
        st.kill();
      }
    });

    // Set initial state based on animation type
    let fromState = {};
    let toState = { duration, delay };

    switch (animation) {
      case "fadeUp":
        fromState = { opacity: 0, y: 50 };
        toState = { ...toState, opacity: 1, y: 0 };
        break;
      case "fadeDown":
        fromState = { opacity: 0, y: -50 };
        toState = { ...toState, opacity: 1, y: 0 };
        break;
      case "fadeLeft":
        fromState = { opacity: 0, x: -50 };
        toState = { ...toState, opacity: 1, x: 0 };
        break;
      case "fadeRight":
        fromState = { opacity: 0, x: 50 };
        toState = { ...toState, opacity: 1, x: 0 };
        break;
      case "scale":
        fromState = { opacity: 0, scale: 0.8 };
        toState = { ...toState, opacity: 1, scale: 1 };
        break;
      case "staggerUp":
        fromState = { opacity: 0, y: 30 };
        toState = { ...toState, opacity: 1, y: 0, stagger: stagger || 0.1 };
        break;
      default:
        fromState = { opacity: 0 };
        toState = { ...toState, opacity: 1 };
    }

    // Set initial state
    gsap.set(element, fromState);

    // Create bidirectional scroll trigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: trigger || element,
      start: `top ${100 - threshold * 100}%`,
      end: "bottom 30%",
      onEnter: () => {
        if (animation === "staggerUp" && element.children.length > 0) {
          gsap.fromTo(element.children, fromState, {
            ...toState,
            duration: 0.5,
            ease: "power2.out",
          });
        } else {
          gsap.to(element, {
            ...toState,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      },
      onLeave: () => {
        // Only fade slightly on leave to prevent jarring disappearance
        gsap.to(element, {
          opacity: 0.2,
          duration: 0.3,
          ease: "power2.inOut",
        });
      },
      onEnterBack: () => {
        if (animation === "staggerUp" && element.children.length > 0) {
          gsap.fromTo(element.children, fromState, {
            ...toState,
            duration: 0.4,
            ease: "power2.out",
          });
        } else {
          gsap.to(element, {
            ...toState,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      },
      onLeaveBack: () => {
        gsap.to(element, {
          ...fromState,
          duration: 0.4,
          ease: "power2.inOut",
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [animation, delay, duration, trigger, stagger, once, threshold]);

  return (
    <div ref={sectionRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default AnimatedSection;
