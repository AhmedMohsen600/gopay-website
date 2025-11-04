"use client";

import { ArrowRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "next-intl";
import { Icon } from "@phosphor-icons/react";

interface AnimatedArrowProps {
  className?: string;
  icon?: Icon;
  rtlIcon?: Icon;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}

export function AnimatedArrow({
  className = "",
  icon,
  rtlIcon,
  size = 16,
  weight = "bold",
}: AnimatedArrowProps) {
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Use custom icons if provided, otherwise use default ArrowRight/ArrowLeft
  const ArrowIcon = isRTL ? rtlIcon || icon || ArrowLeft : icon || ArrowRight;

  return (
    <span className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden">
      {/* First arrow - visible initially, slides out on hover */}
      <ArrowIcon
        size={size}
        weight={weight}
        className={`absolute transition-all duration-300 ease-out ${
          isRTL
            ? "translate-x-0 opacity-100 group-hover:-translate-x-5 group-hover:opacity-0"
            : "translate-x-0 opacity-100 group-hover:translate-x-5 group-hover:opacity-0"
        } ${className}`}
      />
      {/* Second arrow - hidden initially, slides in on hover */}
      <ArrowIcon
        size={size}
        weight={weight}
        className={`absolute transition-all duration-300 ease-out ${
          isRTL
            ? "translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            : "-translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        } ${className}`}
      />
    </span>
  );
}
