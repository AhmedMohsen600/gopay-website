"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { HeroSection } from "@/components/HeroSection";

export default function TermsPage() {
  const t = useTranslations("terms");

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        badge="Terms"
        title={
          <Typography
            variant="h1"
            className="text-center leading-tight tracking-tight"
          >
            <span className="text-[#FF9500]">GoPay</span>{" "}
            <span className="text-secondary">
              Terms &amp; <br />
              Conditions
            </span>
          </Typography>
        }
        description={""}
      />

      {/* Terms Content Section */}
      <section className="px-6 pb-20 md:px-16 xl:pb-[120px] xl:px-[120px]">
        <div className="container mx-auto max-w-[1200px] space-y-16">
          {/* Introduction */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Typography variant="h3" className="text-black mb-4">
              {t("intro.title")}
            </Typography>
            <Typography variant="p16" className="text-primary mb-4">
              {t("intro.description")}
            </Typography>
            <Typography variant="p16" className="text-primary">
              {t("intro.subtitle")}
            </Typography>
          </motion.div>

          {/* Section 1: Definitions and Clarifications */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Typography variant="h3" className="text-black mb-6">
              {t("section1.title")}
            </Typography>

            {/* A - Definitions */}
            <Typography variant="h6" className="text-secondary mb-4">
              {t("section1.subsectionA.title")}
            </Typography>
            <Typography variant="p16" className="text-primary mb-6">
              {t("section1.subsectionA.intro")}
            </Typography>

            <div className="space-y-6 mb-6">
              <div>
                <Typography
                  variant="p16"
                  className="font-semibold text-secondary mb-2"
                >
                  {t("section1.subsectionA.company.title")}
                </Typography>
                <Typography variant="p16" className="text-primary">
                  {t("section1.subsectionA.company.description")}
                </Typography>
              </div>

              <div>
                <Typography
                  variant="p16"
                  className="font-semibold text-secondary mb-2"
                >
                  {t("section1.subsectionA.client.title")}
                </Typography>
                <Typography variant="p16" className="text-primary">
                  {t("section1.subsectionA.client.description")}
                </Typography>
              </div>

              <div>
                <Typography
                  variant="p16"
                  className="font-semibold text-secondary mb-2"
                >
                  {t("section1.subsectionA.paymentAccount.title")}
                </Typography>
                <Typography variant="p16" className="text-primary">
                  {t("section1.subsectionA.paymentAccount.description")}
                </Typography>
              </div>
            </div>

            {/* B - Clarifications */}
            <Typography variant="h6" className="text-secondary mb-4 mt-8">
              {t("section1.subsectionB.title")}
            </Typography>
            <Typography variant="p16" className="text-primary mb-4">
              {t("section1.subsectionB.intro")}
            </Typography>
            <ul className="space-y-2 list-disc pl-6">
              <li>
                <Typography variant="p16" className="text-primary">
                  {t("section1.subsectionB.item1")}
                </Typography>
              </li>
              <li>
                <Typography variant="p16" className="text-primary">
                  {t("section1.subsectionB.item2")}
                </Typography>
              </li>
            </ul>
          </motion.div>

          {/* Section 2: Preamble */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Typography variant="h3" className="text-black mb-6">
              {t("section2.title")}
            </Typography>
            <Typography variant="p16" className="text-primary mb-4">
              {t("section2.content")}
            </Typography>
            <Typography variant="p16" className="font-semibold text-secondary">
              {t("section2.note")}
            </Typography>
          </motion.div>

          {/* Section 3: Rights and Obligations */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Typography variant="h3" className="text-black mb-6">
              {t("section3.title")}
            </Typography>

            {/* A - Company's Obligations */}
            <Typography variant="h6" className="text-secondary mb-4">
              {t("section3.subsectionA.title")}
            </Typography>

            <div className="space-y-6 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num}>
                  <Typography variant="p16" className="text-primary">
                    <span className="font-semibold">
                      {num}. {t(`section3.subsectionA.item${num}.title`)}
                    </span>{" "}
                    {t(`section3.subsectionA.item${num}.description`)}
                  </Typography>
                </div>
              ))}
            </div>

            {/* B - Client's Obligations */}
            <Typography variant="h6" className="text-secondary mb-4 mt-8">
              {t("section3.subsectionB.title")}
            </Typography>

            <div className="space-y-6 mb-8">
              {[1, 2, 3, 4, 5, 6].map((num) => {
                const text = t(`section3.subsectionB.item${num}`);
                // Handle both English and Arabic company names
                const companyNameEn = "Inclusive Financial Solutions";
                const companyNameAr = "شركة الحلول المالية الشاملة";

                // Split by English or Arabic company name
                let parts: string[];
                let companyName: string;

                if (text.includes(companyNameEn)) {
                  parts = text.split(companyNameEn);
                  companyName = companyNameEn;
                } else if (text.includes(companyNameAr)) {
                  parts = text.split(companyNameAr);
                  companyName = companyNameAr;
                } else {
                  parts = [text];
                  companyName = "";
                }

                return (
                  <div key={num}>
                    <Typography variant="p16" className="text-primary">
                      {num}.{" "}
                      {parts.map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < parts.length - 1 && (
                            <span className="font-semibold">{companyName}</span>
                          )}
                        </span>
                      ))}
                    </Typography>
                  </div>
                );
              })}
            </div>

            {/* C - General Provisions */}
            <Typography variant="h6" className="text-secondary mb-4 mt-8">
              {t("section3.subsectionC.title")}
            </Typography>

            <div className="space-y-6">
              <Typography variant="p16" className="text-primary">
                {t("section3.subsectionC.notification")}
              </Typography>

              <div>
                <Typography variant="p16" className="text-primary mb-4">
                  {t("section3.subsectionC.dataSharing.intro")}
                </Typography>
                <ul className="space-y-2 list-disc pl-6 mb-4">
                  <li>
                    <Typography variant="p16" className="text-primary">
                      {t("section3.subsectionC.dataSharing.items.clientName")}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p16" className="text-primary">
                      {t(
                        "section3.subsectionC.dataSharing.items.accountNumber"
                      )}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p16" className="text-primary">
                      {t("section3.subsectionC.dataSharing.items.mobileNumber")}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p16" className="text-primary">
                      {t(
                        "section3.subsectionC.dataSharing.items.commercialReg"
                      )}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p16" className="text-primary">
                      {t(
                        "section3.subsectionC.dataSharing.items.taxCertificate"
                      )}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p16" className="text-primary">
                      {t("section3.subsectionC.dataSharing.items.email")}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p16" className="text-primary">
                      {t("section3.subsectionC.dataSharing.items.other")}
                    </Typography>
                  </li>
                </ul>
              </div>

              <Typography variant="p16" className="text-primary">
                {t("section3.subsectionC.severability")}
              </Typography>

              <Typography variant="p16" className="text-primary">
                {t("section3.subsectionC.duration")}
              </Typography>

              <Typography variant="p16" className="text-primary">
                {t("section3.subsectionC.jurisdiction")}
              </Typography>

              <Typography variant="p16" className="text-primary">
                {t("section3.subsectionC.language")}
              </Typography>
            </div>
          </motion.div>

          {/* Section 4: Undertakings and Declarations of Company */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Typography variant="h3" className="text-black mb-6">
              {t("section4.title")}
            </Typography>
            <div className="space-y-4">
              <Typography variant="p16" className="text-primary">
                {t("section4.intro")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section4.fairTreatment")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section4.confidentiality")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section4.security")}
              </Typography>
            </div>
          </motion.div>

          {/* Section 5: Undertakings and Declarations of Client */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Typography variant="h3" className="text-black mb-6">
              {t("section5.title")}
            </Typography>
            <div className="space-y-4">
              <Typography variant="p16" className="text-primary">
                {t("section5.intro")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section5.legalCompliance")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section5.responsibility")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section5.legitimateFunds")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section5.freezeRight")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section5.beneficiary")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section5.knownTransfers")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section5.acknowledgment")}
              </Typography>
            </div>
          </motion.div>

          {/* Section 6: Financial Terms and Conditions */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Typography variant="h3" className="text-black mb-6">
              {t("section6.title")}
            </Typography>
            <div className="space-y-4">
              <Typography variant="p16" className="text-primary">
                {t("section6.bankFees")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section6.aggregation")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section6.settlementDuration")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section6.invoiceLimits")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section6.minimumValue")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section6.packageValidity")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section6.renewalFees")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section6.vatExclusive")}
              </Typography>
              <Typography variant="p16" className="text-primary">
                {t("section6.nonRefundable")}
              </Typography>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
