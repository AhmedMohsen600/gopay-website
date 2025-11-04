"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { ProductCard } from "../components";
import { productSuiteData } from "./data";

export function GopayProductSuiteSection() {
  const t = useTranslations("home.productSuite");

  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Define custom padding for container
  const getContainerPadding = (productId: string) => {
    switch (productId) {
      case "gopay":
        return "p-0 sm:p-0 md:p-0 md:p-0 min-h-[200px] sm:min-h-[250px] md:min-h-[310px] flex items-end justify-center";
      case "goinvoice":
        return "";
      case "gosplit":
        return "p-[0px_16px] sm:p-[0px_24px] md:p-[0px_32px] min-h-[200px] sm:min-h-[250px] md:min-h-[310px] flex items-center justify-center";
      case "goonline":
        return "p-[0px_16px] sm:p-[0px_24px] md:p-[0px_32px] min-h-[200px] sm:min-h-[250px] md:min-h-[310px] flex items-center justify-center";
      case "gopayPlus":
        return "p-[32px_32px_0px_32px] sm:p-[48px_48px_0px_48px] md:p-[64px_64px_0px_64px]";
      default:
        return "";
    }
  };

  // Define custom max-height for image
  const getImageHeight = (productId: string) => {
    switch (productId) {
      case "gopay":
        return "max-h-[200px] sm:max-h-[250px] md:max-h-[309.81px]";
      case "goinvoice":
        return "";
      case "gosplit":
        return "h-[80px] sm:h-[110px] md:h-[144px]";
      case "goonline":
        return "max-h-[120px] sm:max-h-[160px] w-[360px] md:max-h-[150px]";
      case "gopayPlus":
        return "max-h-[250px] sm:max-h-[350px] md:max-h-[451.56px]";
      default:
        return "";
    }
  };

  return (
    <section className="relative p-[80px_20px_60px] sm:p-[120px_32px_80px] md:p-[180px_40px_100px] lg:p-[240px_40px_120px]">
      {/* Header */}
      <div className="container flex flex-col max-w-[700px] mx-auto items-center justify-center mb-8 sm:mb-10 md:mb-[56px]">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <Typography variant="h2" className="text-center mb-4 text-text-5">
            <span className="text-secondary">{t("gopay")}</span> {t("title")}
          </Typography>
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <Typography
            variant="p18"
            className="text-center max-w-[700px] mb-4 text-text-4"
          >
            {t("description")}
          </Typography>
        </motion.div>
      </div>

      {/* Product Cards Grid */}
      <div className="container mx-auto max-w-[1000px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {productSuiteData.map((product, index) => (
            <ProductCard
              key={product.id}
              tag={t(`products.${product.id}.tag`)}
              title={t(`products.${product.id}.title`)}
              description={t(`products.${product.id}.description`)}
              buttonText={t("buttonText")}
              delay={index * 0.1}
              alt={t(`products.${product.id}.title`)}
              imgUrl={product.imagePath!}
              imageContainerClassName={getContainerPadding(product.id)}
              imageClassName={getImageHeight(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
