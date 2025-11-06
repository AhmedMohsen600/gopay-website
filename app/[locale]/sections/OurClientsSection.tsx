"use client";

import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { clientLogos } from "./data";
import { motion, type Variants } from "framer-motion";

export function OurClientsSection() {
  const t = useTranslations("home.clients");

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <Typography variant="h2" className="font-semibold tracking-tight">
            {t("title")}
          </Typography>
        </motion.div>

        {/* Clients Grid - Centered with flex wrap for proper centering of last row */}
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-7 md:gap-x-16 md:gap-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center w-[calc(50%-1rem)] md:w-[calc(33.333%-2rem)] lg:w-[calc(20%-3.2rem)]"
                variants={itemVariants}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={90}
                  className="w-full h-auto max-h-[60px] md:max-h-[80px] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
