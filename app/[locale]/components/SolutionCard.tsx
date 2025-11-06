"use client";

import { Typography } from "@/components/ui/typography";

interface SolutionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}

export function SolutionCard({ icon: Icon, title }: SolutionCardProps) {
  return (
    <div className="bg-[#f7f9fd] min-h-auto md:min-h-[150px] rounded-xl border border-[#f5f4fb] p-3 md:p-4 flex gap-4">
      {/* Icon */}
      <div className="self-end">
        <Icon className="md:w-8 md:h-8 w-[18px] h-[18px] text-secondary" />

        {/* Title */}
        <Typography variant="h6" className="text-text-5 mt-[13px]">
          {title}
        </Typography>
      </div>
    </div>
  );
}
