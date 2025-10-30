"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useEffect, useRef } from "react";

interface Logo {
  src: string;
  alt: string;
}

interface LogosMarqueeProps {
  logos: Logo[];
  speed?: number;
  pauseOnHover?: boolean;
  gradient?: boolean;
}

export function LogosMarquee({ logos, speed = 40 }: LogosMarqueeProps) {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let scrollPosition = 0;
    const scrollSpeed = speed / 100;

    const animate = () => {
      if (!scroller) return;

      if (isRTL) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scroller.scrollWidth / 2) scrollPosition = 0;
      } else {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scroller.scrollWidth / 2) scrollPosition = 0;
      }

      scroller.style.transform = `translateX(${
        isRTL ? scrollPosition : -scrollPosition
      }px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, isRTL]);

  return (
    <div className="relative max-w-[1000px] w-full overflow-hidden">
      <div ref={scrollerRef} className="flex will-change-transform">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="shrink-0 px-8"
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
