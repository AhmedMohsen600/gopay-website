"use client";

import { Typography } from "@/components/ui/typography";
import { SarIcon } from "@/app/[locale]/components/icons/sarIcon";
import { Button } from "@/components/ui/button";

interface PricingPackage {
  name: string;
  price: string;
  billingPeriod: string;
  isPopular?: boolean;
}

interface MobilePricingBarProps {
  packages: PricingPackage[];
  ctaText: string;
  onSubscribe?: () => void;
}

export function MobilePricingBar({
  packages,
  ctaText,
  onSubscribe,
}: MobilePricingBarProps) {
  return (
    <div className="md:hidden sticky top-[90.5px] z-20">
      <div className="bg-white rounded-xl border border-[#E5E5E5] p-2 grid grid-cols-3">
        {packages.map((pkg, index) => (
          <div key={index} className="flex flex-col p-2 items-start gap-3">
            <Typography variant="h5" className="text-dark font-semibold">
              {pkg.name}
            </Typography>

            <div className="flex items-center gap-1">
              <SarIcon width={20} height={20} className="text-dark" />
              <Typography variant="h5" className="text-dark font-semibold">
                {pkg.price}
              </Typography>
            </div>

            <Typography variant="p13" className="text-[#FF9A06]">
              {pkg.billingPeriod}
            </Typography>

            <Button
              onClick={onSubscribe}
              variant="secondary"
              className="w-full h-[34px] py-2 px-3.5 text-sm"
            >
              {ctaText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
