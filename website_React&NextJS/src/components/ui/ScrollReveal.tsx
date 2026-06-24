"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "slide-down" | "scale-up";
  delay?: number; // ms
  duration?: number; // ms
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "slide-up",
  delay = 0,
  duration = 800
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible to persist the layout state
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // trigger when 5% of the element is visible
        rootMargin: "0px 0px -60px 0px" // triggers slightly before entering viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade-in":
        return isVisible ? "opacity-100" : "opacity-0";
      case "slide-up":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
      case "slide-down":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8";
      case "scale-up":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
      default:
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      {children}
    </div>
  );
}
