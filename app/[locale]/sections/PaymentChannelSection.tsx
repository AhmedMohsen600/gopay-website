"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { LogosMarquee } from "@/components/LogosMarquee";

const paymentChannelLogos = [
  { src: "/images/payment-channel/01.png", alt: "SADAD" },
  { src: "/images/payment-channel/02.png", alt: "Mada" },
  { src: "/images/payment-channel/03.png", alt: "Apple Pay" },
  { src: "/images/payment-channel/04.png", alt: "American Express" },
  { src: "/images/payment-channel/05.png", alt: "Mastercard" },
  { src: "/images/payment-channel/06.png", alt: "VISA" },
];

export function PaymentChannelSection() {
  const t = useTranslations("home.paymentChannels");

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden p-[50px_16px_0px]">
      <div className="container mx-auto px-4">
        <motion.div
          className="w-full flex flex-col  items-center justify-center"
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

          {/* Payment Channel Logos Marquee */}
          <div className="p-2.5">
            <LogosMarquee logos={paymentChannelLogos} />
          </div>
          {/* Provided By Text */}
          <Typography
            variant="p14"
            className="text-text-2 mt-2 italic text-center"
          >
            {t("providedBy")}
          </Typography>
        </motion.div>
      </div>
    </section>
  );
}
