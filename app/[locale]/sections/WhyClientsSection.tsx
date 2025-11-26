"use client";

import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { motion, type Variants } from "framer-motion";
import {
  Smiley,
  PuzzlePiece,
  Lightbulb,
  Sliders,
  CodeSimple,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import { FeatureCard } from "../components/FeatureCard";

export function WhyClientsSection() {
  const t = useTranslations("home.whyClients");

  const features = [
    {
      icon: Smiley,
      title: t("features.easyToUse.title"),
      description: t("features.easyToUse.description"),
    },
    {
      icon: PuzzlePiece,
      title: t("features.allInOne.title"),
      description: t("features.allInOne.description"),
    },
    {
      icon: Lightbulb,
      title: t("features.smartScalable.title"),
      description: t("features.smartScalable.description"),
    },
    {
      icon: Sliders,
      title: t("features.flexible.title"),
      description: t("features.flexible.description"),
    },
    {
      icon: CodeSimple,
      title: t("features.developers.title"),
      description: t("features.developers.description"),
    },
    {
      icon: SealCheck,
      title: t("features.licensed.title"),
      description: t("features.licensed.description"),
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="bg-white py-20 flex items-center justify-center px-6 md:px-[64px] xl:px-0 xl:py-32">
      <div className="container xl:mx-auto">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12 md:mb-16 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <Typography
            variant="h2"
            className="font-medium md:max-w-[400px] xl:max-w-[590px] mx-auto tracking-tight mb-3"
          >
            {t("title.part1")}{" "}
            <span className="text-secondary">{t("title.gopay")}</span>{" "}
            {t("title.part2")}
          </Typography>
          <Typography
            variant="p18"
            className="text-primary max-w-[630px] mx-auto"
          >
            {t("description")}
          </Typography>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 max-w-[1000px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            // Alternating width pattern that reverses each row
            // Row 1: wide-narrow, Row 2: narrow-wide, Row 3: wide-narrow
            const pairIndex = Math.floor(index / 2); // Which row (0, 1, 2...)
            const positionInPair = index % 2; // Position in row (0 = first, 1 = second)
            const isEvenRow = pairIndex % 2 === 0;

            // Even rows: first is wider, odd rows: second is wider
            const isWider = isEvenRow
              ? positionInPair === 0
              : positionInPair === 1;
            const colSpan = isWider ? "md:col-span-3" : "md:col-span-2";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={colSpan}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
