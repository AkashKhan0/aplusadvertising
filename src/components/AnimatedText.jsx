"use client";

import { useEffect, useRef, useState } from "react";
import "../styles/animation.css";

export default function AnimatedText({ text, from = "left" }) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.03 }
    );

    if (textRef.current) observer.observe(textRef.current);
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={`animated-text ${isVisible ? "show" : "hide"} ${from}`}
    >
      {text.split("").map((letter, i) => (
        <span key={i} style={{ transitionDelay: `${i * 0.03}s` }}>
          {letter}
        </span>
      ))}
    </div>
  );
}
