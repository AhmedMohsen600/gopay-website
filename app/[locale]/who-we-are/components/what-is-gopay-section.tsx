"use client";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function WhatIsGoPaySection() {
  const t = useTranslations("whoWeAre.whatIsGoPay");
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="relative md:pt-20 xl:pt-[180px] bg-white md:px-16 px-6 pt-14 ">
      <div className="max-w-[1000px] mx-auto space-y-4">
        {/* Badge and Title */}
        <div className="flex flex-col items-start  gap-4 ">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Badge
              variant={"secondary"}
              className="md:h-10 h-[27px] md:text-base text-[11px]"
            >
              {t("badge")}
            </Badge>
          </motion.div>
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              className="font-medium xl:text-[50px] md:text-[36px] text-[24px]"
            >
              <span className="text-primary">{t("titlePart1")} </span>
              <span className="text-secondary">{t("titlePart2")}</span>
            </Typography>
          </motion.div>
        </div>
        <div className="space-y-5">
          {/* First Large Text Block */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-8 md:mb-10"
          >
            <Typography
              variant="p18"
              className="xl:text-lg  md:text-[15px] text-[13px] text-primary opacity-80 leading-tight tracking-tight max-w-[850px]"
            >
              {t("leftText")}
            </Typography>
          </motion.div>

          {/* Second Large Text Block */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <Typography
              variant="p18"
              className="xl:text-lg  md:text-[15px] text-[13px] text-primary opacity-80 leading-tight tracking-tight max-w-[850px] "
            >
              {t("rightText")}
            </Typography>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
