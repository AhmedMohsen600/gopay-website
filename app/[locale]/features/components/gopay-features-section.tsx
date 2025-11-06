"use client";
import { useTranslations } from "next-intl";
import { featuresCardData } from "../data";
import FeatureCard from "./feature-card";
export function GoPayFeaturesSection() {
  const t = useTranslations("features");
  return (
    <section className="max-w-[1440px] mx-auto xl:px-10 xl:pt-16 xl:pb-[120px] md:px-16 md:py-20 py-14 px-6 ">
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1000px] mx-auto gap-6">
        {featuresCardData.map((feature, index) => (
          <FeatureCard
            key={index}
            imageVariant={feature.imageVariant}
            features={feature.featuresKeys.map((key) => t(key))}
            imageUrl={feature.imageUrl}
            imageAlt={t(feature.imageAltKey)}
            badge={t(feature.badgeKey)}
            title={t(feature.titleKey)}
            description={t(feature.descriptionKey)}
            isFullRow={feature.fullRow}
          />
        ))}
      </div>
    </section>
  );
}
