"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { MiniLineChart } from "./MiniLineChart";
import { SarIcon } from "./icons/sarIcon";

interface StatCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  amount: string;
  count: string;
  chartData: number[];
  delay?: number;
  variant?: "oneTime" | "recurring";
}

export function StatCard({
  id,
  icon,
  title,
  amount,
  count,
  chartData,
  delay = 0,
  variant = "oneTime",
}: StatCardProps) {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="bg-white rounded-lg border border-stroke-1 overflow-hidden"
    >
      {/* Header */}
      <div className="px-4 py-3 bg-white border-b border-stroke-1">
        <div className="flex items-center gap-2">
          <div className="text-text-5 w-4 h-4 flex items-center justify-center">
            {icon}
          </div>
          <Typography variant="p14" className="font-bold text-text-5">
            {title}
          </Typography>
        </div>
      </div>

      {/* Info */}
      <div className="px-3 pt-4">
        {/* Amount and Count Pill */}
        <div className="bg-[#F7F7FC] rounded-full p-[6px_6px_6px_10px] mb-4 flex justify-between items-center gap-2">
          <div className="flex items-center gap-1">
            <SarIcon />
            <Typography variant="p14" className="font-medium text-primary">
              {amount}
            </Typography>
          </div>
          <div
            className={`${
              variant === "oneTime" ? "bg-primary" : "bg-[#cb7e03]"
            } rounded-full py-[2px] px-[6px]`}
          >
            <Typography variant="p12" className="font-semibold text-white">
              {count}
            </Typography>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-2">
          <MiniLineChart data={chartData} id={id} variant={variant} />
        </div>
      </div>
    </motion.div>
  );
}
