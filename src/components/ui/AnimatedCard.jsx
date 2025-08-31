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

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: 30,
      scale: 0.95,
    });

    // Create scroll trigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration,
          delay: delay,
          ease: "power3.out",
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [delay, duration]);

  return (
    <div ref={cardRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default AnimatedCard;
