"use client";
import { HeroBlurBackgrounds } from "@/components/HeroBlurBackgrounds";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function WhoWeAreHeroSection() {
  const t = useTranslations("whoWeAre");
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="relative min-h-[50vh] overflow-hidden px-6 md:min-h-[70vh] flex flex-col gap-3 md:gap-4 justify-center items-center mx-auto bg-[linear-gradient(#e6ebf2_5%,#fff_100%)]">
      <div className="absolute inset-0 z-0">
        <HeroBlurBackgrounds />
      </div>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="  z-10"
      >
        <Badge>{t("badge")}</Badge>
      </motion.div>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="  z-10"
      >
        <Typography
          variant="h1"
          className="font-medium xl:text-[62px] md:text-[50px] text-[34px]"
        >
          <span className="text-secondary">{t("titlePart1")} </span>
          {t("titlePart2")}
        </Typography>
      </motion.div>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="  z-10"
      >
        <Typography
          variant="p18"
          className=" text-center max-w-[700px] lg:text-lg md:text-[15px] text-[13px] text-primary tracking-tight leading-tight "
        >
          {t("description")}
        </Typography>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[182px] bg-linear-to-t from-white to-transparent" />
    </section>
  );
}
