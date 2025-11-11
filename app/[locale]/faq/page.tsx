"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Accordion } from "@/components/ui/accordion";
import { HeroSection } from "@/components/HeroSection";
import { buildFaqItems } from "./data";

export default function FAQPage() {
  const locale = useLocale();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const faqItems = buildFaqItems(locale);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        badge="FAQ"
        title={
          <Typography
            variant="h1"
            className="text-center leading-tight tracking-tight"
          >
            <span className="text-secondary">Frequently </span> <br /> Asked
            Questions
          </Typography>
        }
        description={""}
      />

      {/* FAQ Accordion Section */}
      <section className=" px-6 pb-20 md:px-16 xl:pb-[120px] xl:px-[120px]">
        <div className="container mx-auto max-w-[800px] ">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Accordion items={faqItems} allowMultiple={true} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
