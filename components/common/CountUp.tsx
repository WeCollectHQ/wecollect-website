"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "@/hooks/useInView";

interface CountUpProps {
  value: string; // e.g. "43", "Over 20", "100%"
  className?: string;
  duration?: number;
}

export function CountUp({ value, className = "", duration = 1.6 }: CountUpProps) {
  const { ref, isInView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState(() => {
    const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
    if (!match) return value;
    return `${match[1]}0${match[3]}`;
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
    if (!match) return;

    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = (timestamp - startTimestamp) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(target * ease);
      setDisplayValue(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
