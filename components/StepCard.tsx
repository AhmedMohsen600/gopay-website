import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StepCardProps {
  icon?: ReactNode;
  iconText?: string;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({
  icon,
  iconText,
  title,
  description,
  className,
}: StepCardProps) {
  return (
    <div
      className={cn(
        "p-4 md:p-6 border-2 flex flex-col justify-between border-dashed min-h-[180px] md:min-h-[269.91px] border-[#F2994A] rounded-lg bg-[#1f2635]",
        className
      )}
    >
      {(icon || iconText) && (
        <div className="mb-4">
          {iconText ? (
            <Typography variant="h3" className="text-white/70 font-bold">
              {iconText}
            </Typography>
          ) : (
            <div className="text-white/80">{icon}</div>
          )}
        </div>
      )}
      <div>
        <Typography variant="h3" className="text-white mb-3">
          {title}
        </Typography>

        <Typography variant="p18" className="text-white/70">
          {description}
        </Typography>
      </div>
    </div>
  );
}
