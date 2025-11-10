"use client";
import { HeroSection } from "@/components/HeroSection";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";

const interDisplay = Inter({
  subsets: ["greek", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-inter-display",
});

export default function GoInvoicesPricingPage() {
  const t = useTranslations("pricing.goInvoices");

  return (
    <div>
      {/* Hero Section - Uses Figtree */}
      <HeroSection
        badge={<Badge>{t("badge")}</Badge>}
        variant="secondary"
        className="min-h-[50vh] md:min-h-[50vh] lg:min-h-[60vh] pt-[120px] xl:px-[120px] px-6"
        title={
          <Typography
            variant="h1"
            className="font-medium xl:text-[50px] md:text-[36px] text-[24px] leading-tight tracking-tighter"
          >
            <span className="text-[#F2994A]">{t("titlePart1")}</span>
            <span className="text-[#333333]">{t("titlePart2")}</span>
          </Typography>
        }
        description={t("description")}
      />

      {/* Pricing content sections here - will use Inter when added */}
    </div>
  );
}
