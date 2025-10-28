"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function AnimatedArrow({ className = "" }: { className?: string }) {
  return (
    <span className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden">
      <ArrowRight
        size={20}
        weight="bold"
        className={`absolute transition-all duration-300 ease-out group-hover:translate-x-5 group-hover:opacity-0 ${className}`}
      />
      <ArrowRight
        size={20}
        weight="bold"
        className={`absolute transition-all duration-300 ease-out -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ${className}`}
      />
    </span>
  );
}
