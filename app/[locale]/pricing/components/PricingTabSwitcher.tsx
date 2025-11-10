"use client";

import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingTabSwitcherProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export function PricingTabSwitcher({
  tabs,
  activeTab,
  onTabChange,
}: PricingTabSwitcherProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex items-center bg-white rounded-[12px] p-[3px] border border-stroke-1">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onTabChange(index)}
            className={cn(
              "relative h-[38px] rounded-0 transition-all duration-300 min-w-[135px]",
              activeTab === index ? "text-white" : "text-text-3 hover:text-dark"
            )}
          >
            {activeTab === index && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary rounded-[6px]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Typography
              variant="p14"
              className={cn(
                "relative z-10 font-medium transition-colors",
                activeTab === index ? "text-[#DEDEDE]" : "text-text-3"
              )}
            >
              {tab}
            </Typography>
          </button>
        ))}
      </div>
    </div>
  );
}
