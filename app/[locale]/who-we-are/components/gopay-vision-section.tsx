"use client";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function GoPayVisionSection() {
  const t = useTranslations("whoWeAre.vision");
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="relative pt-[100px] xl:pt-[200px] md:pb-20 pb-14 xl:pb-[180px] bg-white px-6 md:px-16   ">
      <div className="max-w-[1000px] mx-auto space-y-4">
        {/* Badge and Title - Right Aligned */}
        <div className="flex flex-col gap-4 ">
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
            className="flex "
          >
            <Typography
              variant="h2"
              className="font-medium xl:text-[50px] md:text-[36px] text-[24px]"
            >
              <span className="text-secondary">{t("titlePart1")} </span>
              <span className="text-primary">{t("titlePart2")}</span>
            </Typography>
          </motion.div>
        </div>

        {/* Vision Text - Centered */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex "
        >
          <Typography
            variant="p18"
            className="xl:text-lg  md:text-[15px] text-[13px]  text-primary opacity-80 leading-tight tracking-tight max-w-[850px] "
          >
            {t("description")}
          </Typography>
        </motion.div>
      </div>
    </section>
  );
}
