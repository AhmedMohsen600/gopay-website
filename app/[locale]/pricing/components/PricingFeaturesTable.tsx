"use client";

import { Typography } from "@/components/ui/typography";
import { Check, X } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { SarIcon } from "@/app/[locale]/components/icons/sarIcon";

interface FeatureItem {
  text: string;
  included: boolean;
}

interface PricingColumn {
  features: FeatureItem[];
}

interface FeatureSection {
  icon: React.ReactNode;
  title: string;
  columns: PricingColumn[];
}

interface PricingFeaturesTableProps {
  sections: FeatureSection[];
}

export function PricingFeaturesTable({ sections }: PricingFeaturesTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="w-full">
          {/* Section Header */}
          <div className="bg-[#f0f0f0] rounded-md p-2 flex items-center gap-3">
            <div className="text-[#F2994A]">{section.icon}</div>
            <Typography variant="p18">{section.title}</Typography>
          </div>

          {/* Mobile: Feature text on top, icons below in 3 columns */}
          <div className="bg-white md:hidden">
            {section.columns[0]?.features.map((_, featureIndex) => {
              const firstColumnFeature =
                section.columns[0].features[featureIndex];
              // Parse text to insert SAR icon after the number
              const text = firstColumnFeature.text.replace(/﷼/g, "").trim();
              const hasSar = firstColumnFeature.text.includes("﷼");
              const parts = text.match(/^(\d+[,\d]*\.?\d*)\s+(.+)$/);

              return (
                <div
                  key={featureIndex}
                  className="py-3 px-2 border-b border-[#E5E5E5] last:border-b-0"
                >
                  {/* Feature Text - Full Width */}
                  <Typography variant="p13" className="text-[#535771] mb-2">
                    {parts && hasSar ? (
                      <>
                        {parts[1]}{" "}
                        <SarIcon
                          width={14}
                          height={14}
                          className="inline-block me-2"
                        />
                        {parts[2]}
                      </>
                    ) : (
                      text
                    )}
                  </Typography>

                  {/* Column Icons - 3 columns below text */}
                  <div className="grid grid-cols-3 gap-2">
                    {section.columns.map((column, columnIndex) => {
                      const feature = column.features[featureIndex];
                      return (
                        <div
                          key={columnIndex}
                          className={`flex items-center justify-start`}
                        >
                          {feature?.included ? (
                            <Check
                              size={16}
                              weight="bold"
                              className="text-[#27AE60]"
                            />
                          ) : (
                            <X
                              size={16}
                              weight="bold"
                              className="text-[#1F1F1F] opacity-50"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: Column-based layout (3 columns with text + icon) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 bg-white">
            {section.columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`space-y-4 px-3 pt-6 pb-[30px] lg:pb-[60px] ${
                  columnIndex === 1 ? "bg-[#fafafa]" : ""
                }`}
              >
                {column.features.map((feature, featureIndex) => {
                  // Parse text to insert SAR icon after the number
                  const text = feature.text.replace(/﷼/g, "").trim();
                  const hasSar = feature.text.includes("﷼");
                  const parts = text.match(/^(\d+[,\d]*\.?\d*)\s+(.+)$/);

                  return (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <div className="shrink-0 self-center">
                        {feature.included ? (
                          <Check
                            size={16}
                            weight="bold"
                            className="text-[#27AE60]"
                          />
                        ) : (
                          <X
                            size={16}
                            weight="bold"
                            className="text-[#1F1F1F] opacity-50"
                          />
                        )}
                      </div>
                      <Typography
                        variant="p14"
                        className={`text-[#1F1F1F] ${
                          feature.included ? "opacity-100" : "opacity-50"
                        } `}
                      >
                        {parts && hasSar ? (
                          <>
                            {parts[1]}{" "}
                            <SarIcon
                              width={14}
                              height={14}
                              className="inline-block me-2"
                            />
                            {parts[2]}
                          </>
                        ) : (
                          text
                        )}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
