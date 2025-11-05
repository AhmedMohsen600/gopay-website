"use client";
import { HeroSection } from "@/components/HeroSection";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export function WhoWeAreHeroSection() {
  const t = useTranslations("whoWeAre");

  return (
    <HeroSection
      badge={<Badge>{t("badge")}</Badge>}
      title={
        <Typography
          variant="h1"
          className="font-medium xl:text-[62px] md:text-[50px] text-[34px]"
        >
          <span className="text-secondary">{t("titlePart1")} </span>
          {t("titlePart2")}
        </Typography>
      }
      description={t("description")}
    />
  );
}
