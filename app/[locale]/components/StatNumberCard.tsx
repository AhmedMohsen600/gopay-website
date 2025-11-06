"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Typography } from "@/components/ui/typography";
import { SarIcon } from "./icons";

interface StatNumberCardProps {
  title: string;
  value: string;
  delay?: number;
  showSarIcon?: boolean;
}

export function StatNumberCard({
  title,
  value,
  delay = 0,
  showSarIcon,
}: StatNumberCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract number from value string (e.g., "5B+" -> 5, "351K+" -> 351)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  // Motion value for counting animation
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [springValue]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const paddingVariants = {
    hidden: { padding: "8px" },
    visible: {
      padding: window.innerWidth >= 768 ? "24px 24px 16px" : "16px 16px 12px",
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="group relative w-full rounded-[18px] border border-dotted transition-all duration-300 overflow-hidden"
      style={{
        borderColor: "rgba(255, 255, 255, 0.15)",
        background:
          "radial-gradient(50% 50%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.06) 100%) rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Hover background overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(131% 131% at 19.7% 100%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.06) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full min-h-[130px] md:min-h-[274px] w-full flex-col justify-between"
        variants={paddingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
      >
        <Typography variant="h5" className="font-medium text-[#b4b5c8]">
          {title}
        </Typography>

        <div className="flex items-baseline gap-1">
          {showSarIcon && (
            <SarIcon width={32} height={35} className="text-white" />
          )}
          <Typography
            variant="h2"
            className="font-semibold leading-none text-white"
          >
            <motion.span>{Math.floor(displayValue)}</motion.span>
            {suffix}
          </Typography>
        </div>
      </motion.div>
    </motion.div>
  );
}
