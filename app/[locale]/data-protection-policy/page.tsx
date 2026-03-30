"use client";

import { HeroSection } from "@/components/HeroSection";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const BulletItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Typography
    variant="p16"
    className={cn(
      "leading-[1em] text-text-4 ps-4 relative before:content-[''] before:absolute before:start-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full",
      className
    )}
  >
    {children}
  </Typography>
);

// Mapping index to specific class for numbered items to avoid dynamic class issues and keep strict typing/Tailwind support
const numberClasses: Record<number, string> = {
  1: "before:content-['1.']",
  2: "before:content-['2.']",
  3: "before:content-['3.']",
  4: "before:content-['4.']",
  5: "before:content-['5.']",
  6: "before:content-['6.']",
  7: "before:content-['7.']",
};
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const NumberedItem = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => (
  <Typography
    variant="p16"
    className={cn(
      "leading-[1.4em] text-text-4 ps-5 relative before:absolute before:start-0 before:top-0 before:font-normal",
      numberClasses[index] || ""
    )}
  >
    {children}
  </Typography>
);

export default function DataProtectionPolicyPage() {
  const t = useTranslations("dataProtection");

  // We use t.raw to get arrays for iteration, then use keys for rendering to support rich text if needed
  const principles = t.raw("sections.principles.items") as unknown[];
  const dataCollectionSections = t.raw("sections.dataCollection.sections") as {
    prefix: string;
    title: string;
    items: string[];
  }[];
  const processingItems = t.raw("sections.processing.items") as unknown[];
  const sharingItems = t.raw("sections.sharing.items") as unknown[];
  const protectingItems = t.raw("sections.protecting.items") as unknown[];
  const rightsItems = t.raw("sections.rights.items") as unknown[];
  const contactDetails = t.raw("sections.contact.details") as {
    label: string;
    value: string;
    isLink?: boolean;
    href?: string;
  }[];

  return (
    <div>
      <HeroSection
        badge={t("badge")}
        variant="secondary"
        className="min-h-[50vh] md:min-h-[50vh] lg:min-h-[60vh] pt-[120px] xl:px-[120px] px-6"
        title={
          <Typography
            variant="h1"
            className="leading-tight tracking-[0em] max-w-[700px] text-center"
          >
            <span className="text-[#F2994A]">{t("titlePart1")} </span>
            <span className="text-[#333333]">{t("titlePart2")}</span>
          </Typography>
        }
        description={""}
      />
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {" "}
        <section className="max-w-[1200px] mx-auto px-8 pb-[100px] space-y-16">
          {/* Introduction */}
          <div className="space-y-2">
            <Typography variant="h3" className="text-text-4">
              {t("sections.introduction.title")}
            </Typography>
            <Typography variant="p16" className="text-text-4">
              {t("sections.introduction.content")}
            </Typography>
          </div>

          {/* 1. Scope */}
          <div className="space-y-2">
            <Typography variant="h3" className="text-text-4">
              {t("sections.scope.title")}
            </Typography>
            <Typography variant="p16" className="text-text-4">
              {t("sections.scope.content")}
            </Typography>
          </div>

          {/* 2. Principles */}
          <div className="space-y-2">
            <Typography variant="h3" className="text-text-4">
              {t("sections.principles.title")}
            </Typography>
            <div className="space-y-6 mt-6">
              {principles.map((_, index) => (
                <Typography key={index} variant="p16" className="text-text-4">
                  <span className="font-bold block">
                    {t(`sections.principles.items.${index}.title`)}
                  </span>
                  {t(`sections.principles.items.${index}.description`)}
                </Typography>
              ))}
            </div>
          </div>

          {/* 3. Data Collection */}
          <div className="space-y-2">
            <Typography variant="h3" className="text-text-4">
              {t("sections.dataCollection.title")}
            </Typography>
            <Typography variant="p16" className="mb-4 text-text-4">
              {t("sections.dataCollection.intro")}
            </Typography>
            <div className="space-y-4">
              {dataCollectionSections.map((section, index) => (
                <div key={index} className="space-y-2">
                  <Typography variant="p16" className="font-bold text-text-4">
                    {t(`sections.dataCollection.sections.${index}.prefix`)}
                    <span className="ms-2">
                      {t(`sections.dataCollection.sections.${index}.title`)}
                    </span>
                  </Typography>
                  {section.items.map((_, i) => (
                    <BulletItem
                      key={i}
                      className={index === 0 && i === 1 ? "tracking-wide" : ""}
                    >
                      {t(
                        `sections.dataCollection.sections.${index}.items.${i}`
                      )}
                    </BulletItem>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 4. Processing */}
          <div className="space-y-2">
            <Typography variant="h3" className="text-text-4">
              {t("sections.processing.title")}
            </Typography>
            <Typography variant="p16" className="text-text-4 mb-5">
              {t("sections.processing.intro")}
            </Typography>
            <div className="space-y-4">
              <div className="space-y-2">
                {processingItems.map((_, index) => (
                  <BulletItem key={index}>
                    {t(`sections.processing.items.${index}`)}
                  </BulletItem>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Sharing */}
          <div className="space-y-2 w-[90%]">
            <Typography variant="h3" className="text-text-4">
              {t("sections.sharing.title")}
            </Typography>
            <Typography variant="p16" className="mb-5 text-text-4">
              {t("sections.sharing.intro")}
            </Typography>
            <div className="">
              {sharingItems.map((_, index) => (
                <NumberedItem key={index} index={index + 1}>
                  {t.rich(`sections.sharing.items.${index}`, {
                    bold: (chunks) => (
                      <span className="font-bold">{chunks}</span>
                    ),
                  })}
                </NumberedItem>
              ))}
            </div>
          </div>

          {/* 6. Protecting */}
          <div className="space-y-2">
            <Typography variant="h3" className="text-text-4">
              {t("sections.protecting.title")}
            </Typography>
            <Typography variant="p16" className="mb-4 text-text-4">
              {t("sections.protecting.intro")}
            </Typography>
            <div className="space-y-2">
              {protectingItems.map((_, index) => (
                <BulletItem key={index}>
                  {t(`sections.protecting.items.${index}`)}
                </BulletItem>
              ))}
            </div>
            <Typography variant="p16" className="mt-4 block text-text-4">
              {t("sections.protecting.footer")}
            </Typography>
          </div>

          {/* 7. Data Retention */}
          <div className="space-y-2">
            <Typography variant="h3" className="text-text-4">
              {t("sections.retention.title")}
            </Typography>
            <Typography variant="p16" className="text-text-4">
              {t("sections.retention.content")}
            </Typography>
          </div>

          {/* 8. Your Rights */}
          <div className="space-y-2">
            <Typography variant="h3" className="text-text-4">
              {t("sections.rights.title")}
            </Typography>
            <Typography variant="p16" className="mb-4 text-text-4">
              {t("sections.rights.intro")}
            </Typography>
            <div className="space-y-2">
              {rightsItems.map((_, index) => (
                <BulletItem key={index}>
                  <span className="font-bold me-2">
                    {t(`sections.rights.items.${index}.title`)}
                  </span>
                  {t(`sections.rights.items.${index}.description`)}
                </BulletItem>
              ))}
            </div>
            <Typography variant="p16" className="mt-4 block text-text-4">
              {t("sections.rights.footer.text")}
              <a
                href={`mailto:${t("sections.rights.footer.email")}`}
                className="text-primary underline"
              >
                {t("sections.rights.footer.email")}
              </a>
              .
            </Typography>
          </div>

          {/* 9. International Data Transfer */}
          <div className="space-y-2">
            <Typography variant="h3" className="text-text-4">
              {t("sections.transfer.title")}
            </Typography>
            <Typography variant="p16" className="text-text-4">
              {t("sections.transfer.content")}
            </Typography>
          </div>

          {/* 10. Policy Updates */}
          <div className="space-y-2">
            <Typography variant="h3" className="text-text-4">
              {t("sections.updates.title")}
            </Typography>
            <div>
              <Typography variant="p16" className="text-text-4">
                {t("sections.updates.text")}
              </Typography>
              <Typography variant="p16" className="text-text-4">
                {t("sections.updates.date")}
              </Typography>
            </div>
          </div>

          {/* 11. Contact Us */}
          <div className="space-y-2">
            <Typography variant="h3" className="text-text-4">
              {t("sections.contact.title")}
            </Typography>
            <Typography variant="p16" className="mb-4 text-text-4">
              {t("sections.contact.intro")}
            </Typography>
            <div className="space-y-2">
              {contactDetails.map((detail, index) => (
                <BulletItem key={index}>
                  <span className="me-2">
                    {t(`sections.contact.details.${index}.label`)}
                  </span>
                  {detail.isLink || detail.value?.includes("@") ? (
                    <a
                      href={
                        detail.href ||
                        `mailto:${t(`sections.contact.details.${index}.value`)}`
                      }
                      className="text-primary underline"
                    >
                      {t(`sections.contact.details.${index}.value`)}
                    </a>
                  ) : (
                    t(`sections.contact.details.${index}.value`)
                  )}
                </BulletItem>
              ))}
            </div>
            <Typography variant="p16" className="mt-4 block text-text-4">
              {t("sections.contact.footer")}
            </Typography>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
