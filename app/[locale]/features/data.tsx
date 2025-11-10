export interface FeatureCardConfig {
  titleKey: string;
  descriptionKey: string;
  featuresKeys: string[];
  imageVariant: "dark-bg" | "light-1" | "light-2" | "light-3" | "light-4";
  imageUrl?: string;
  imageAltKey: string;
  badgeKey: string;
  fullRow?: boolean;
}

export interface SolutionImageConfig {
  imageUrl: string;
  imageAlt: string;
  ratio: number;
  className?: string;
  objectFit?: "contain" | "cover";
  objectPosition?: string;
  gradientOverlay?: {
    height: string;
    bottom: string;
  };
}

export interface SolutionCardConfig {
  iconName: string;
  titleKey: string;
  descriptionKey: string;
  iconBreak: boolean;
  className: string;
  beforeTitleImage?: SolutionImageConfig;
  afterDescriptionImage?: SolutionImageConfig;
}

export const featuresCardData: FeatureCardConfig[] = [
  {
    titleKey: "products.gopay.title",
    descriptionKey: "products.gopay.description",
    featuresKeys: [
      "products.gopay.features.0",
      "products.gopay.features.1",
      "products.gopay.features.2",
      "products.gopay.features.3",
      "products.gopay.features.4",
    ],
    imageVariant: "dark-bg",
    imageUrl:
      "https://framerusercontent.com/images/3W8VMxNI3mLuPxBop0eJIskq4.png?width=1024&height=677",
    imageAltKey: "products.gopay.imageAlt",
    badgeKey: "products.gopay.badge",
    fullRow: true,
  },
  {
    titleKey: "products.golnvoice.title",
    descriptionKey: "products.golnvoice.description",
    featuresKeys: [
      "products.golnvoice.features.0",
      "products.golnvoice.features.1",
      "products.golnvoice.features.2",
      "products.golnvoice.features.3",
    ],
    imageVariant: "light-1",
    imageUrl:
      "https://framerusercontent.com/images/8QZ9CFJ6kIU0Hh7V0AO0auNAoU.png?scale-down-to=1024&width=1190&height=1684",
    imageAltKey: "products.golnvoice.imageAlt",
    badgeKey: "products.golnvoice.badge",
  },
  {
    titleKey: "products.gosplit.title",
    descriptionKey: "products.gosplit.description",
    featuresKeys: [
      "products.gosplit.features.0",
      "products.gosplit.features.1",
      "products.gosplit.features.2",
    ],
    imageVariant: "light-2",
    imageUrl:
      "https://framerusercontent.com/images/DtDFaDVKYf5tTSECoCxchhNvRI.png?scale-down-to=512&width=1060&height=428",
    imageAltKey: "products.gosplit.imageAlt",
    badgeKey: "products.gosplit.badge",
  },
  {
    titleKey: "products.goonline.title",
    descriptionKey: "products.goonline.description",
    featuresKeys: [
      "products.goonline.features.0",
      "products.goonline.features.1",
      "products.goonline.features.2",
      "products.goonline.features.3",
    ],
    imageUrl:
      "https://framerusercontent.com/images/dltRp4qIsFlPJXK0LAtdmFuymU.png?scale-down-to=512&width=1060&height=394",
    imageVariant: "light-3",
    imageAltKey: "products.goonline.imageAlt",
    badgeKey: "products.goonline.badge",
  },
  {
    titleKey: "products.gopayPlus.title",
    descriptionKey: "products.gopayPlus.description",
    featuresKeys: [
      "products.gopayPlus.features.0",
      "products.gopayPlus.features.1",
      "products.gopayPlus.features.2",
      "products.gopayPlus.features.3",
      "products.gopayPlus.features.4",
    ],
    imageUrl:
      "https://framerusercontent.com/images/pekNvaXoQZmZLXJYvEO1C7vjGU.png?width=548&height=836",
    imageVariant: "light-4",
    imageAltKey: "products.gopayPlus.imageAlt",
    badgeKey: "products.gopayPlus.badge",
  },
];

export const solutionsCardData: SolutionCardConfig[] = [
  {
    iconName: "DatabaseIcon",
    titleKey: "multiplePaymentModes.title",
    descriptionKey: "multiplePaymentModes.description",
    iconBreak: false,
    className: "md:col-span-9",
    beforeTitleImage: {
      imageUrl:
        "https://framerusercontent.com/images/rKG4hmwFQbCDpPgynjihtxy2E.png?scale-down-to=2048&width=2880&height=1088",
      imageAlt: "GoPay Solutions",
      ratio: 2.64706,
      gradientOverlay: {
        height: "h-[363px]",
        bottom: "-bottom-0.5",
      },
    },
  },
  {
    iconName: "CreditCardIcon",
    titleKey: "integratedDashboard.title",
    descriptionKey: "integratedDashboard.description",
    iconBreak: true,
    className: "md:col-span-4 xl:h-[400px] md:h-[378px]",
    afterDescriptionImage: {
      imageUrl:
        "https://framerusercontent.com/images/DtDFaDVKYf5tTSECoCxchhNvRI.png?scale-down-to=512&width=1060&height=428",
      imageAlt: "GoPay Solutions",
      ratio: 2.47664,
    },
  },
  {
    iconName: "CreditCardIcon",
    titleKey: "certifiedEInvoicing.title",
    descriptionKey: "certifiedEInvoicing.description",
    iconBreak: true,
    className: "md:col-span-5 xl:h-[400px] md:h-[378px]",
    afterDescriptionImage: {
      imageUrl:
        "https://framerusercontent.com/images/Ny9D1jpQ9mlArXkxEhzMH8hLg.png?scale-down-to=512&width=1190&height=556",
      imageAlt: "GoPay Solutions",
      ratio: 2.5,
      objectFit: "contain",
      objectPosition: "object-center",
      gradientOverlay: {
        height: "h-[203px]",
        bottom: "-bottom-4",
      },
    },
  },
  {
    iconName: "ChatDotsIcon",
    titleKey: "customSenderId.title",
    descriptionKey: "customSenderId.description",
    iconBreak: true,
    className: "md:col-span-5 xl:h-[223px] md:h-[174px]",
  },
  {
    iconName: "BankIcon",
    titleKey: "payoutDistribution.title",
    descriptionKey: "payoutDistribution.description",
    iconBreak: true,
    className: "md:col-span-4 xl:h-[223px] md:h-[174px]",
  },
  {
    iconName: "AlarmIcon",
    titleKey: "realTimeTracking.title",
    descriptionKey: "realTimeTracking.description",
    iconBreak: true,
    className: "md:col-span-3 md:h-[243px]",
  },
  {
    iconName: "ComputerTowerIcon",
    titleKey: "directSystemIntegration.title",
    descriptionKey: "directSystemIntegration.description",
    iconBreak: true,
    className: "md:col-span-3 md:h-[243px]",
  },
  {
    iconName: "PentagonIcon",
    titleKey: "customInvoiceDesign.title",
    descriptionKey: "customInvoiceDesign.description",
    iconBreak: true,
    className: "md:col-span-3 md:h-[243px]",
  },
];
