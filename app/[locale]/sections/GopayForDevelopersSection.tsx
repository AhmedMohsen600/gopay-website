"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useMediaQuery } from "@/hooks/use-media-query";

const CODE_CARD_IMAGE =
  "https://framerusercontent.com/images/ETpTQICv7le7q79QjMJE9KLHAQ.png?width=1120&height=972";

const cardScaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const contentScaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export function GopayForDevelopersSection() {
  const t = useTranslations("home.developers");
  const features = t.raw("features") as unknown;
  const featureItems = Array.isArray(features) ? (features as string[]) : [];
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1279px)");
  const yOffset = isMobile ? 80 : isTablet ? 150 : 220;

  console.log(yOffset);

  const imageSlideUpVariants = {
    hidden: { y: yOffset },
    visible: { y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-bg py-14 md:py-[80px] md:px-[64px] px-6 xl:px-0 xl:py-[120px]">
      <div className="container mx-auto max-w-[1000px]">
        <div className="mx-auto mb-12 max-w-[760px] text-center md:mb-16">
          <Typography variant="h2" className="mb-2 font-semibold text-text-4">
            <span className="text-secondary">{t("title.highlight")}</span>{" "}
            {t("title.rest")}
          </Typography>
          <Typography variant="p18" className="tracking-tighter">
            {t("subtitle")}
          </Typography>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
          <motion.div
            className="relative overflow-hidden rounded-[32px] bg-[#1b1d21] p-[32px_32px_0px]"
            variants={cardScaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography variant="h3" className="text-text-white mb-2">
              {t("card.title")}
            </Typography>
            <Typography variant="p18" className="text-text-white">
              {t("card.description")}
            </Typography>
            <div className="relative mx-auto mt-8 overflow-hidden rounded-[24px]">
              <motion.div
                variants={imageSlideUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: `-${yOffset}px` }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                key={yOffset}
              >
                <Image
                  src={CODE_CARD_IMAGE}
                  alt={t("card.imageAlt")}
                  width={560}
                  height={460}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-full w-full rounded-[20px] object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col"
            variants={contentScaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center w-fit px-3 py-2 rounded-sm bg-secondary text-white text-sm font-medium">
              {t("tag")}
            </div>

            <Typography variant="h2" className="text-text-4 my-4">
              {t("heading")}
            </Typography>

            <Typography variant="p18" className="text-text-3">
              {t("description")}
            </Typography>

            <ul className="flex flex-col mt-12 text-text-4">
              {featureItems.map((feature, index) => (
                <motion.li
                  key={feature}
                  className="flex text-text-3 items-center gap-1"
                  variants={featureItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.4 + index * 0.1,
                  }}
                >
                  <span>→</span>
                  <span className="text-[15px] tracking-tight md:text-[18px]">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Button className="mt-8 w-fit">{t("buttonText")}</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
