"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { SolutionsCard } from "./solutions-card";
import {
  AlarmIcon,
  BankIcon,
  ChatDotsIcon,
  ComputerTowerIcon,
  CreditCardIcon,
  DatabaseIcon,
} from "@phosphor-icons/react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { PentagonIcon } from "lucide-react";
import {
  solutionsCardData,
  SolutionCardConfig,
  SolutionImageConfig,
} from "../data";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0 },
};

// Icon map to convert icon names to actual components
const iconMap: Record<string, React.ReactNode> = {
  DatabaseIcon: <DatabaseIcon size={28} className="text-secondary" />,
  CreditCardIcon: <CreditCardIcon size={28} className="text-secondary" />,
  ChatDotsIcon: <ChatDotsIcon size={28} className="text-secondary" />,
  BankIcon: <BankIcon size={28} className="text-secondary" />,
  AlarmIcon: <AlarmIcon size={28} className="text-secondary" />,
  ComputerTowerIcon: <ComputerTowerIcon size={28} className="text-secondary" />,
  PentagonIcon: <PentagonIcon size={28} className="text-secondary" />,
};

// Helper function to render image based on config
function renderImage(config: SolutionImageConfig) {
  const imageClassName = config.objectFit
    ? `object-${config.objectFit} ${config.objectPosition || ""}`
    : "";

  return (
    <div className="relative ">
      <AspectRatio
        ratio={config.ratio}
        className="rounded-t-2xl overflow-hidden"
      >
        <Image
          src={config.imageUrl}
          alt={config.imageAlt}
          fill
          className={imageClassName}
        />
      </AspectRatio>
      {config.gradientOverlay && (
        <div
          className={`absolute ${config.gradientOverlay.bottom} left-0 right-0 ${config.gradientOverlay.height} z-10 flex items-center justify-center bg-[linear-gradient(#f8f9fc00_62.3979%,#f8f9fc_100%)]`}
        ></div>
      )}
    </div>
  );
}

export function GoPaySolutionsSection() {
  const t = useTranslations("features.solutions");
  return (
    <section className="xl:px-10 xl:py-[120px] md:px-16 md:py-20 px-6 py-14 ">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-14">
          <Typography variant="h2" className="text-center text-text-5 mb-3">
            <span className="text-[#F2994A]">{t("titlePart1")}</span>
            <span> {t("titlePart2")}</span>
          </Typography>
          <Typography variant="p18" className="text-center  ">
            {t("description")}
          </Typography>
        </div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid md:grid-cols-9 gap-8 grid-cols-1 "
        >
          {solutionsCardData.map((solution: SolutionCardConfig, index) => (
            <SolutionsCard
              key={index}
              icon={iconMap[solution.iconName]}
              description={t(solution.descriptionKey)}
              title={t(solution.titleKey)}
              iconBreak={solution.iconBreak}
              className={solution.className}
              beforeTitle={
                solution.beforeTitleImage
                  ? renderImage(solution.beforeTitleImage)
                  : undefined
              }
              afterDescription={
                solution.afterDescriptionImage
                  ? renderImage(solution.afterDescriptionImage)
                  : undefined
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
