"use client";

import { Typography } from "@/components/ui/typography";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="relative h-[217.34px] bg-[#fcfbfe] rounded-lg p-5 border border-[#f9f8fd] group overflow-hidden">
      {/* Hover gradient background effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
        style={{
          background:
            "radial-gradient(140% 128% at 12.2% 100%, rgba(217, 162, 124, 0.2) 0%, rgba(244, 244, 250, 0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Icon */}
        <div className="mb-4">
          <Icon className="w-7 h-7 text-secondary" />
        </div>

        {/* Title */}
        <div>
          <Typography variant="h5" className="text-text-5 mb-2.5 font-semibold">
            {title}
          </Typography>

          {/* Description */}
          <Typography variant="p16" className="text-text-3 tracking-tight">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
