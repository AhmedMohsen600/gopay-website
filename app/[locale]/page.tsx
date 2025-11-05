"use client";

import {
  GoPayImpactShowcaseSection,
  HeroSection,
  PaymentChannelSection,
} from "./sections";
import { GopayProductSuiteSection } from "./sections/GopayProductSuiteSection";
import { HowGopayWorksSection } from "./sections/HowGopayWorksSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PaymentChannelSection />
      <GopayProductSuiteSection />
      <GoPayImpactShowcaseSection />
      <HowGopayWorksSection />
      {/** OTHER SECTIONS HERE SHOSHO */}
    </>
  );
}
