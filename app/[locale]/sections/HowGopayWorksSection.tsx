"use client";

import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function HowGopayWorksSection() {
  const t = useTranslations("home.howGopayWorks");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [maxScale, setMaxScale] = useState(1.6);

  // Calculate max scale based on viewport width
  useEffect(() => {
    const calculateMaxScale = () => {
      const viewportWidth = window.innerWidth;
      const startWidth = 1209.6;

      const calculatedScale = viewportWidth / startWidth;
      setMaxScale(Math.min(calculatedScale, 2));
    };

    calculateMaxScale();
    window.addEventListener("resize", calculateMaxScale);
    return () => window.removeEventListener("resize", calculateMaxScale);
  }, []);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end 0.2"], // Start animation when section is halfway in viewport, end when almost out
  });

  // Map scroll progress to scale - grows from 1 to maxScale (100% viewport width)
  const scale = useTransform(
    scrollYProgress,
    [0, 1], // Smooth transition from start to end
    [1, maxScale] // Scale from original size to viewport width
  );

  return (
    <section ref={sectionRef} className="bg-white py-40 min-h-screen">
      {/* Title Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-28">
          <Typography variant="h2" className="font-semibold tracking-tight">
            {t("title")} <span className="text-secondary">{t("gopay")}</span>{" "}
            {t("worksExplained")}
          </Typography>
        </div>
      </div>

      {/* Video Section - scales from 1209.6px to full viewport width */}
      <div className="flex justify-center">
        <motion.div
          style={{ scale }}
          className="relative overflow-hidden w-[1209.6px]"
        >
          <video
            className="w-full h-auto"
            controls
            playsInline
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000000' width='1920' height='1080'/%3E%3C/svg%3E"
          >
            <source
              src="https://ifs.sa/wp-content/uploads/2022/11/GoPay_intro.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
