"use client";

import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { LogosMarquee } from "@/components/LogosMarquee";
import { clientLogos } from "./data";

export function OurClientsSection() {
  const t = useTranslations("home.clients");

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-white pt-[50px] px-4">
      <div className="container mx-auto px-4">
        <motion.div
          className="w-full flex flex-col items-center justify-center"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {/* Title */}
          <Typography variant="h5" className="text-center mb-4 text-text-5">
            {t("title")}
          </Typography>

          {/* Partners Logos Marquee */}
          <div className="p-2.5">
            <LogosMarquee logos={clientLogos} speed={50} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
