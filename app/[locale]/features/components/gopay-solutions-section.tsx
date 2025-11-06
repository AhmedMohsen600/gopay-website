"use client";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { SolutionsCard } from "./solutions-card";
import {
  AlarmIcon,
  BankIcon,
  ChatDotsIcon,
  ComputerTowerIcon,
  CreditCardIcon,
  DatabaseIcon,
} from "@phosphor-icons/react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { PentagonIcon } from "lucide-react";

export function GoPaySolutionsSection() {
  const t = useTranslations("features.solutions");
  return (
    <section className="xl:px-10 xl:py-[120px] md:px-16 md:py-20 px-6 py-14 ">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-14">
          <Typography variant="h2" className="text-center text-text-5 mb-3">
            <span className="text-[#F2994A]">{t("titlePart1")}</span>
            <span> {t("titlePart2")}</span>
          </Typography>
          <Typography variant="p18" className="text-center  ">
            {t("description")}
          </Typography>
        </div>
        <div className="grid md:grid-cols-9 gap-8 grid-cols-1 ">
          {/* Row 1 */}
          <SolutionsCard
            icon={<DatabaseIcon size={28} className="text-secondary" />}
            description={t("multiplePaymentModes.description")}
            title={t("multiplePaymentModes.title")}
            iconBreak={false}
            className="md:col-span-9"
            beforeTitle={
              <div className="relative ">
                <AspectRatio
                  ratio={2.64706}
                  className="rounded-t-2xl overflow-hidden"
                >
                  <Image
                    src="https://framerusercontent.com/images/rKG4hmwFQbCDpPgynjihtxy2E.png?scale-down-to=2048&width=2880&height=1088"
                    alt="GoPay Solutions"
                    fill
                  />
                </AspectRatio>
                <div className="absolute -bottom-0.5 left-0 right-0 h-[363px] z-10 flex items-center justify-center bg-[linear-gradient(#f8f9fc00_62.3979%,#f8f9fc_100%)]"></div>
              </div>
            }
          />
          {/* Row 2 */}
          <SolutionsCard
            icon={<CreditCardIcon size={28} className="text-secondary" />}
            description={t("integratedDashboard.description")}
            title={t("integratedDashboard.title")}
            iconBreak
            className="md:col-span-4 xl:h-[400px] md:h-[378px]"
            afterDescription={
              <div className="relative ">
                <AspectRatio
                  ratio={2.47664}
                  className="rounded-t-2xl overflow-hidden"
                >
                  <Image
                    src="https://framerusercontent.com/images/DtDFaDVKYf5tTSECoCxchhNvRI.png?scale-down-to=512&width=1060&height=428"
                    alt="GoPay Solutions"
                    fill
                  />
                </AspectRatio>
              </div>
            }
          />
          <SolutionsCard
            icon={<CreditCardIcon size={28} className="text-secondary" />}
            description={t("certifiedEInvoicing.description")}
            title={t("certifiedEInvoicing.title")}
            iconBreak
            className="md:col-span-5 xl:h-[400px] md:h-[378px]"
            afterDescription={
              <div className="relative ">
                <AspectRatio
                  ratio={2.5}
                  className="rounded-t-2xl overflow-hidden"
                >
                  <Image
                    src="https://framerusercontent.com/images/Ny9D1jpQ9mlArXkxEhzMH8hLg.png?scale-down-to=512&width=1190&height=556"
                    alt="GoPay Solutions"
                    fill
                    className="object-contain object-center"
                  />
                </AspectRatio>
                <div className="absolute -bottom-4 left-0 right-0 h-[203px] z-10 flex items-center justify-center bg-[linear-gradient(#f8f9fc00_62.3979%,#f8f9fc_100%)]"></div>
              </div>
            }
          />
          {/* Row 3 */}
          <SolutionsCard
            icon={<ChatDotsIcon size={28} className="text-secondary" />}
            description={t("customSenderId.description")}
            title={t("customSenderId.title")}
            iconBreak
            className="md:col-span-5 xl:h-[223px] md:h-[174px]"
          />
          <SolutionsCard
            icon={<BankIcon size={28} className="text-secondary" />}
            description={t("payoutDistribution.description")}
            title={t("payoutDistribution.title")}
            iconBreak
            className="md:col-span-4 xl:h-[223px] md:h-[174px]"
          />
          {/* Row4 */}
          <SolutionsCard
            icon={<AlarmIcon size={28} className="text-secondary" />}
            description={t("realTimeTracking.description")}
            title={t("realTimeTracking.title")}
            iconBreak
            className="md:col-span-3 md:h-[243px]"
          />
          <SolutionsCard
            icon={<ComputerTowerIcon size={28} className="text-secondary" />}
            description={t("directSystemIntegration.description")}
            title={t("directSystemIntegration.title")}
            iconBreak
            className="md:col-span-3 md:h-[243px]"
          />
          <SolutionsCard
            icon={<PentagonIcon size={28} className="text-secondary" />}
            description={t("customInvoiceDesign.description")}
            title={t("customInvoiceDesign.title")}
            iconBreak
            className="md:col-span-3 md:h-[243px]"
          />
        </div>
      </div>
    </section>
  );
}
