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
import { GopayForDevelopersSection } from "./sections/GopayForDevelopersSection";
import { GopayNewsSection } from "./sections/GopayNewsSection";
import { GopayProductSuiteSection } from "./sections/GopayProductSuiteSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PaymentChannelSection />
      <OurClientsSection />
      <GopayProductSuiteSection />
      <GoPayImpactShowcaseSection />
      <HowGopayWorksSection />
      <WhyClientsSection />
      <GopayInNumbersSection />
      <GopaySolutionsSection />
      <GopayNewsSection />
      <GopayForDevelopersSection />
      {/** OTHER SECTIONS HERE SHOSHO */}
    </>
  );
}
