"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { StatNumberCard } from "../components";

export function GopayInNumbersSection() {
  const t = useTranslations("home.gopayInNumbers");

  const fadeInUpVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cardWrapperVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const allStats = [
    {
      id: "totalTransactions",
      titleKey: "totalTransactions",
      value: t("totalTransactionsValue"),
      showSarIcon: true,
      colSpan: "lg:col-span-3", // wider on desktop
    },
    {
      id: "strategicPartners",
      titleKey: "strategicPartners",
      value: t("strategicPartnersValue"),
      colSpan: "lg:col-span-2", // narrower on desktop
    },
    {
      id: "beneficiarySectors",
      titleKey: "beneficiarySectors",
      value: t("beneficiarySectorsValue"),
      colSpan: "lg:col-span-2", // narrower on desktop
    },
    {
      id: "issuers",
      titleKey: "issuers",
      value: t("issuersValue"),
      colSpan: "lg:col-span-2", // narrower on desktop
    },
    {
      id: "citiesCovered",
      titleKey: "citiesCovered",
      value: t("citiesCoveredValue"),
      colSpan: "lg:col-span-2", // narrower on desktop
    },
    {
      id: "endCustomers",
      titleKey: "endCustomers",
      value: t("endCustomersValue"),
      colSpan: "lg:col-span-3", // wider on desktop
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(142deg,#182130_5%,#282d4e_75%)] shadow-[0_25px_45px_#9882fb4d] p-[56px_24px] md:p-[80px_64px] xl:p-[100px_120px_120px]">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-6 md:mb-8 xl:mb-10"
        >
          <Typography variant="h2" className="text-white">
            <span className="text-secondary">{t("gopay")}</span>{" "}
            <span className="text-white">{t("inNumbers")}</span>
          </Typography>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="mx-auto grid max-w-[1020px] grid-cols-2 gap-4 lg:grid-cols-7 lg:gap-6"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {allStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className={stat.colSpan}
              variants={cardWrapperVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <StatNumberCard
                title={t(stat.titleKey)}
                value={stat.value}
                showSarIcon={stat.showSarIcon}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
