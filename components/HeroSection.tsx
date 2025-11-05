"use client";
import { HeroBlurBackgrounds } from "@/components/HeroBlurBackgrounds";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type HeroSectionVariant = "default" | "secondary";

interface HeroSectionProps {
  badge: string | ReactNode;
  title: ReactNode;
  description: string | ReactNode;
  variant?: HeroSectionVariant;
  className?: string;
  badgeDelay?: number;
  titleDelay?: number;
  descriptionDelay?: number;
  showBlurBackground?: boolean;
  showBottomGradient?: boolean;
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection({
  badge,
  title,
  description,
  variant = "default",
  className = "",
  badgeDelay = 0.2,
  titleDelay = 0,
  descriptionDelay = 0.2,
  showBlurBackground = true,
  showBottomGradient = true,
}: HeroSectionProps) {
  // Title font sizes based on variant
  const titleClassNames = {
    default: "font-medium xl:text-[62px] md:text-[50px] text-[34px]",
    secondary: "font-medium xl:text-[50px] md:text-[36px] text-[24px]",
  };

  // Description font sizes based on variant
  const descriptionClassNames = {
    default:
      "text-center max-w-[700px] lg:text-lg md:text-[15px] text-[13px] text-primary tracking-tight leading-tight",
    secondary:
      "text-center max-w-[700px] lg:text-[16px] md:text-[14px] text-[12px] text-primary tracking-tight leading-tight",
  };
  console.log(variant);
  console.log(titleClassNames[variant]);
  console.log(descriptionClassNames[variant]);
  return (
    <section
      className={`relative min-h-[50vh] overflow-hidden px-6 md:min-h-[70vh] flex flex-col gap-3 md:gap-4 justify-center items-center mx-auto bg-[linear-gradient(#e6ebf2_5%,#fff_100%)] ${className}`}
    >
      {showBlurBackground && (
        <div className="absolute inset-0 z-0">
          <HeroBlurBackgrounds />
        </div>
      )}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: badgeDelay }}
        className="z-10"
      >
        {typeof badge === "string" ? <Badge>{badge}</Badge> : badge}
      </motion.div>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: titleDelay }}
        className="z-10"
      >
        {typeof title === "string" ? (
          <Typography variant="h1" className={titleClassNames[variant]}>
            {title}
          </Typography>
        ) : (
          title
        )}
      </motion.div>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: descriptionDelay }}
        className="z-10"
      >
        {typeof description === "string" ? (
          <Typography variant="p18" className={descriptionClassNames[variant]}>
            {description}
          </Typography>
        ) : (
          description
        )}
      </motion.div>
      {showBottomGradient && (
        <div className="absolute bottom-0 left-0 w-full h-[182px] bg-linear-to-t from-white to-transparent" />
      )}
    </section>
  );
}
