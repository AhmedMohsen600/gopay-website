"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { DottedGridBackground } from "@/components/DottedGridBackground";
import { GooglePlayBadge } from "@/components/GooglePlayBadge";
import { AppStoreBadge } from "@/components/AppStoreBadge";

export function CTASection() {
  const t = useTranslations("cta");

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative py-16 sm:py-[72px] lg:py-[72px] xl:py-[100px] overflow-hidden isolate"
      style={{
        background:
          "linear-gradient(179deg, rgb(32, 37, 71) 0%, rgb(40, 45, 78) 90.40153434684684%)",
      }}
    >
      {/* Dotted grid background pattern */}
      <DottedGridBackground />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-5 md:space-y-10 ">
          {/* Main Heading */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[570px] mx-auto"
          >
            <Typography
              variant="h2"
              className="text-white text-[24px] sm:text-[36px]  xl:text-[50px] font-medium leading-tight tracking-tighter "
            >
              {t("title")}
            </Typography>
          </motion.div>

          {/* Customers Application */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Typography
              variant="p16"
              className="text-white/80 xl:text-base lg:text-sm text-sm font-medium mb-2"
            >
              {t("customersApp")}
            </Typography>

            {/* App Store Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#"
                className="hover:scale-105 transition-transform duration-200 inline-block"
                aria-label="Get it on Google Play"
              >
                <GooglePlayBadge />
              </a>

              <a
                href="#"
                className="hover:scale-105 transition-transform duration-200 inline-block"
                aria-label="Download on the App Store"
              >
                <AppStoreBadge />
              </a>
            </div>
          </motion.div>

          {/* Biller App */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <Typography
              variant="p16"
              className="text-white/80 xl:text-base lg:text-sm text-sm mb-2"
            >
              {t("billerApp")}
            </Typography>
            <div className="inline-block bg-[#ec95101a] p-1.5 rounded-full">
              <Typography variant="p12" className="text-[#ec9510] font-bold  ">
                {t("comingSoon")}
              </Typography>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
