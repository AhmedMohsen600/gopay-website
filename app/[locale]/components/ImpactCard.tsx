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
      className="bg-[#373c5b] rounded-3xl border border-[#60637c] min-h-[320px] flex flex-col justify-between p-7"
    >
      <div>
        {/* Title */}
        <Typography variant="h3" className="text-white mb-4 font-bold">
          {title}
        </Typography>

        {/* Description */}
        <Typography variant="p16" className="text-[#c9c9c9]">
          {description}
        </Typography>
      </div>
      <div>
        {/* Metric Section */}
        <div className="flex items-center gap-2">
          {/* Icon */}
          {iconType === "up" ? (
            <ArrowCircleUpRight size={32} color="#70e76d" />
          ) : (
            <ArrowCircleDownLeft size={32} color="#e6c66b" />
          )}

          {/* Metric and Label */}
          <div className="flex  flex-col">
            <Typography variant="h2" className="text-white font-bold">
              {metric}
            </Typography>
          </div>
        </div>
        <Typography variant="p16" className="text-white">
          {metricLabel}
        </Typography>
      </div>
    </motion.div>
  );
}
