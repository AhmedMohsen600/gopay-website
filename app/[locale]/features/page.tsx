"use client";
import { HeroSection } from "@/components/HeroSection";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export default function FeaturesPage() {
  const t = useTranslations("features");

  return (
    <div>
      <HeroSection
        badge={<Badge>{t("badge")}</Badge>}
        variant="secondary"
        title={
          <Typography
            variant="h1"
            className="font-medium xl:text-[62px] md:text-[50px] text-[34px]"
          >
            <span className="text-[#F2994A]">{t("titlePart1")} </span>
            <span className="text-[#333333]">{t("titlePart2")}</span>
          </Typography>
        }
        description={t("description")}
      />
    </div>
  );
}
