"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { NewsCard } from "../components";
import { useMediaQuery } from "@/hooks/use-media-query";

export function GopayNewsSection() {
  const t = useTranslations("home.news");

  // Use media queries for responsive offset
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1279px)");

  // Determine offset based on screen size
  const yOffset = isMobile ? 50 : isTablet ? 80 : 110;

  const newsItems = [
    {
      id: "schoolExpo",
      imageSrc:
        "https://framerusercontent.com/images/pwOCQ86eV6uTDBY7fWUfJB09WU.jpg",
      imageAlt: t("items.schoolExpo.imageAlt"),
      title: t("items.schoolExpo.title"),
      description: t("items.schoolExpo.description"),
      date: t("items.schoolExpo.date"),
    },
    {
      id: "seamlessExhibition",
      imageSrc:
        "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
      imageAlt: t("items.seamlessExhibition.imageAlt"),
      title: t("items.seamlessExhibition.title"),
      description: t("items.seamlessExhibition.description"),
      date: t("items.seamlessExhibition.date"),
    },
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: yOffset, scale: 0.75 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 140,
        damping: 18,
        mass: 0.6,
      },
    },
  };

  return (
    <section className="xl:py-[120px] md:py-[80px] py-14 bg-white px-6 md:px-[64px]">
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col items-center justify-center">
          <Typography className="mb-3 font-medium" variant="h2">
            <span className="text-secondary">{t("title.highlight")}</span>{" "}
            {t("title.rest")}
          </Typography>
          <Typography variant="p18">{t("subtitle")}</Typography>
        </div>

        <motion.div
          className="grid gap-6 mx-auto max-w-[1000px] md:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: `-${yOffset}px`, amount: 0.25 }}
        >
          {newsItems.map((item) => (
            <motion.div key={item.id} variants={cardVariants}>
              <NewsCard
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
