"use client";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";

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
    <section className="relative py-14 px-6  md:py-20 md:px-16  xl:py-[120px] bg-white">
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
          <h2 className="font-medium xl:text-[50px] md:text-[36px] text-[24px] xl:leading-[1.2] md:leading-[1.2] leading-[1.2]">
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
            className="text-primary xl:text-lg md:text-[15px] text-[13px] leading-tight tracking-tight text-center"
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
            className="text-[#0059ff] underline  xl:text-lg md:text-[15px] text-[13px] font-medium"
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
            className="border  bg-white overflow-hidden cursor-pointer md:w-[405px] md:h-[536px] w-[255px] h-[337px] mx-auto relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Image
              src="https://framerusercontent.com/images/yKSU9Zi5kDe8rl4RLMZ4zPwk8I.webp?width=592&height=784"
              alt={tLicense("imageAlt")}
              width={405}
              height={536}
              className="w-full h-full object-cover transition-transform duration-300 ease-out"
              style={{
                transform: isHovering ? `scale(1.3)` : "scale(1)",
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              }}
            />
          </div>
        </motion.div>
        <Typography
          variant="p18"
          className="text-primary xl:text-lg md:text-[15px] text-[13px] leading-tight tracking-tight text-center"
        >
          {/* This will always be static and will not be translated */}
          رقم الترخيص 43033966
        </Typography>
      </div>
    </section>
  );
}
