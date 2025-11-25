"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useMediaQuery } from "@/hooks/use-media-query";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

interface PaymentCardProps {
  isFullRow?: boolean;
  imageVariant: "dark-bg" | "light-1" | "light-2" | "light-3" | "light-4";
  features: string[];
  imageUrl?: string;
  imageAlt?: string;
  badge?: string;
  title?: string;
  description?: string;
}
export default function PaymentCard({
  isFullRow,
  imageVariant,
  features,
  imageUrl,
  imageAlt,
  badge,
  title,
  description,
}: PaymentCardProps) {
  const t = useTranslations("features");

  // Use media queries for responsive offset
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1279px)");

  // Determine offset based on screen size
  const yOffset = isMobile ? 50 : isTablet ? 80 : 120;

  const fadeInUpVariants2 = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={cn(
        "bg-[linear-gradient(180deg,rgb(247,247,247)_0%,rgb(244,244,250)_100%)] hover:bg-[linear-gradient(180deg,rgb(245,238,228)_0%,rgb(250,248,245)_100%)]  transition-colors duration-200 ",
        "cursor-pointer rounded-3xl xl:p-8 md:p-[26px] p-4 flex flex-col gap-4 group",
        isFullRow && "sm:col-span-2"
      )}
    >
      {/* badge area */}
      <div
        className={cn(
          "inline-flex items-center justify-center w-fit px-3 h-8 rounded-sm bg-secondary text-white text-sm font-medium"
        )}
      >
        {badge}
      </div>
      <div className="xl:gap-8 md:gap-6 gap-4 flex flex-col group-hover:gap-10 transition-all duration-200  h-full justify-between">
        {/* Description area */}
        <div
          className={cn(
            "flex flex-col gap-4 ",
            isFullRow && "xl:flex-row xl:justify-between xl:gap-[88px]",
            !isFullRow && ""
          )}
        >
          <div className="w-full space-y-2">
            <Typography
              variant="h3"
              className="font-medium xl:text-[35px] md:text-[26px] text-lg leading-none tracking-tight"
            >
              {title}
            </Typography>
            <Typography variant={"p16"}>{description}</Typography>
          </div>
          {/* Key features area */}
          <div className="w-full">
            <Typography variant="h6" className=" mb-2 text-[#1a1d21]">
              {t("keyFeatures")}
            </Typography>
            <div className="">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className="rounded-full h-[3px] w-[3px] mt-2 shrink-0  bg-text-3  " />
                  {isFullRow ? (
                    <Typography variant="p16" className="text-text-3">
                      {feature}
                    </Typography>
                  ) : (
                    <Typography variant="p13" className="text-text-3">
                      {feature}
                    </Typography>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {imageVariant === "dark-bg" && (
          <div className="bg-[#20243e] xl:h-[460px] md:h-[353px] h-[212px] rounded-[20px] overflow-hidden">
            <motion.img
              variants={fadeInUpVariants2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: `-${yOffset}px` }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              src={
                imageUrl ||
                "https://framerusercontent.com/images/3W8VMxNI3mLuPxBop0eJIskq4.png?width=1024&height=677"
              }
              alt={imageAlt || "feature-card-image"}
              height={460}
            />
          </div>
        )}
        {imageVariant === "light-1" && (
          <div className="bg-[#e9e9f0] rounded-[20px] overflow-hidden px-8 pt-[50px] group-hover:bg-[#F0EAE1] group-hover:px-5 transition-all duration-200 aspect-[1.28571]">
            <AspectRatio ratio={0.706651}>
              <motion.img
                variants={fadeInUpVariants2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: `-${yOffset}px` }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                src={
                  imageUrl ||
                  "https://framerusercontent.com/images/8QZ9CFJ6kIU0Hh7V0AO0auNAoU.png?scale-down-to=1024&width=1190&height=1684"
                }
                alt={imageAlt || "feature-card-image"}
                className="block w-full h-full object-cover object-center"
              />
            </AspectRatio>
          </div>
        )}
        {imageVariant === "light-2" && (
          <div className="bg-[#e9e9f0] rounded-[20px] flex justify-center items-center aspect-[1.28571] overflow-hidden px-8  group-hover:bg-[#F0EAE1] group-hover:px-5 transition-all h-auto duration-200  ">
            <AspectRatio ratio={2.47664 / 1} className="h-full">
              <motion.img
                variants={fadeInUpVariants2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: `-${yOffset}px` }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                src={
                  imageUrl ||
                  "https://framerusercontent.com/images/DtDFaDVKYf5tTSECoCxchhNvRI.png?scale-down-to=1024&width=1060&height=428"
                }
                alt={imageAlt || "feature-card-image"}
                className="h-full w-full  object-cover object-center"
              />
            </AspectRatio>
          </div>
        )}
        {imageVariant === "light-3" && (
          <div className="bg-[#e9e9f0] rounded-[20px] flex justify-center items-center aspect-[1.28571] overflow-hidden px-8  group-hover:bg-[#F0EAE1] group-hover:px-5 transition-all h-auto duration-200  ">
            <AspectRatio ratio={2.69036 / 1} className="h-full">
              <motion.img
                variants={fadeInUpVariants2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: `-${yOffset}px` }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                src={
                  imageUrl ||
                  "https://framerusercontent.com/images/DtDFaDVKYf5tTSECoCxchhNvRI.png?scale-down-to=1024&width=1060&height=428"
                }
                alt={imageAlt || "feature-card-image"}
                className="h-full w-full  object-cover object-center"
              />
            </AspectRatio>
          </div>
        )}
        {imageVariant === "light-4" && (
          <div className="bg-[#e9e9f0] aspect-[1.28571] rounded-[20px] overflow-hidden px-16 pt-16 group-hover:bg-[#F0EAE1] group-hover:px-11 transition-all duration-200 ">
            <AspectRatio ratio={0.655502 / 1}>
              <motion.img
                variants={fadeInUpVariants2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: `-${yOffset}px` }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                src={imageUrl}
                alt={imageAlt || "feature-card-image"}
                className="block w-full h-full object-cover object-center"
              />
            </AspectRatio>
          </div>
        )}
      </div>
    </motion.div>
  );
}
