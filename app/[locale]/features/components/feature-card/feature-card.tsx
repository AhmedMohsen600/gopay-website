"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const fadeInUpVariants2 = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0 },
};
interface PaymentCardProps {
  isFullRow: boolean;
  imageVariant: "dark-bg" | "light-1" | "light-2" | "light-3";
}
export default function PaymentCard({
  isFullRow,
  imageVariant,
}: PaymentCardProps) {
  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={cn(
        "bg-[linear-gradient(180deg,rgb(247,247,247)_0%,rgb(244,244,250)_100%)] hover:bg-[linear-gradient(180deg,rgb(245,238,228)_0%,rgb(250,248,245)_100%)]  transition-colors duration-400 ",
        "cursor-pointer rounded-3xl p-8 flex flex-col gap-4 group",
        isFullRow && "col-span-2"
      )}
    >
      {/* badge area */}
      <div
        className={cn(
          "inline-flex items-center justify-center w-fit px-3 h-8 rounded-sm bg-secondary text-white text-sm font-medium"
        )}
      >
        test
      </div>
      <div className="gap-8 flex flex-col group-hover:gap-10 transition-all duration-400">
        {/* Description area */}
        <div
          className={cn(
            "flex flex-col gap-4",
            isFullRow && "flex-row justify-between"
          )}
        >
          <div className="w-min space-y-2">
            <Typography
              variant="h3"
              className="w-[424px] font-medium xl:text-[35px] md:text-[26px] text-lg leading-none tracking-tight"
            >
              GoPay - Core Collections Platform
            </Typography>
            <Typography variant={"p16"}>
              GoPay is the flagship SADAD-integrated solution for issuing
              invoices and collecting payments across all sectors. It empowers
              SMEs, enterprises, and government entities to automate their
              receivables and simplify reconciliation.
            </Typography>
          </div>
          {/* Key features area */}
          <div className="w-min">
            <Typography variant="h6" className="w-[424px]">
              Key Features:
            </Typography>
            <ul className="list-disc list-inside">
              <li>feature 1</li>
              <li>feature 2</li>
              <li>feature 3</li>
            </ul>
          </div>
        </div>

        {imageVariant === "dark-bg" && (
          <div className="bg-[#20243e] h-[460] rounded-[20px] overflow-hidden">
            <motion.img
              variants={fadeInUpVariants2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px" }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
              src="https://framerusercontent.com/images/3W8VMxNI3mLuPxBop0eJIskq4.png?width=1024&height=677"
              alt="feature-card-image"
              height={460}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
