"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Logo {
  src: string;
  alt: string;
}

interface LogosMarqueeProps {
  logos: Logo[];
  speed?: number;
  pauseOnHover?: boolean;
  gradient?: boolean;
  className?: string;
}

export function LogosMarquee({
  logos,
  speed = 200,
  className,
}: LogosMarqueeProps) {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const scrollerRef = useRef<HTMLDivElement>(null);

  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let position = 0;
    let animationId: number;

    const animate = () => {
      position += speed / 100;

      const resetPoint = scroller.scrollWidth / 3;
      if (position >= resetPoint) {
        position = 0;
      }

      scroller.style.transform = `translateX(${
        isRTL ? position : -position
      }px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed, isRTL]);

  return (
    <div
      className="relative max-w-[1000px] w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 96px, black calc(100% - 96px), transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 96px, black calc(100% - 96px), transparent)",
      }}
    >
      <div
        ref={scrollerRef}
        className={cn("flex gap-[27.08px] will-change-transform", className)}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="shrink-0"
            style={{ pointerEvents: "none" }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={99}
              height={60}
              className="h-12 w-[99px] object-contain"
              priority={index < logos.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
