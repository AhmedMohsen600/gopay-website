"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function AboutIFSCombinedSection() {
  const t = useTranslations("whoWeAre.aboutIFS");
  const tLicense = useTranslations("whoWeAre.samaLicense");
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 px-6 md:px-16 bg-white">
      <div className="max-w-[1000px] mx-auto space-y-4">
        {/* About IFS Title and Description */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center "
        >
          <h2 className="font-medium xl:text-[50px] md:text-[40px] text-[32px] xl:leading-[1.2] md:leading-[1.2] leading-[1.2]">
            <span className="text-primary">{t("titlePart1")} </span>
            <span className="text-secondary">{t("titlePart2")}</span>
            <br />
            <span className="text-secondary">{t("titlePart3")} </span>
            <span className="text-primary">{t("titlePart4")}</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="max-w-[850px] mx-auto"
        >
          <Typography
            variant="p18"
            className="text-primary xl:text-lg md:text-base text-sm leading-tight tracking-tight text-center"
          >
            {t("description")}
          </Typography>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center "
        >
          <a
            href={t("websiteUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline md:text-base text-sm font-medium"
          >
            {t("websiteLink")}
          </a>
        </motion.div>

        {/* SAMA License Document */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="border-[6px] md:border bg-white overflow-hidden cursor-pointer w-[405px] h-[536px] mx-auto"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src="https://framerusercontent.com/images/yKSU9Zi5kDe8rl4RLMZ4zPwk8I.webp?width=592&height=784"
              alt={tLicense("imageAlt")}
              className="w-full h-full object-cover transition-transform duration-300 ease-out"
              style={{
                transform: isHovering ? `scale(1.3)` : "scale(1)",
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
