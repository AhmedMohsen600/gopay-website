"use client";
import { HeroSection } from "@/components/HeroSection";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { GoPayFeaturesSection } from "./components/gopay-features-section";

export default function FeaturesPage() {
  const t = useTranslations("features");

  return (
    <div>
      <HeroSection
        badge={<Badge>{t("badge")}</Badge>}
        variant="secondary"
        className="min-h-[50vh] md:min-h-[50vh] lg:min-h-[60vh] pt-[120px] xl:px-[120px] px-6"
        title={
          <Typography
            variant="h1"
            className="font-medium xl:text-[50px] md:text-[36px] text-[24px] leading-tight tracking-tighter"
          >
            <span className="text-[#F2994A]">{t("titlePart1")} </span>
            <span className="text-[#333333]">{t("titlePart2")}</span>
          </Typography>
        }
        description={t("description")}
      />
      <GoPayFeaturesSection />
    </div>
  );
}
