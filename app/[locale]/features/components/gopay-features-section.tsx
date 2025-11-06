import { featuresCardData } from "../data";
import FeatureCard from "./feature-card";
export function GoPayFeaturesSection() {
  return (
    <section className="max-w-[1440px] mx-auto xl:px-10 xl:pt-16 xl:pb-[120px] md:px-16 md:py-20 py-14 px-6 ">
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1000px] mx-auto gap-6">
        {featuresCardData.map((feature: (typeof featuresCardData)[0]) => (
          <FeatureCard
            key={feature.title}
            imageVariant={
              feature.imageVariant as
                | "dark-bg"
                | "light-1"
                | "light-2"
                | "light-3"
                | "light-4"
            }
            features={feature.features}
            imageUrl={feature.imageUrl}
            imageAlt={feature.imageAlt}
            badge={feature.badge}
            title={feature.title}
            description={feature.description}
            isFullRow={feature.fullRow}
          />
        ))}
      </div>
    </section>
  );
}
