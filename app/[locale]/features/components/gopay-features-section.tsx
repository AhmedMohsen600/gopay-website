import FeatureCard from "./feature-card/feature-card";
export function GoPayFeaturesSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-10 pt-16 pb-[120px]">
      <div className="grid grid-cols-2 max-w-[1000px] mx-auto">
        <FeatureCard isFullRow imageVariant="dark-bg" />
      </div>
    </section>
  );
}
