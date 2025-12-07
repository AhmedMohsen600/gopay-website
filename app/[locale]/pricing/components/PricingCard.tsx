"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SarIcon } from "@/app/[locale]/components/icons/sarIcon";
import { useState, useEffect, useRef } from "react";

interface PricingCardProps {
  name: string;
  price: string;
  billingPeriod: string;
  subtitle?: string;
  description?: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  onSubscribe?: () => void;
  delay?: number;
  index?: number;
  disableScrollHiding?: boolean;
  className?: string;
}

export function PricingCard({
  name,
  price,
  billingPeriod,
  subtitle,
  description,
  features,
  isPopular = false,
  ctaText,
  onSubscribe,
  delay = 0,
  disableScrollHiding = false,
  className,
}: PricingCardProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const initialScrollY = useRef<number | null>(null);

  useEffect(() => {
    // Skip scroll handling if disabled
    if (disableScrollHiding) return;

    const handleScroll = () => {
      // Don't change state if animation is in progress
      if (isAnimatingRef.current) return;

      // Only apply scroll hiding on desktop (md breakpoint and up)
      const isDesktop = window.innerWidth >= 768;

      if (!isDesktop) {
        setIsScrolled(false);
        initialScrollY.current = null;
        return;
      }

      if (cardRef.current) {
        const cardTop = cardRef.current.getBoundingClientRect().top;
        const currentScrollY = window.scrollY;

        // Check if card is sticky (top is around 90px)
        const isCardSticky = cardTop <= 100;

        if (isCardSticky) {
          // Record when card becomes sticky
          if (initialScrollY.current === null) {
            initialScrollY.current = currentScrollY;
          }

          // Calculate how much user has scrolled since card became sticky
          const scrolledDistance = currentScrollY - initialScrollY.current;

          // Collapse immediately when card becomes sticky
          if (scrolledDistance > 1 && !isScrolled) {
            setIsScrolled(true);
          } else if (scrolledDistance < -50 && isScrolled) {
            // Only expand when scrolled way back up - larger gap prevents flickering
            setIsScrolled(false);
          }
        } else {
          // Reset if card is not sticky
          initialScrollY.current = null;
          if (isScrolled) {
            setIsScrolled(false);
          }
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isScrolled, disableScrollHiding]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative bg-white rounded-[24px] p-[18px] md:p-6 flex flex-1 flex-col h-full transition-all duration-300",
        isPopular
          ? "border border-[#F2994A]"
          : "border border-stroke-1 hover:border-[#F2994A]/30",
        className
      )}
    >
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-start justify-between mb-[6px]">
          {/* Plan Name with Popular Badge */}
          <div className="flex items-center self-center gap-3">
            <Typography
              variant="h6"
              className="text-dark text-[20px] font-semibold"
            >
              {name}
            </Typography>
            {isPopular && (
              <span className="inline-flex items-center text-[9px] py-1 px-[6px] rounded-full bg-[#F2994A] text-white text-center font-semibold uppercase">
                Popular
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex flex-col items-end">
            <div className="flex items-center " dir="ltr">
              <SarIcon width={18} height={18} className="text-dark" />
              <Typography className="text-[20px]" variant="h6">
                {price}
              </Typography>
            </div>
            <Typography variant="p13" className="text-[#FF9A06]">
              {billingPeriod}
            </Typography>
          </div>
        </div>

        {/* Subtitle - Hidden when scrolled */}

        <motion.div
          initial={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Typography
            variant="p16"
            className={`text-primary tracking-tighter font-medium ${
              isScrolled ? "mb-0" : "mb-2"
            }  italic`}
          >
            {subtitle}
          </Typography>
        </motion.div>

        {/* Description - Hidden when scrolled */}
        <AnimatePresence initial={false}>
          {!isScrolled && description && (
            <motion.div
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: 100 }}
              exit={{ opacity: 0, maxHeight: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
              onAnimationStart={() => (isAnimatingRef.current = true)}
              onAnimationComplete={() => (isAnimatingRef.current = false)}
            >
              <Typography
                variant="p14"
                className="text-[#696969] tracking-tighter"
              >
                {description}
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Features List - Hidden when scrolled */}
      <AnimatePresence initial={false}>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex-1 mb-5"
            style={{ overflow: "hidden" }}
            onAnimationStart={() => (isAnimatingRef.current = true)}
            onAnimationComplete={() => (isAnimatingRef.current = false)}
          >
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="shrink-0 self-center">
                    <Check size={16} weight="bold" className="text-[#27AE60]" />
                  </div>
                  <Typography
                    variant="p14"
                    className="text-[#1f1f1f] font-medium tracking-tighter"
                  >
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Button */}
      <Button
        onClick={onSubscribe}
        className="py-2 xl:px-[14px] h-[34px]! text-sm xl:text-[14px]"
        variant="secondary"
      >
        {ctaText}
      </Button>
    </motion.div>
  );
}
