"use client";
import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { PricingTabSwitcher } from "../components/PricingTabSwitcher";
import { PricingCard } from "../components/PricingCard";
import { PricingFeaturesTable } from "../components/PricingFeaturesTable";
import { Inter } from "next/font/google";
import {
  Stack,
  Bell,
  DeviceMobile,
  Megaphone,
  CreditCard,
  CalendarCheck,
} from "@phosphor-icons/react/dist/ssr";

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

  // Basic Packages Data
  const basicPackages = [
    {
      name: t("basicPackages.starter.name"),
      price: t("basicPackages.starter.price"),
      subtitle: t("basicPackages.starter.subtitle"),
      description: t("basicPackages.starter.description"),
      features: [
        t("basicPackages.starter.features.0"),
        t("basicPackages.starter.features.1"),
        t("basicPackages.starter.features.2"),
      ],
    },
    {
      name: t("basicPackages.basic.name"),
      price: t("basicPackages.basic.price"),
      subtitle: t("basicPackages.basic.subtitle"),
      description: t("basicPackages.basic.description"),
      features: [
        t("basicPackages.basic.features.0"),
        t("basicPackages.basic.features.1"),
        t("basicPackages.basic.features.2"),
      ],
    },
    {
      name: t("basicPackages.pro.name"),
      price: t("basicPackages.pro.price"),
      subtitle: t("basicPackages.pro.subtitle"),
      description: t("basicPackages.pro.description"),
      features: [
        t("basicPackages.pro.features.0"),
        t("basicPackages.pro.features.1"),
        t("basicPackages.pro.features.2"),
      ],
      isPopular: true,
    },
  ];

  // Business Packages Data
  const businessPackages = [
    {
      name: t("businessPackages.proPlus.name"),
      price: t("businessPackages.proPlus.price"),
      features: [
        t("businessPackages.proPlus.features.0"),
        t("businessPackages.proPlus.features.1"),
        t("businessPackages.proPlus.features.2"),
      ],
      subtitle: undefined,
      description: undefined,
      isPopular: false,
    },
    {
      name: t("businessPackages.premium.name"),
      price: t("businessPackages.premium.price"),
      features: [
        t("businessPackages.premium.features.0"),
        t("businessPackages.premium.features.1"),
        t("businessPackages.premium.features.2"),
      ],
      subtitle: undefined,
      description: undefined,
      isPopular: false,
    },
    {
      name: t("businessPackages.premiumPlus.name"),
      price: t("businessPackages.premiumPlus.price"),
      features: [
        t("businessPackages.premiumPlus.features.0"),
        t("businessPackages.premiumPlus.features.1"),
        t("businessPackages.premiumPlus.features.2"),
      ],
      subtitle: undefined,
      description: undefined,
      isPopular: false,
    },
  ];

  const currentPackages = activeTab === 0 ? basicPackages : businessPackages;

  // Features comparison data - Basic Packages
  const basicFeaturesComparison = [
    {
      icon: <Stack size={24} weight="duotone" />,
      title: t("featuresComparison.mainFeatures.title"),
      columns: [
        {
          features: [
            {
              text: t("featuresComparison.mainFeatures.starter.transactions"),
              included: true,
            },
            {
              text: t("featuresComparison.mainFeatures.starter.einvoicing"),
              included: false,
            },
          ],
        },
        {
          features: [
            {
              text: t("featuresComparison.mainFeatures.basic.transactions"),
              included: true,
            },
            {
              text: t("featuresComparison.mainFeatures.basic.einvoicing"),
              included: false,
            },
          ],
        },
        {
          features: [
            {
              text: t("featuresComparison.mainFeatures.pro.transactions"),
              included: true,
            },
            {
              text: t("featuresComparison.mainFeatures.pro.einvoicing"),
              included: false,
            },
          ],
        },
      ],
    },
    {
      icon: <CreditCard size={24} weight="duotone" />,
      title: t("featuresComparison.paymentFeatures.title"),
      columns: [
        {
          features: [
            {
              text: t("featuresComparison.paymentFeatures.recurring"),
              included: true,
            },
            {
              text: t("featuresComparison.paymentFeatures.partial"),
              included: true,
            },
            {
              text: t("featuresComparison.paymentFeatures.advanced"),
              included: false,
            },
          ],
        },
        {
          features: [
            {
              text: t("featuresComparison.paymentFeatures.recurring"),
              included: true,
            },
            {
              text: t("featuresComparison.paymentFeatures.partial"),
              included: true,
            },
            {
              text: t("featuresComparison.paymentFeatures.advanced"),
              included: false,
            },
          ],
        },
        {
          features: [
            {
              text: t("featuresComparison.paymentFeatures.recurring"),
              included: true,
            },
            {
              text: t("featuresComparison.paymentFeatures.partial"),
              included: true,
            },
            {
              text: t("featuresComparison.paymentFeatures.advanced"),
              included: false,
            },
          ],
        },
      ],
    },
    {
      icon: <Bell size={24} weight="duotone" />,
      title: t("featuresComparison.notifications.title"),
      columns: [
        {
          features: [
            {
              text: t("featuresComparison.notifications.starter"),
              included: true,
            },
            {
              text: t("featuresComparison.notifications.customSender"),
              included: false,
            },
          ],
        },
        {
          features: [
            {
              text: t("featuresComparison.notifications.basic"),
              included: true,
            },
            {
              text: t("featuresComparison.notifications.customSender"),
              included: false,
            },
          ],
        },
        {
          features: [
            {
              text: t("featuresComparison.notifications.pro"),
              included: true,
            },
            {
              text: t("featuresComparison.notifications.customSender"),
              included: false,
            },
          ],
        },
      ],
    },
    {
      icon: <DeviceMobile size={24} weight="duotone" />,
      title: t("featuresComparison.mobileApps.title"),
      columns: [
        {
          features: [
            {
              text: t("featuresComparison.mobileApps.merchant"),
              included: true,
            },
            {
              text: t("featuresComparison.mobileApps.customer"),
              included: true,
            },
          ],
        },
        {
          features: [
            {
              text: t("featuresComparison.mobileApps.merchant"),
              included: true,
            },
            {
              text: t("featuresComparison.mobileApps.customer"),
              included: true,
            },
          ],
        },
        {
          features: [
            {
              text: t("featuresComparison.mobileApps.merchant"),
              included: true,
            },
            {
              text: t("featuresComparison.mobileApps.customer"),
              included: true,
            },
          ],
        },
      ],
    },
    {
      icon: <Megaphone size={24} weight="duotone" />,
      title: t("featuresComparison.marketing.title"),
      columns: [
        {
          features: [
            { text: t("featuresComparison.marketing.goads"), included: false },
          ],
        },
        {
          features: [
            { text: t("featuresComparison.marketing.goads"), included: false },
          ],
        },
        {
          features: [
            { text: t("featuresComparison.marketing.goads"), included: false },
          ],
        },
      ],
    },
    {
      icon: <CreditCard size={24} weight="duotone" />,
      title: t("featuresComparison.limits.title"),
      columns: [
        {
          features: [
            { text: t("featuresComparison.limits.minimum"), included: true },
            { text: t("featuresComparison.limits.maximum"), included: true },
          ],
        },
        {
          features: [
            { text: t("featuresComparison.limits.minimum"), included: true },
            { text: t("featuresComparison.limits.maximum"), included: true },
          ],
        },
        {
          features: [
            { text: t("featuresComparison.limits.minimum"), included: true },
            { text: t("featuresComparison.limits.maximum"), included: true },
          ],
        },
      ],
    },
    {
      icon: <Stack size={24} weight="duotone" />,
      title: t("featuresComparison.transactionPricing.title"),
      columns: [
        {
          features: [
            {
              text: t(
                "featuresComparison.transactionPricing.starter.transaction"
              ),
              included: true,
            },
            {
              text: t(
                "featuresComparison.transactionPricing.starter.notification"
              ),
              included: true,
            },
          ],
        },
        {
          features: [
            {
              text: t(
                "featuresComparison.transactionPricing.basic.transaction"
              ),
              included: true,
            },
            {
              text: t(
                "featuresComparison.transactionPricing.basic.notification"
              ),
              included: true,
            },
          ],
        },
        {
          features: [
            {
              text: t("featuresComparison.transactionPricing.pro.transaction"),
              included: true,
            },
            {
              text: t("featuresComparison.transactionPricing.pro.notification"),
              included: true,
            },
          ],
        },
      ],
    },
    {
      icon: <CalendarCheck size={24} weight="duotone" />,
      title: t("featuresComparison.validity.title"),
      columns: [
        {
          features: [
            {
              text: t("featuresComparison.validity.duration"),
              included: true,
            },
          ],
        },
        {
          features: [
            {
              text: t("featuresComparison.validity.duration"),
              included: true,
            },
          ],
        },
        {
          features: [
            {
              text: t("featuresComparison.validity.duration"),
              included: true,
            },
          ],
        },
      ],
    },
  ];

  const currentFeaturesComparison =
    activeTab === 0 ? basicFeaturesComparison : basicFeaturesComparison;

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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1058.4px] mx-auto">
          {/* Tab Switcher */}
          <PricingTabSwitcher
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Sticky Pricing Cards - Horizontal Row */}
          <div className="sticky top-[90.5px] z-10">
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

          {/* Features Comparison Table - Scrollable Below */}
          <div className={`mt-6 ${interDisplay.className}`}>
            <PricingFeaturesTable sections={currentFeaturesComparison} />
          </div>
        </div>
      </section>
    </div>
  );
}
