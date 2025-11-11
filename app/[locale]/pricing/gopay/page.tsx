"use client";
import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { PricingTabSwitcher } from "../components/PricingTabSwitcher";
import { PricingCard } from "../components/PricingCard";
import { PricingFeaturesTable } from "../components/PricingFeaturesTable";
import { MobilePricingBar } from "../components/MobilePricingBar";
import { Inter } from "next/font/google";
import {
  getBasicPackages,
  getBusinessPackages,
  getBasicFeaturesComparison,
  getBusinessFeaturesComparison,
} from "./data";
import { Button } from "@/components/ui/button";
import { AnimatedArrow } from "@/components/ui/animated-arrow";

const interDisplay = Inter({
  subsets: ["greek", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-inter-display",
});

export default function GopayPricingPage() {
  const t = useTranslations("pricing.gopay");
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [t("tabs.basic"), t("tabs.business")];

  // Get packages data
  const basicPackages = getBasicPackages(t);
  const businessPackages = getBusinessPackages(t);
  const currentPackages = activeTab === 0 ? basicPackages : businessPackages;

  // Get features comparison data
  const basicFeaturesComparison = getBasicFeaturesComparison(t);
  const businessFeaturesComparison = getBusinessFeaturesComparison(t);

  const currentFeaturesComparison =
    activeTab === 0 ? basicFeaturesComparison : businessFeaturesComparison;

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
            className="font-medium xl:text-[62px] md:text-[36px] text-[24px] leading-tight tracking-tighter"
          >
            <span className="text-[#F2994A]">{t("titlePart1")} </span>
            <span className="text-[#333333]">{t("titlePart2")}</span>
          </Typography>
        }
        description={t("description")}
      />

      {/* Pricing Section - Uses Inter Display */}
      <section className="md:pt-16 py-0 px-4 md:px-6 bg-white">
        <div className="max-w-[1058.4px] mx-auto">
          {/* Tab Switcher */}
          <PricingTabSwitcher
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Desktop Sticky Pricing Cards - Horizontal Row */}
          <div className="hidden md:block md:sticky md:top-[90.5px] z-10">
            <div
              className={`flex flex-col md:flex-row gap-6 ${interDisplay.className}`}
            >
              {currentPackages.map((pkg, index) => (
                <PricingCard
                  index={index}
                  key={pkg.name}
                  name={pkg.name}
                  price={pkg.price}
                  billingPeriod={t("billedYearly")}
                  subtitle={pkg.subtitle}
                  description={pkg.description}
                  features={pkg.features}
                  isPopular={pkg.isPopular}
                  ctaText={t("subscribe")}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Mobile Non-Sticky Pricing Cards - Shows on mobile only */}
          <div className="md:hidden space-y-4 mb-6">
            {currentPackages.map((pkg, index) => (
              <div key={pkg.name} className={interDisplay.className}>
                <PricingCard
                  index={index}
                  name={pkg.name}
                  price={pkg.price}
                  billingPeriod={t("billedYearly")}
                  subtitle={pkg.subtitle}
                  description={pkg.description}
                  features={pkg.features}
                  isPopular={pkg.isPopular}
                  ctaText={t("subscribe")}
                  delay={0}
                />
              </div>
            ))}
          </div>

          {/* Mobile Sticky Pricing Bar - Shows on mobile only (sticky like desktop) */}
          <MobilePricingBar
            packages={currentPackages.map((pkg) => ({
              name: pkg.name,
              price: pkg.price,
              billingPeriod: t("billedYearly"),
              isPopular: pkg.isPopular,
            }))}
            ctaText={t("subscribe")}
          />

          {/* Features Comparison Table - Scrollable Below */}
          <div className={`mt-6 ${interDisplay.className}`}>
            <PricingFeaturesTable sections={currentFeaturesComparison} />
          </div>
        </div>
      </section>
      {/* Enterprise Excellence Section - Touches the table */}
      <section className="pt-6 max-w-[1058.4px] px-4 mx-auto pb-20">
        <div className="bg-primary flex flex-col md:flex-row gap-4 md:gap-5 p-4 md:p-8 rounded-[20px]">
          <div>
            <Typography variant="h3" className="text-white">
              {t("enterprise.title")}
            </Typography>
            <Typography
              variant="p18"
              className="text-[#D9D9D9] tracking-tighter mt-2 md:mt-4"
            >
              {t("enterprise.description")}
            </Typography>
          </div>
          <Button
            variant="outline"
            className="md:self-center self-start text-[12px] py-[6px] px-2 gap-1 md:text-[16px] md:h-[42.4px] h-[28.8px]"
          >
            {t("enterprise.buttonText")}
            <AnimatedArrow className="size-[11px] md:size-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
