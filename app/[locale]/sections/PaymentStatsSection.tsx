"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

import { StatCard } from "../components";
import { paymentSections } from "./data";

export function PaymentStatsSection() {
  const t = useTranslations("home.paymentStats");
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"], // Start when section enters viewport, end when centered
  });

  // Transform scroll progress to scale (0.7 to 1) with smoother curve - more dramatic
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.7, 0.85, 0.95, 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [0.3, 0.6, 0.85, 1]
  );

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // iPhone image animation - VERY dramatic and clear
  const iphoneY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [400, 250, 100, 30, 0]
  );
  const iphoneOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.6, 0.85, 1],
    [0, 0.2, 0.5, 0.75, 0.95, 1]
  );
  const iphoneScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.4, 0.6, 0.8, 0.95, 1]
  );
  // Mobile/Tablet scale (with 1.1 base scale from Framer)
  const iphoneScaleMobile = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.44, 0.66, 0.88, 1.045, 1.1]
  );
  const iphoneRotate = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [5, 3, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative mt-[90px] lg:mx-auto max-w-[1200px]"
    >
      <div className="container  mx-auto">
        {/* Mobile/Tablet - Static Image with iPhone */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:hidden relative"
        >
          <Image
            src="/images/home/dashboard.png"
            alt="GoPay Payment Dashboard"
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl"
            priority
          />
          {/* iPhone overlay for mobile/tablet */}
          <motion.div
            className="absolute left-1/2 top-[120%] pointer-events-none"
            style={{
              scale: iphoneScaleMobile,
              x: "-50%",
              translateY: "-50%",
              willChange: "transform",
            }}
          >
            <Image
              src="/images/home/iphone.png"
              alt="GoPay Mobile App"
              width={540}
              height={1112}
              className="drop-shadow-2xl w-[100px] h-auto"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Desktop - Interactive Cards */}
        <motion.div
          style={{
            scale,
            opacity,
            willChange: "transform, opacity",
          }}
          className="hidden lg:block bg-white rounded-xl p-6 space-y-[32px] relative"
        >
          {paymentSections.map((section) => (
            <div key={section.sectionTitleKey}>
              {/* Section Title */}
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-6"
              >
                <Typography variant="p16" className="text-text-5 font-bold">
                  {t(section.sectionTitleKey)}
                </Typography>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.cards.map((card, cardIndex) => (
                  <StatCard
                    key={card.id}
                    id={card.id}
                    icon={card.icon}
                    title={t(card.titleKey)}
                    amount={card.amount}
                    count={card.count}
                    chartData={card.chartData}
                    delay={0.1 * (cardIndex + 1)}
                    variant={card.variant}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* iPhone Image - Desktop Only */}
          <motion.div
            style={{
              y: iphoneY,
              opacity: iphoneOpacity,
              scale: iphoneScale,
              rotate: iphoneRotate,
              willChange: "transform, opacity",
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            className="absolute left-1/2 -translate-x-1/2 top-[91.5%] -translate-y-1/2 pointer-events-none z-10"
          >
            <Image
              src="/images/home/iphone.png"
              alt="GoPay Mobile App"
              width={222}
              height={457}
              className="drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
