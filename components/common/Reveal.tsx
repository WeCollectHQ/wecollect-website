"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number; // in seconds, e.g. 0.1
  duration?: number; // in seconds, e.g. 0.7
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // in pixels, default 24
  className?: string;
  as?: React.ElementType;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 24,
  className = "",
  as: Component = "div",
  style,
  ...props
}: RevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const getTransform = () => {
    if (isInView) return "none";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "none":
      default:
        return "none";
    }
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}s`,
        willChange: "opacity, transform",
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
