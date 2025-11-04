"use client";

import { HeroSection, PaymentChannelSection } from "./sections";
import { GopayProductSuiteSection } from "./sections/GopayProductSuiteSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PaymentChannelSection />
      <GopayProductSuiteSection />
      {/** OTHER SECTIONS HERE SHOSHO */}
    </>
  );
}
