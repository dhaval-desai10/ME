import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX - 10 + "px";
        cursor.style.top = e.clientY - 10 + "px";
      }
    };

    const addHoverEffect = () => {
      if (cursor) {
        cursor.classList.add("hover");
      }
    };

    const removeHoverEffect = () => {
      if (cursor) {
        cursor.classList.remove("hover");
      }
    };

    const updateInteractiveElements = () => {
      // Remove previous listeners
      const oldElements = document.querySelectorAll(".interactive-listened");
      oldElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
        el.classList.remove("interactive-listened");
      });

      // Add listeners to current interactive elements
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], .interactive, .name-char'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", addHoverEffect);
        el.addEventListener("mouseleave", removeHoverEffect);
        el.classList.add("interactive-listened");
      });
    };

    // Add mouse move listener
    document.addEventListener("mousemove", moveCursor);

    // Initial setup
    updateInteractiveElements();

    // Update interactive elements periodically (for dynamic content)
    const interval = setInterval(updateInteractiveElements, 1000);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      clearInterval(interval);

      const elements = document.querySelectorAll(".interactive-listened");
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
        el.classList.remove("interactive-listened");
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
