"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

export function HeroBackground() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Generate dots for first layer - only on client
  const [dotsLayer1] = useState(() =>
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
  );

  // Generate dots for second layer - only on client
  const [dotsLayer2] = useState(() =>
    Array.from({ length: 100 }, (_, i) => ({
      id: i + 100,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on server to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* First rotating layer - clockwise */}
      <motion.div
        className="absolute inset-0"
        style={{
          transformOrigin: "center center",
        }}
        initial={{ rotate: 0 }}
        animate={reduce ? {} : { rotate: 360 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {dotsLayer1.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-text-5"
            style={{
              top: `${dot.y}%`,
              left: `${dot.x}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
            }}
            initial={{ opacity: 0 }}
            animate={
              reduce
                ? { opacity: 0.15 }
                : {
                    opacity: [0.1, 0.25, 0.1],
                  }
            }
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Second rotating layer - counter-clockwise */}
      <motion.div
        className="absolute inset-0"
        style={{
          transformOrigin: "center center",
        }}
        initial={{ rotate: 0 }}
        animate={reduce ? {} : { rotate: -360 }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {dotsLayer2.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-text-5"
            style={{
              top: `${dot.y}%`,
              left: `${dot.x}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
            }}
            initial={{ opacity: 0 }}
            animate={
              reduce
                ? { opacity: 0.15 }
                : {
                    opacity: [0.1, 0.25, 0.1],
                  }
            }
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
