"use client";

import { ArrowRight, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "next-intl";

export function AnimatedArrow({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <span className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden">
      {/* First arrow - visible initially, slides out on hover */}
      <ArrowIcon
        size={20}
        weight="bold"
        className={`absolute transition-all duration-300 ease-out ${
          isRTL
            ? "translate-x-0 opacity-100 group-hover:-translate-x-5 group-hover:opacity-0"
            : "translate-x-0 opacity-100 group-hover:translate-x-5 group-hover:opacity-0"
        } ${className}`}
      />
      {/* Second arrow - hidden initially, slides in on hover */}
      <ArrowIcon
        size={20}
        weight="bold"
        className={`absolute transition-all duration-300 ease-out ${
          isRTL
            ? "translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            : "-translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        } ${className}`}
      />
    </span>
  );
}
