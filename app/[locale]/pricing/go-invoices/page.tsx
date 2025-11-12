"use client";
import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { PricingTabSwitcher } from "../components/PricingTabSwitcher";
import { PricingCard } from "../components/PricingCard";
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
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [t("tabs.monthly"), t("tabs.yearly")];

  // Get packages based on active tab (0 = monthly, 1 = yearly)
  const packages = [
    {
      name: t("packages.basic.name"),
      price:
        activeTab === 0
          ? t("packages.basic.priceMonthly")
          : t("packages.basic.priceYearly"),
      subtitle: t("packages.basic.subtitle"),
      features: [t("packages.basic.features.0")],
      description: undefined,
    },
    {
      name: t("packages.advance.name"),
      price:
        activeTab === 0
          ? t("packages.advance.priceMonthly")
          : t("packages.advance.priceYearly"),
      subtitle: t("packages.advance.subtitle"),
      features: [
        t("packages.advance.features.0"),
        t("packages.advance.features.1"),
        t("packages.advance.features.2"),
      ],
      description: undefined,
    },
  ];

  // Get billing period text based on active tab
  const billingPeriod =
    activeTab === 0 ? t("billedMonthly") : t("billedYearly");

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
            <span className="text-[#F2994A]">{t("titlePart1")} </span>
            <span className="text-[#333333]">{t("titlePart2")}</span>
          </Typography>
        }
        description={t("description")}
      />

      {/* Pricing Section - Uses Inter Display */}
      <section className="md:pt-16 py-8 px-4 md:px-6 bg-white">
        <div className="max-w-[1008px] mx-auto">
          {/* Tab Switcher */}
          <PricingTabSwitcher
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Pricing Cards - Horizontal Row */}
          <div
            className={`flex flex-col md:flex-row gap-6 ${interDisplay.className}`}
          >
            {packages.map((pkg, index) => (
              <PricingCard
                key={index}
                index={index}
                name={pkg.name}
                price={pkg.price}
                billingPeriod={billingPeriod}
                subtitle={pkg.subtitle}
                description={pkg.description}
                features={pkg.features}
                isPopular={false}
                ctaText={t("subscribe")}
                delay={index * 0.1}
                disableScrollHiding={true}
                className="min-h-[271.13px]"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
