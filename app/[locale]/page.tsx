"use client";

import {
  GoPayImpactShowcaseSection,
  HeroSection,
  PaymentChannelSection,
  OurClientsSection,
  HowGopayWorksSection,
  WhyClientsSection,
  GopayInNumbersSection,
} from "./sections";
import { GopayProductSuiteSection } from "./sections/GopayProductSuiteSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PaymentChannelSection />
      <GopayProductSuiteSection />
      <GoPayImpactShowcaseSection />
      <HowGopayWorksSection />
      <OurClientsSection />
      <WhyClientsSection />
      <GopayInNumbersSection />
      {/** OTHER SECTIONS HERE SHOSHO */}
    </>
  );
}
