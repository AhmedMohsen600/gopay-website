"use client";

import {
  GoPayImpactShowcaseSection,
  HeroSection,
  PaymentChannelSection,
  OurClientsSection,
  HowGopayWorksSection,
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
      {/** OTHER SECTIONS HERE SHOSHO */}
    </>
  );
}
