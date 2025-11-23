"use client";
import { HeroBlurBackgrounds } from "@/components/HeroBlurBackgrounds";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const heroTitleVariants = cva("font-medium", {
  variants: {
    variant: {
      default: "xl:text-[62px] md:text-[50px] text-[34px]",
      secondary: "xl:text-[50px] md:text-[36px] text-[24px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const heroDescriptionVariants = cva(
  "text-center max-w-[700px] text-primary tracking-tight leading-tight",
  {
    variants: {
      variant: {
        default: "lg:text-lg md:text-[15px] text-[13px]",
        secondary: "lg:text-[16px] md:text-[14px] text-[12px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface HeroSectionProps
  extends VariantProps<typeof heroTitleVariants>,
    VariantProps<typeof heroDescriptionVariants> {
  badge: string | ReactNode;
  title: ReactNode;
  description: string | ReactNode;
  className?: string;
  badgeDelay?: number;
  titleDelay?: number;
  descriptionDelay?: number;
  showBlurBackground?: boolean;
  showBottomGradient?: boolean;
}

export function HeroSection({
  badge,
  title,
  description,
  variant,
  className = "",
  badgeDelay = 0.2,
  titleDelay = 0,
  descriptionDelay = 0.2,
  showBlurBackground = true,
  showBottomGradient = true,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-[50vh] overflow-hidden px-6 md:min-h-[70vh] flex flex-col gap-3 md:gap-4 justify-center items-center mx-auto bg-[linear-gradient(#e6ebf2_5%,#fff_100%)]",
        className
      )}
    >
      {showBlurBackground && (
        <div className="absolute inset-0 z-0">
          <HeroBlurBackgrounds />
        </div>
      )}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: badgeDelay }}
        className="z-10"
      >
        {typeof badge === "string" ? <Badge>{badge}</Badge> : badge}
      </motion.div>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: titleDelay }}
        className="z-10"
      >
        {typeof title === "string" ? (
          <Typography
            variant="h1"
            className={cn(heroTitleVariants({ variant }), "text-secondary")}
          >
            {title}
          </Typography>
        ) : (
          title
        )}
      </motion.div>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut", delay: descriptionDelay }}
        className="z-10"
      >
        {typeof description === "string" ? (
          <Typography
            variant="p18"
            className={cn(heroDescriptionVariants({ variant }), "text-center")}
          >
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
