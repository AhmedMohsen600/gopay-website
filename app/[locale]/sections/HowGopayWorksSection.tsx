"use client";

import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function HowGopayWorksSection() {
  const t = useTranslations("home.howGopayWorks");
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [startWidth, setStartWidth] = useState(1209.6);
  const [maxScale, setMaxScale] = useState(1.2);
  const [videoError, setVideoError] = useState(false);

  // Calculate responsive width and scale
  useEffect(() => {
    const calculateScale = () => {
      const viewportWidth = window.innerWidth;

      // On mobile/tablet, start at 80% width, on desktop use 1209.6px
      const initialWidth = viewportWidth < 1024 ? viewportWidth * 0.8 : 1209.6;
      setStartWidth(initialWidth);

      // Calculate scale to reach 100% viewport width
      const calculatedScale = viewportWidth / initialWidth;
      setMaxScale(calculatedScale);
    };

    calculateScale();
    window.addEventListener("resize", calculateScale);
    return () => window.removeEventListener("resize", calculateScale);
  }, []);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"], // Start when entering viewport, end when centered
  });

  // As you scroll DOWN, video grows from small (1) to large (maxScale)
  const scale = useTransform(scrollYProgress, [0, 1], [1, maxScale]);

  return (
    <section ref={sectionRef} className="bg-white py-14 md:py-40 min-h-screen">
      {/* Title Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-28">
          <Typography variant="h2" className="font-semibold tracking-tight">
            {t("title")} <span className="text-secondary">{t("gopay")}</span>{" "}
            {t("worksExplained")}
          </Typography>
        </div>
      </div>

      {/* Video Section - scales from start width to full viewport width */}
      <div className="flex justify-center">
        <motion.div
          style={{ scale, width: startWidth, transformOrigin: "center top" }}
          className="relative overflow-hidden"
        >
          {videoError ? (
            <div className="w-full aspect-video bg-gray-100 flex items-center justify-center text-gray-500">
              <p>Unable to load video. Please check your connection.</p>
            </div>
          ) : (
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              playsInline
              preload="metadata"
              onError={() => setVideoError(true)}
            >
              <source
                src="https://ifs.sa/wp-content/uploads/2022/11/GoPay_intro.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </motion.div>
      </div>
    </section>
  );
}
