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
  direction?: "left" | "right"; // "left" = moves left (default), "right" = moves right
}

export function LogosMarquee({
  logos,
  speed = 50,
  className,
  direction = "left",
}: LogosMarqueeProps) {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const scrollerRef = useRef<HTMLDivElement>(null);

  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Determine scroll direction: "right" means scrolling right (left-to-right), "left" means scrolling left (right-to-left)
    const shouldScrollRight =
      direction === "right" || (direction === "left" && isRTL);

    const resetPoint = scroller.scrollWidth / 3;
    let position = shouldScrollRight ? -resetPoint : 0;
    let animationId: number;

    const animate = () => {
      if (shouldScrollRight) {
        // Scrolling right (left-to-right)
        position += speed / 100;
        if (position >= 0) {
          position = -resetPoint;
        }
      } else {
        // Scrolling left (right-to-left)
        position -= speed / 100;
        if (position <= -resetPoint) {
          position = 0;
        }
      }

      scroller.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed, isRTL, direction]);

  return (
    <div
      className="relative max-w-[1000px] w-full overflow-hidden"
      style={{
        direction: "ltr",

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
              className="h-[35px] md:h-12 w-auto max-w-[99px] object-contain"
              priority={index < logos.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
