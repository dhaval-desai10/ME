import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SequentialCards = ({
  children,
  staggerDelay = 0.15,
  className = "",
  triggerStart = "top 85%",
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || !element.children.length) return;

    // Check if device prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Just show elements without animation for accessibility
      gsap.set(element.children, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    // Responsive animation values based on screen size
    const getResponsiveValues = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth < 1024;

      return {
        yValue: isMobile ? 10 : 20,
        scaleValue: isMobile ? 0.99 : 0.98,
        duration: isMobile ? 0.4 : 0.6,
        stagger: isMobile ? staggerDelay * 0.7 : staggerDelay,
      };
    };

    const { yValue, scaleValue, duration, stagger } = getResponsiveValues();

    // Set initial state for all card children with responsive values
    gsap.set(element.children, {
      opacity: 0,
      y: yValue,
      scale: scaleValue,
      transformOrigin: "center center",
    });

    // Create responsive scroll trigger for sequential cards
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: triggerStart,
      end: "bottom 20%",
      toggleActions: "play none play reverse",
      invalidateOnRefresh: true,
      onEnter: () => {
        const { duration, stagger } = getResponsiveValues();
        gsap.to(element.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration,
          stagger: {
            each: stagger,
            from: "start",
          },
          ease: "power2.out",
          clearProps: "transform",
        });
      },
      onLeave: () => {
        const { duration, stagger } = getResponsiveValues();
        // Only slightly fade, don't make disappear completely
        gsap.to(element.children, {
          opacity: 0.4,
          duration: duration * 0.7,
          stagger: {
            each: stagger * 0.3,
            from: "start",
          },
          ease: "power2.inOut",
        });
      },
      onEnterBack: () => {
        const { duration, stagger } = getResponsiveValues();
        gsap.to(element.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration * 0.8,
          stagger: {
            each: stagger * 0.8,
            from: "start",
          },
          ease: "power2.out",
          clearProps: "transform",
        });
      },
      onLeaveBack: () => {
        const { yValue, scaleValue, duration, stagger } = getResponsiveValues();
        gsap.to(element.children, {
          opacity: 0,
          y: yValue,
          scale: scaleValue,
          duration: duration * 0.7,
          stagger: {
            each: stagger * 0.5,
            from: "start",
          },
          ease: "power2.inOut",
        });
      },
    });

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      scrollTrigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [staggerDelay, triggerStart]);

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default SequentialCards;
