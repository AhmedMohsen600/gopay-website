"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

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

export function LogosMarquee({
  logos,
  speed = 40,
  pauseOnHover = false,
  gradient = false,
}: LogosMarqueeProps) {
  return (
    <div className="relative max-w-[1000px] w-full">
      <Marquee
        pauseOnHover={pauseOnHover}
        gradient={gradient}
        speed={speed}
        className="[--gap:4rem]"
      >
        <div className="flex items-center gap-(--gap)">
          {logos.map((logo, index) => (
            <div key={index} className="w-[99px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={99}
                height={60}
                className="h-12 w-full object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
