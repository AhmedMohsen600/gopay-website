import {
  CodeBlockIcon,
  CpuIcon,
  ArrowSquareInIcon,
  ToolboxIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";

// Why Choose GoPay Features Configuration
export interface FeatureConfig {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

export const WHY_CHOOSE_FEATURES: FeatureConfig[] = [
  {
    icon: <CodeBlockIcon size={48} weight="regular" />,
    titleKey: "integratedSolution.title",
    descriptionKey: "integratedSolution.description",
  },
  {
    icon: <CpuIcon size={48} weight="regular" />,
    titleKey: "innovativeTechnology.title",
    descriptionKey: "innovativeTechnology.description",
  },
  {
    icon: <ArrowSquareInIcon size={48} weight="regular" />,
    titleKey: "flexiblePlatform.title",
    descriptionKey: "flexiblePlatform.description",
  },
  {
    icon: <ToolboxIcon size={48} weight="regular" />,
    titleKey: "effectiveTools.title",
    descriptionKey: "effectiveTools.description",
  },
  {
    icon: <ShieldCheckIcon size={48} weight="regular" />,
    titleKey: "trustedLicensed.title",
    descriptionKey: "trustedLicensed.description",
  },
];
