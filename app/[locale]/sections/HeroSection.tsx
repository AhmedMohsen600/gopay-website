"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { AnimatedArrow } from "@/components/ui/animated-arrow";
import { HeroBackground } from "@/components/HeroBackground";
import { HeroBlurBackgrounds } from "@/components/HeroBlurBackgrounds";
import { LogosMarquee } from "@/components/LogosMarquee";
import { PaymentStatsSection } from "./PaymentStatsSection";

const clientLogos = [
  { src: "/images/clients/01.png", alt: "Client 1" },
  { src: "/images/clients/02.png", alt: "Client 2" },
  { src: "/images/clients/03.png", alt: "Client 3" },
  { src: "/images/clients/04.png", alt: "Client 4" },
  { src: "/images/clients/05.png", alt: "Client 5" },
  { src: "/images/clients/06.png", alt: "Client 6" },
  { src: "/images/clients/07.png", alt: "Client 7" },
  { src: "/images/clients/08.png", alt: "Client 8" },
  { src: "/images/clients/09.png", alt: "Client 9" },
  { src: "/images/clients/10.png", alt: "Client 10" },
  { src: "/images/clients/11.png", alt: "Client 11" },
  { src: "/images/clients/12.png", alt: "Client 12" },
  { src: "/images/clients/13.png", alt: "Client 13" },
  { src: "/images/clients/14.png", alt: "Client 14" },
  { src: "/images/clients/15.png", alt: "Client 15" },
  { src: "/images/clients/16.png", alt: "Client 16" },
  { src: "/images/clients/17.png", alt: "Client 17" },
  { src: "/images/clients/18.png", alt: "Client 18" },
  { src: "/images/clients/19.png", alt: "Client 19" },
  // { src: "/images/clients/20.png", alt: "Client 20" },
  // { src: "/images/clients/21.png", alt: "Client 21" },
  // { src: "/images/clients/22.png", alt: "Client 22" },
];

export function HeroSection() {
  const t = useTranslations("home");
  const tc = useTranslations("common");

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadInUpForSpan = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleHighlight = t("titleHighlight");
  const words = titleHighlight.split(" ");

  return (
    <>
      {/* Floating background - outside main content */}
      <HeroBackground />
      {/* Hero Section */}
      <section className="relative p-[180px_16px_240px] overflow-hidden items-center">
        <div className="relative container mx-auto">
          {/* Animated blur backgrounds */}
          <HeroBlurBackgrounds />
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Typography
              variant="h2"
              className="text-4xl md:text-6xl lg:text-[75px] tracking-tight leading-tight font-normal"
            >
              {/* Title appears first */}
              <motion.span
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-block"
              >
                {t("title")}
              </motion.span>
              <br />
              {/* TitleHighlight words appear one by one */}
              <span className="italic font-bold">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={fadInUpForSpan}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.7 + index * 0.2,
                    }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </Typography>

            {/* Subtitle */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 1.3, // After all title words
              }}
            >
              <Typography className="text-dark" variant="p18">
                {t("subtitle")}
              </Typography>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex gap-4 justify-center flex-wrap pt-6"
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 1.5,
              }}
            >
              <Button className="w-fit text-base">
                {tc("getStarted")}
                <AnimatedArrow />
              </Button>
              <Button variant="outline" className="text-base w-fit">
                {tc("pricingsPlans")}
                <AnimatedArrow className="text-current" />
              </Button>
            </motion.div>
          </div>

          {/* Trusted by section */}
          <motion.div
            className="mt-[90px] w-full flex flex-col items-center justify-center z-50"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 1.7,
            }}
          >
            <Typography variant="h5" className="text-dark text-center mb-4">
              {t("trustedBy")}
            </Typography>
            <LogosMarquee logos={clientLogos} speed={70} />
          </motion.div>
        </div>
        <PaymentStatsSection />
      </section>
    </>
  );
}
