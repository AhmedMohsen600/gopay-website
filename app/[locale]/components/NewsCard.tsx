"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

export interface NewsCardProps {
  href?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
  className?: string;
  imageContainerClassName?: string;
  contentContainerClassName?: string;
}

export function NewsCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  date,
  className,
  imageContainerClassName,
  contentContainerClassName,
}: NewsCardProps) {
  const content = (
    <>
      <div
        className={cn(
          "relative w-full min-h-[300px] overflow-hidden",
          imageContainerClassName
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
      </div>

      <div
        className={cn(
          "flex flex-col gap-6 min-h-[141.4px] md:min-h-[240px] p-3 md:p-5",
          contentContainerClassName
        )}
      >
        <div className="flex-1 ">
          <Typography className="mb-2" variant="h5">
            {title}
          </Typography>

          <Typography className="text-text-3" variant="p16">
            {description}
          </Typography>
        </div>

        <Typography variant="p14" className="text-text-text-2">
          {date}
        </Typography>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "group h-full bg-[#fafafa] overflow-hidden rounded-3xl block",
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <article
      className={cn(
        "group h-full bg-[#fafafa] overflow-hidden rounded-[16px] md:rounded-3xl",
        className
      )}
    >
      {content}
    </article>
  );
}
