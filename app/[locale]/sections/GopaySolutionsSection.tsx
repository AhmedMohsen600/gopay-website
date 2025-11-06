"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { SolutionCard } from "../components/SolutionCard";

import { Button } from "@/components/ui/button";
import { AnimatedArrow } from "@/components/ui/animated-arrow";
import {
  Alarm,
  Bank,
  CaretRight,
  ChatText,
  CreditCard,
  Database,
  FileText,
  Pentagon,
  Table,
} from "@phosphor-icons/react/dist/ssr";

export function GopaySolutionsSection() {
  const t = useTranslations("home.gopaySolutions");

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const solutions = [
    {
      id: "integratedDashboard",
      icon: Database,
      title: t("items.integratedDashboard"),
    },
    {
      id: "multiplePaymentModes",
      icon: CreditCard,
      title: t("items.multiplePaymentModes"),
    },
    {
      id: "certifiedEInvoicing",
      icon: Table,
      title: t("items.certifiedEInvoicing"),
    },
    {
      id: "customSenderId",
      icon: ChatText,
      title: t("items.customSenderId"),
    },
    {
      id: "payoutDistribution",
      icon: Bank,
      title: t("items.payoutDistribution"),
    },
    {
      id: "realTimeTracking",
      icon: Alarm,
      title: t("items.realTimeTracking"),
    },
    {
      id: "directSystemIntegration",
      icon: FileText,
      title: t("items.directSystemIntegration"),
    },
    {
      id: "customInvoiceDesign",
      icon: Pentagon,
      title: t("items.customInvoiceDesign"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-[56px] px-[24px] md:py-[120px] md:px-[40px]">
      <div className="container mx-auto max-w-[1000px]">
        {/* Section Title */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <Typography variant="h2" className="text-text-5 mb-3">
            <span className="text-secondary">{t("gopay")}</span>{" "}
            <span className="text-text-5">{t("solutions")}</span>
          </Typography>
          <Typography variant="p18" className="text-text-3">
            {t("subtitle")}
          </Typography>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutions.map((solution) => (
            <motion.div key={solution.id} variants={cardVariants}>
              <SolutionCard icon={solution.icon} title={solution.title} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex justify-center"
        >
          <Button>
            {t("buttonText")}
            <AnimatedArrow icon={CaretRight} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
