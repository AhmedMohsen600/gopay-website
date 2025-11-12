"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { StepCard } from "@/components/StepCard";
import { PricingTabSwitcher } from "@/app/[locale]/pricing/components/PricingTabSwitcher";
import { motion, type Variants } from "framer-motion";
import { Storefront, UserCircle } from "@phosphor-icons/react/dist/ssr";

export default function InvoicesPage() {
  const t = useTranslations("invoices");
  const [activeTab, setActiveTab] = useState(0);

  const recurringSteps = [
    {
      icon: <Storefront size={70} className="w-[46px] h-[43px]" />,
      title: t("recurring.step1.title"),
      description: t("recurring.step1.description"),
    },
    {
      icon: <Storefront size={70} className="w-[46px] h-[43px]" />,
      title: t("recurring.step2.title"),
      description: t("recurring.step2.description"),
    },
    {
      iconText: "GoPay",
      title: t("recurring.step3.title"),
      description: t("recurring.step3.description"),
    },
    {
      icon: <UserCircle size={70} className="w-[46px] h-[43px]" />,
      title: t("recurring.step4.title"),
      description: t("recurring.step4.description"),
    },
    {
      icon: <UserCircle size={70} className="w-[46px] h-[43px]" />,
      title: t("recurring.step5.title"),
      description: t("recurring.step5.description"),
    },
    {
      icon: <UserCircle size={70} className="w-[46px] h-[43px]" />,
      title: t("recurring.step6.title"),
      description: t("recurring.step6.description"),
    },
    {
      iconText: "GoPay",
      title: t("recurring.step7.title"),
      description: t("recurring.step7.description"),
    },
  ];

  const onetimeSteps = [
    {
      icon: <Storefront size={70} className="w-[46px] h-[43px]" />,
      title: t("onetime.step1.title"),
      description: t("onetime.step1.description"),
    },
    {
      iconText: "GoPay",
      title: t("onetime.step2.title"),
      description: t("onetime.step2.description"),
    },
    {
      icon: <UserCircle size={70} className="w-[46px] h-[43px]" />,
      title: t("onetime.step3.title"),
      description: t("onetime.step3.description"),
    },
    {
      icon: <UserCircle size={70} className="w-[46px] h-[43px]" />,
      title: t("onetime.step4.title"),
      description: t("onetime.step4.description"),
    },
    {
      iconText: "GoPay",
      title: t("onetime.step5.title"),
      description: t("onetime.step5.description"),
    },
  ];

  const tabs = [t("tabs.recurring"), t("tabs.onetime")];
  const currentSteps = activeTab === 0 ? recurringSteps : onetimeSteps;

  return (
    <section
      className="xl:px-[120px] xl:pt-[200px] xl:pb-[160px] md:px-16 md:pt-24 md:pb-20 px-6 pt-32 pb-16"
      style={{
        background: "linear-gradient(rgb(17, 23, 33) 0%, rgb(32, 37, 71) 100%)",
      }}
    >
      <div className="max-w-[1000x] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge>{t("badge")}</Badge>

          <Typography variant="h1" className="text-[#F2994A] mt-6 mb-9">
            {t("title")}
          </Typography>
        </div>

        {/* Tabs */}
        <PricingTabSwitcher
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Steps Container */}
        <div className="flex flex-col items-center mt-10 max-w-[636px] mx-auto">
          {currentSteps.map((step, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <StepCard
                icon={step.icon}
                iconText={step.iconText}
                title={step.title}
                description={step.description}
              />
              {/* Connector Line */}
              {index < currentSteps.length - 1 && (
                <motion.div
                  className="w-[2px] h-[100px] mx-auto my-0 border-s-2 border-dashed border-[#F2994A]"
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.3,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
