"use client";

import { motion } from "framer-motion";

export function HeroBlurBackgrounds() {
  return (
    <>
      {/* Blur 1 - Purple - 20% opacity */}
      <motion.div
        className="absolute rounded-full will-change-transform pointer-events-none"
        style={{
          backgroundColor: "#B3ADFF",
          opacity: 0.12,
          filter: "blur(120px)",
          width: "500px",
          height: "500px",
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          x: ["310px", "-310px", "310px"],
          y: ["210px", "-210px", "210px"],
          rotate: [360, 0, 360],
          skewY: [10, 0, 10],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Blur 2 - Peachy - 30% opacity */}
      <motion.div
        className="absolute rounded-full will-change-transform pointer-events-none"
        style={{
          backgroundColor: "#E3AAA1",
          opacity: 0.2,
          filter: "blur(120px)",
          width: "450px",
          height: "450px",
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          x: ["-880px", "880px", "-880px"],
          y: ["20px", "-20px", "20px"],
          rotate: [350, 10, 350],
          skewY: [0, 0, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Blur 3 - Orange - 30% opacity */}
      <motion.div
        className="absolute rounded-full will-change-transform pointer-events-none"
        style={{
          backgroundColor: "#FFC896",
          opacity: 0.3,
          filter: "blur(120px)",
          width: "400px",
          height: "400px",
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          x: ["310px", "-310px", "310px"],
          y: ["210px", "-210px", "210px"],
          rotate: [360, 0, 360],
          skewY: [10, 0, 10],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}
