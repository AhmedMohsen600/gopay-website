"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
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

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
      className="group relative w-full h-full rounded-[18px] border border-dotted transition-all duration-300 overflow-hidden"
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
      <div className="relative z-10 flex h-full min-h-[130px] md:min-h-[171px] xl:min-h-[274px] w-full flex-col justify-between p-4 md:p-4 md:pb-3 xl:p-6 xl:pb-4">
        <Typography variant="h5" className="font-medium text-[#b4b5c8]">
          {title}
        </Typography>

        <div className="flex items-center gap-1">
          {showSarIcon && (
            <SarIcon width={32} height={35} className="text-white h-6 w-[29px] md:w-8 md:h-[35px]" />
          )}
          <Typography
            variant="h2"
            className="font-semibold leading-none text-white"
          >
            {value}
          </Typography>
        </div>
      </div>
    </motion.div>
  );
}
