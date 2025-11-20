"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { AnimatedArrow } from "@/components/ui/animated-arrow";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductCardProps {
  tag: string;
  tagClassName?: string;
  title: string | ReactNode;
  description: string;
  imgUrl: string;
  className?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  delay?: number;
  alt: string;
}

export function ProductCard({
  tag,
  tagClassName,
  title,
  description,
  imgUrl,
  className,
  imageContainerClassName,
  imageClassName,
  delay = 0,
  alt,
}: ProductCardProps) {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageSlideUpVariants = {
    hidden: { y: 220 },
    visible: { y: 0 },
  };

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      className={cn(
        "bg-[#f7f7f7] rounded-3xl overflow-hidden p-4 md:p-6 xl:p-8 flex flex-col",
        className
      )}
    >
      {/* Text Content Section */}
      <div className="flex flex-col">
        {/* Tag */}
        <div
          className={cn(
            "inline-flex items-center justify-center w-fit px-3 py-2 rounded-sm bg-secondary text-white text-sm font-medium",
            tagClassName
          )}
        >
          {tag}
        </div>

        {/* Title and Description Container */}
        <div className="mt-4">
          {/* Title */}
          <Typography
            variant="h3"
            className="text-text-5 tracking-tighter leading-[1.2]"
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="p16"
            className="text-text-3 mt-2 tracking-tight leading-[1.2]"
          >
            {description}
          </Typography>
        </div>

        {/* Button */}
        {/* <Button className="w-fit mt-4" onClick={onButtonClick}>
          {buttonText}
          <AnimatedArrow rtlIcon={CaretLeft} icon={CaretRight} />
        </Button> */}
      </div>

      <motion.div
        className={cn(
          "relative rounded-2xl mt-4 sm:mt-6 md:mt-8 max-h-[200px] sm:max-h-[250px] md:max-h-[310px] p-[20px_16px_0px] sm:p-[35px_24px_0px] md:p-[50px_32px_0px] bg-[#e8eaf0] overflow-hidden",
          imageContainerClassName
        )}
      >
        <motion.div
          variants={imageSlideUpVariants}
          initial="hidden"
          whileInView="visible"
          className="overflow-hidden"
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <Image
            src={imgUrl}
            alt={alt}
            width={423}
            height={310}
            className={cn("object-cover w-full", imageClassName)}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
