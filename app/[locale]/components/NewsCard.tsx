"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

export interface NewsCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
  className?: string;
}

export function NewsCard({
  imageSrc,
  imageAlt,
  title,
  description,
  date,
  className,
}: NewsCardProps) {
  return (
    <article
      className={cn(
        "group h-full bg-[#fafafa] overflow-hidden rounded-[28px]",
        className
      )}
    >
      <div className="relative w-full min-h-[300px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
      </div>

      <div className="flex flex-col gap-6 min-h-[141.4px] md:min-h-[240px] p-3 md:p-5">
        <div className="flex-1 ">
          <Typography className="mb-2 tracking-tight" variant="h5">
            {title}
          </Typography>

          <Typography className="text-text-3" variant="p16">
            {description}
          </Typography>
        </div>

        <Typography variant="p14" className="text-text-4">
          {date}
        </Typography>
      </div>
    </article>
  );
}
