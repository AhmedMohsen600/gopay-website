"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { DottedGridBackground } from "@/components/DottedGridBackground";

export function CTASection() {
  const t = useTranslations("cta");

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative py-20 md:py-[100px]  overflow-hidden"
      style={{
        background:
          "linear-gradient(179deg, rgb(32, 37, 71) 0%, rgb(40, 45, 78) 90.40153434684684%)",
      }}
    >
      {/* Dotted grid background pattern */}
      <DottedGridBackground />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          {/* Main Heading */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              className="text-white text-[50px] font-medium leading-[1.1em]"
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
              className="text-white/80 font-medium mb-2"
            >
              {t("customersApp")}
            </Typography>

            {/* App Store Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#"
                className="bg-white rounded-xl px-6 py-3  h-[58px] hover:scale-105 transition-transform duration-200 inline-block"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626-2.564-2.491 2.565-2.491zM5.864 1.658L16.801 8.01 14.5 10.314 5.864 1.658z"
                      fill="#00C3FF"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-600 uppercase">
                      {t("getItOn")}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      Google Play
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="bg-white rounded-xl px-6 py-3 h-[58px] hover:scale-105 transition-transform duration-200 inline-block"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-600 uppercase">
                      {t("downloadOn")}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      App Store
                    </div>
                  </div>
                </div>
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
            <Typography variant="p16" className="text-white/80">
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
