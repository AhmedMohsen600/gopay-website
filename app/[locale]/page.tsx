"use client";

import {
  GoPayImpactShowcaseSection,
  HeroSection,
  PaymentChannelSection,
  OurClientsSection,
  HowGopayWorksSection,
  WhyClientsSection,
  GopayInNumbersSection,
  GopaySolutionsSection,
} from "./sections";
import { GopayNewsSection } from "./sections/GopayNewsSection";
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
      <GopaySolutionsSection />
      <GopayNewsSection />
      {/** OTHER SECTIONS HERE SHOSHO */}
    </>
  );
}
