"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import {
  ArrowCircleUpRight,
  ArrowCircleDownLeft,
} from "@phosphor-icons/react/dist/ssr";

interface ImpactCardProps {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconType: "up" | "down";
  delay?: number;
}

export function ImpactCard({
  title,
  description,
  metric,
  metricLabel,
  iconType,
  delay = 0,
}: ImpactCardProps) {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      className="bg-[#373c5b] rounded-[14px] md:rounded-3xl border border-[#60637c] min-h-[210px] md:min-h-[320px] flex flex-col justify-between p-5 md:p-7"
    >
      <div>
        {/* Title */}
        <Typography variant="h3" className="text-white tracking-tighter mb-4">
          {title}
        </Typography>

        {/* Description */}
        <Typography variant="p16" className="text-[#c9c9c9]">
          {description}
        </Typography>
      </div>
      <div>
        {/* Metric Section */}
        <div className="flex items-end justify-between gap-4">
          {/* Metric and Label */}
          <div className="flex flex-col">
            <Typography variant="h2" className="text-white font-bold">
              {metric}
            </Typography>
            <Typography variant="p16" className="text-white">
              {metricLabel}
            </Typography>
          </div>

          {/* Icon */}
          {iconType === "up" ? (
            <ArrowCircleUpRight
              className="w-[46px] h-[46px] md:w-[64px] md:h-[64px]"
              color="#70e76d"
            />
          ) : (
            <ArrowCircleDownLeft
              className="md:w-[64px] h-[46px] w-[46px] md:h-[64px]"
              color="#e6c66b"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
