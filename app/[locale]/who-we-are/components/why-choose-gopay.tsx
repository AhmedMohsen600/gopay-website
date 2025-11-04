"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  ArrowsOutIcon,
  CpuIcon,
  ArrowsClockwiseIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        className="bg-[#F5F5F5] rounded-xl p-6 md:p-8 flex flex-col gap-4 h-full"
      >
        <div className="text-primary">{icon}</div>
        <Typography
          variant="h5"
          className="font-bold text-text-5 md:text-xl text-lg"
        >
          {title}
        </Typography>
        <Typography
          variant="p16"
          className="text-text-3 md:text-base text-sm leading-relaxed"
        >
          {description}
        </Typography>
      </motion.div>
    </div>
  );
}

export function WhyChooseGoPay() {
  const t = useTranslations("whoWeAre.whyChoose");
  const fadeInUpVariants = {
    hidden: { opacity: 1, y: 90 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <ArrowsOutIcon size={48} weight="duotone" />,
      titleKey: "integratedSolution.title",
      descriptionKey: "integratedSolution.description",
    },
    {
      icon: <CpuIcon size={48} weight="duotone" />,
      titleKey: "innovativeTechnology.title",
      descriptionKey: "innovativeTechnology.description",
    },
    {
      icon: <ArrowsClockwiseIcon size={48} weight="duotone" />,
      titleKey: "flexiblePlatform.title",
      descriptionKey: "flexiblePlatform.description",
    },
    {
      icon: <BriefcaseIcon size={48} weight="duotone" />,
      titleKey: "effectiveTools.title",
      descriptionKey: "effectiveTools.description",
    },
    {
      icon: <ShieldCheckIcon size={48} weight="duotone" />,
      titleKey: "trustedLicensed.title",
      descriptionKey: "trustedLicensed.description",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 px-6 md:px-16 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <Typography
            variant="h2"
            className="font-medium xl:text-[50px] md:text-[40px] text-[32px]"
          >
            <span className="text-white">{t("titlePart1")} </span>
            <span className="text-secondary">{t("titlePart2")}</span>
          </Typography>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* First 3 items */}
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descriptionKey)}
              delay={0}
            />
          ))}

          {/* Last 2 items - wrap together to fill the row */}
          <div className="lg:col-span-3 lg:grid lg:grid-cols-2 lg:gap-6 md:gap-8">
            {features.slice(3, 5).map((feature, index) => (
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
