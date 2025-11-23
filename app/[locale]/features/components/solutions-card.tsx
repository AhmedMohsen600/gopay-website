import { ComponentProps } from "react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface SolutionsCardProps extends ComponentProps<"div"> {
  icon: React.ReactNode;
  description: string;
  title: string;
  iconBreak: boolean;
  beforeTitle?: React.ReactNode;
  afterDescription?: React.ReactNode;
}
export const SolutionsCard = ({
  icon,
  description,
  title,
  iconBreak = false,
  className,
  beforeTitle,
  afterDescription,
  ...props
}: SolutionsCardProps) => {
  return (
    <div
      className={cn(
        "bg-[#f8f9fc] rounded-2xl p-5 flex flex-col",
        className
      )}
      {...props}
    >
      {beforeTitle}
      <div
        className={cn(
          "flex items-center gap-2 mb-2.5 mt-auto ",
          iconBreak && "flex-col items-start",
          beforeTitle && "mt-6"
        )}
      >
        {icon}
        <Typography variant="h4" className="font-semibold md:font-medium">{title}</Typography>
      </div>
      <div
        className={cn(
          afterDescription && "flex flex-col justify-between gap-4 flex-1"
        )}
      >
        <Typography variant="p16">{description}</Typography>
        {afterDescription}
      </div>
    </div>
  );
};
