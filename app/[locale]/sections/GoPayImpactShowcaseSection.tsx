"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { ImpactCard } from "../components";
import { impactCardsData } from "./data";

export function GoPayImpactShowcaseSection() {
  const t = useTranslations("home.impact");

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-primary py-[120px]">
      {/* Header */}
      <div className="container flex flex-col max-w-[800px] mx-auto items-center justify-center mb-12 sm:mb-14 md:mb-16">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <Typography variant="h2" className="text-center mb-6 text-white">
            <span className="text-secondary">{t("gopay")}</span> {t("and")}{" "}
            <span className="text-secondary">{t("gopayPlus")}</span>
            <br />
            {t("title")}
          </Typography>
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <Typography
            variant="p18"
            className="text-center max-w-[640px] text-[#c9c9c9]"
          >
            {t("description")}
          </Typography>
        </motion.div>
      </div>

      {/* Impact Cards Grid */}
      <div className="container mx-auto px-6 md:px-0 max-w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactCardsData.map((card, index) => (
            <ImpactCard
              key={card.id}
              title={t(`${card.id}.title`)}
              description={t(`${card.id}.description`)}
              metric={t(`${card.id}.metric`)}
              metricLabel={t(`${card.id}.metricLabel`)}
              iconType={card.iconType}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
