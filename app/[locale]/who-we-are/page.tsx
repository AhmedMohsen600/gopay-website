import { WhoWeAreHeroSection } from "./components/who-we-are-hero-section";
import { WhatIsGoPaySection } from "./components/what-is-gopay-section";
import { GoPayVisionSection } from "./components/gopay-vision-section";
import { WhyChooseGoPay } from "./components/why-choose-gopay";
import { AboutIFSCombinedSection } from "./components/about-ifs-combined-section";

export default function WhoWeArePage() {
  return (
    <div className="bg-white">
      <WhoWeAreHeroSection />
      <WhatIsGoPaySection />
      <GoPayVisionSection />
      <WhyChooseGoPay />
      <AboutIFSCombinedSection />
    </div>
  );
}
