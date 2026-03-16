"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { WHY_CHOOSE_FEATURES } from "../data";
import { useMediaQuery } from "@/hooks/use-media-query";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  // Use media queries for responsive offset
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1279px)");

  // Determine offset based on screen size
  const yOffset = isMobile ? 60 : isTablet ? 100 : 120;

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: `-${yOffset}px` }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        className="bg-[#fffc] rounded-2xl  md:p-5 flex flex-col gap-4 h-[150px] md:h-[200px] xl:h-[243px] p-4 xl:p-5"
      >
        <div className="text-primary  [&>svg]:size-7">{icon}</div>
        <div className="flex flex-col gap-2 mt-auto">
          <Typography
            variant="h5"
            className="font-medium text-[#1a1d21] md:text-lg  xl:text-2xl text-base leading-tight tracking-tight"
          >
            {title}
          </Typography>
          <Typography
            variant="p16"
            className="text-text-3 xl:text-base md:text-sm text-xs leading-relaxed tracking-tight  "
          >
            {description}
          </Typography>
        </div>
      </motion.div>
    </div>
  );
}

export function WhyChooseGoPay() {
  const t = useTranslations("whoWeAre.whyChoose");
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-14 md:py-20 md:px-16 xl:py-[160px] px-6 xl:px-[120px] bg-[linear-gradient(180deg,#182130_5%,#282d4e_75%)]">
      <div className="max-w-[1000px] mx-auto">
        {/* Title */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center  mb-8"
        >
          <Typography
            variant="h2"
            className="font-medium xl:text-[50px] md:text-[36px] text-2xl text-white tracking-tight leading-tight"
          >
            <span className="text-white">{t("titlePart1")} </span>
            <span className="text-secondary">{t("titlePart2")}</span>
          </Typography>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {/* First 3 items */}
          {WHY_CHOOSE_FEATURES.slice(0, 3).map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descriptionKey)}
              delay={0}
            />
          ))}

          {/* Last 2 items - wrap together to fill the row */}
          <div className="md:col-span-3 grid grid-cols-1  md:grid-cols-2 gap-6">
            {WHY_CHOOSE_FEATURES.slice(3, 5).map((feature, index) => (
              <FeatureCard
                key={index + 3}
                icon={feature.icon}
                title={t(feature.titleKey)}
                description={t(feature.descriptionKey)}
                delay={0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
