import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Performance optimization utility for GSAP ScrollTrigger animations
export const optimizeScrollAnimations = () => {
    // Set global defaults for better performance
    gsap.defaults({
        force3D: true,
        lazy: false,
    });

    // Configure ScrollTrigger for better performance
    ScrollTrigger.config({
        anticipatePin: 1,
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        refreshPriority: -10,
    });

    // Debounce resize events for better performance
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });
};

// Create optimized animation timeline
export const createOptimizedTimeline = (options = {}) => {
    return gsap.timeline({
        defaults: {
            ease: "power2.out",
            duration: 0.4,
            force3D: true,
            ...options.defaults,
        },
        ...options,
    });
};

// Optimized scroll trigger creation with performance defaults
export const createOptimizedScrollTrigger = (config) => {
    return ScrollTrigger.create({
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        ...config,
    });
};

// Batch DOM updates for better performance
export const batchScrollAnimations = (animations) => {
    return ScrollTrigger.batch(animations, {
        onEnter: (elements) => {
            gsap.fromTo(
                elements,
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out",
                    force3D: true,
                }
            );
        },
        onLeave: (elements) => {
            gsap.to(elements, {
                opacity: 0,
                y: 20,
                scale: 0.98,
                duration: 0.3,
                stagger: 0.05,
                ease: "power2.inOut",
                force3D: true,
            });
        },
        onEnterBack: (elements) => {
            gsap.to(elements, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.out",
                force3D: true,
            });
        },
        onLeaveBack: (elements) => {
            gsap.to(elements, {
                opacity: 0,
                y: -20,
                scale: 0.98,
                duration: 0.3,
                stagger: 0.05,
                ease: "power2.inOut",
                force3D: true,
            });
        },
    });
};

// Initialize scroll animation optimizations
export const initScrollOptimizations = () => {
    // Call optimization function
    optimizeScrollAnimations();

    // Add CSS for hardware acceleration and responsive improvements
    const style = document.createElement("style");
    style.textContent = `
    [data-scroll-animated] {
      will-change: transform, opacity;
      backface-visibility: hidden;
      perspective: 1000px;
    }
    
    [data-scroll-container] {
      transform: translateZ(0);
    }
    
    /* Responsive animation improvements */
    @media (max-width: 768px) {
      .grid > * {
        transform: translateZ(0);
        backface-visibility: hidden;
      }
    }
    
    /* Prevent layout shifts during animations */
    .grid {
      contain: layout style;
    }
    
    /* Smooth scrolling for better mobile experience */
    html {
      scroll-behavior: smooth;
    }
    
    /* Reduce motion for accessibility */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;
    document.head.appendChild(style);
};
