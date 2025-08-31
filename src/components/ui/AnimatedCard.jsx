import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCard = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  ...props
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    // Check if device prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    // Responsive animation values
    const getResponsiveValues = () => {
      const isMobile = window.innerWidth < 768;
      return {
        yValue: isMobile ? 10 : 20,
        scaleValue: isMobile ? 0.99 : 0.98,
        duration: isMobile ? 0.4 : 0.5,
      };
    };

    const { yValue, scaleValue, duration } = getResponsiveValues();

    // Set initial state with responsive values
    gsap.set(element, {
      opacity: 0,
      y: yValue,
      scale: scaleValue,
      transformOrigin: "center center",
    });

    // Create responsive scroll trigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play none play reverse",
      invalidateOnRefresh: true,
      onEnter: () => {
        const { duration } = getResponsiveValues();
        gsap.to(element, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration,
          delay: delay,
          ease: "power2.out",
          clearProps: "transform",
        });
      },
      onLeave: () => {
        // Only fade slightly, don't disappear completely
        gsap.to(element, {
          opacity: 0.3,
          duration: 0.3,
          ease: "power2.inOut",
        });
      },
      onEnterBack: () => {
        const { duration } = getResponsiveValues();
        gsap.to(element, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration * 0.8,
          ease: "power2.out",
          clearProps: "transform",
        });
      },
      onLeaveBack: () => {
        const { yValue, scaleValue } = getResponsiveValues();
        gsap.to(element, {
          opacity: 0,
          y: yValue,
          scale: scaleValue,
          duration: 0.3,
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
  }, [delay, duration]);

  return (
    <div ref={cardRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default AnimatedCard;
