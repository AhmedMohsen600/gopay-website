import {
  Stack,
  Bell,
  DeviceMobile,
  Megaphone,
  CreditCard,
  CalendarCheck,
} from "@phosphor-icons/react/dist/ssr";

export const getBasicPackages = (t: any) => [
  {
    name: t("basicPackages.starter.name"),
    price: t("basicPackages.starter.price"),
    subtitle: t("basicPackages.starter.subtitle"),
    description: t("basicPackages.starter.description"),
    features: [
      t("basicPackages.starter.features.0"),
      t("basicPackages.starter.features.1"),
      t("basicPackages.starter.features.2"),
    ],
  },
  {
    name: t("basicPackages.basic.name"),
    price: t("basicPackages.basic.price"),
    subtitle: t("basicPackages.basic.subtitle"),
    description: t("basicPackages.basic.description"),
    features: [
      t("basicPackages.basic.features.0"),
      t("basicPackages.basic.features.1"),
      t("basicPackages.basic.features.2"),
    ],
  },
  {
    name: t("basicPackages.pro.name"),
    price: t("basicPackages.pro.price"),
    subtitle: t("basicPackages.pro.subtitle"),
    description: t("basicPackages.pro.description"),
    features: [
      t("basicPackages.pro.features.0"),
      t("basicPackages.pro.features.1"),
      t("basicPackages.pro.features.2"),
    ],
    isPopular: true,
  },
];

export const getBusinessPackages = (t: any) => [
  {
    name: t("businessPackages.proPlus.name"),
    price: t("businessPackages.proPlus.price"),
    features: [
      t("businessPackages.proPlus.features.0"),
      t("businessPackages.proPlus.features.1"),
      t("businessPackages.proPlus.features.2"),
    ],
    subtitle: undefined,
    description: undefined,
    isPopular: false,
  },
  {
    name: t("businessPackages.premium.name"),
    price: t("businessPackages.premium.price"),
    features: [
      t("businessPackages.premium.features.0"),
      t("businessPackages.premium.features.1"),
      t("businessPackages.premium.features.2"),
    ],
    subtitle: undefined,
    description: undefined,
    isPopular: false,
  },
  {
    name: t("businessPackages.premiumPlus.name"),
    price: t("businessPackages.premiumPlus.price"),
    features: [
      t("businessPackages.premiumPlus.features.0"),
      t("businessPackages.premiumPlus.features.1"),
      t("businessPackages.premiumPlus.features.2"),
    ],
    subtitle: undefined,
    description: undefined,
    isPopular: false,
  },
];

export const getBasicFeaturesComparison = (t: any) => [
  {
    icon: <Stack size={24} weight="duotone" />,
    title: t("featuresComparison.mainFeatures.title"),
    columns: [
      {
        features: [
          {
            text: t("featuresComparison.mainFeatures.starter.transactions"),
            included: true,
          },
          {
            text: t("featuresComparison.mainFeatures.starter.einvoicing"),
            included: false,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.mainFeatures.basic.transactions"),
            included: true,
          },
          {
            text: t("featuresComparison.mainFeatures.basic.einvoicing"),
            included: false,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.mainFeatures.pro.transactions"),
            included: true,
          },
          {
            text: t("featuresComparison.mainFeatures.pro.einvoicing"),
            included: false,
          },
        ],
      },
    ],
  },
  {
    icon: <CreditCard size={24} weight="duotone" />,
    title: t("featuresComparison.paymentFeatures.title"),
    columns: [
      {
        features: [
          {
            text: t("featuresComparison.paymentFeatures.recurring"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.partial"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.advanced"),
            included: false,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.paymentFeatures.recurring"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.partial"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.advanced"),
            included: false,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.paymentFeatures.recurring"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.partial"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.advanced"),
            included: false,
          },
        ],
      },
    ],
  },
  {
    icon: <Bell size={24} weight="duotone" />,
    title: t("featuresComparison.notifications.title"),
    columns: [
      {
        features: [
          {
            text: t("featuresComparison.notifications.starter"),
            included: true,
          },
          {
            text: t("featuresComparison.notifications.customSender"),
            included: false,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.notifications.basic"),
            included: true,
          },
          {
            text: t("featuresComparison.notifications.customSender"),
            included: false,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.notifications.pro"),
            included: true,
          },
          {
            text: t("featuresComparison.notifications.customSender"),
            included: false,
          },
        ],
      },
    ],
  },
  {
    icon: <DeviceMobile size={24} weight="duotone" />,
    title: t("featuresComparison.mobileApps.title"),
    columns: [
      {
        features: [
          {
            text: t("featuresComparison.mobileApps.merchant"),
            included: true,
          },
          {
            text: t("featuresComparison.mobileApps.customer"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.mobileApps.merchant"),
            included: true,
          },
          {
            text: t("featuresComparison.mobileApps.customer"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.mobileApps.merchant"),
            included: true,
          },
          {
            text: t("featuresComparison.mobileApps.customer"),
            included: true,
          },
        ],
      },
    ],
  },
  {
    icon: <Megaphone size={24} weight="duotone" />,
    title: t("featuresComparison.marketing.title"),
    columns: [
      {
        features: [
          { text: t("featuresComparison.marketing.goads"), included: false },
        ],
      },
      {
        features: [
          { text: t("featuresComparison.marketing.goads"), included: false },
        ],
      },
      {
        features: [
          { text: t("featuresComparison.marketing.goads"), included: false },
        ],
      },
    ],
  },
  {
    icon: <CreditCard size={24} weight="duotone" />,
    title: t("featuresComparison.limits.title"),
    columns: [
      {
        features: [
          { text: t("featuresComparison.limits.minimum"), included: true },
          { text: t("featuresComparison.limits.maximum"), included: true },
        ],
      },
      {
        features: [
          { text: t("featuresComparison.limits.minimum"), included: true },
          { text: t("featuresComparison.limits.maximum"), included: true },
        ],
      },
      {
        features: [
          { text: t("featuresComparison.limits.minimum"), included: true },
          { text: t("featuresComparison.limits.maximum"), included: true },
        ],
      },
    ],
  },
  {
    icon: <Stack size={24} weight="duotone" />,
    title: t("featuresComparison.transactionPricing.title"),
    columns: [
      {
        features: [
          {
            text: t(
              "featuresComparison.transactionPricing.starter.transaction"
            ),
            included: true,
          },
          {
            text: t(
              "featuresComparison.transactionPricing.starter.notification"
            ),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.transactionPricing.basic.transaction"),
            included: true,
          },
          {
            text: t("featuresComparison.transactionPricing.basic.notification"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.transactionPricing.pro.transaction"),
            included: true,
          },
          {
            text: t("featuresComparison.transactionPricing.pro.notification"),
            included: true,
          },
        ],
      },
    ],
  },
  {
    icon: <CalendarCheck size={24} weight="duotone" />,
    title: t("featuresComparison.validity.title"),
    columns: [
      {
        features: [
          {
            text: t("featuresComparison.validity.duration"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.validity.duration"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.validity.duration"),
            included: true,
          },
        ],
      },
    ],
  },
];

export const getBusinessFeaturesComparison = (t: any) => [
  {
    icon: <Stack size={24} weight="duotone" />,
    title: t("featuresComparison.mainFeatures.title"),
    columns: [
      {
        features: [
          {
            text: t("featuresComparison.mainFeatures.proPlus.transactions"),
            included: true,
          },
          {
            text: t("featuresComparison.mainFeatures.proPlus.einvoicing"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.mainFeatures.premium.transactions"),
            included: true,
          },
          {
            text: t("featuresComparison.mainFeatures.premium.einvoicing"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.mainFeatures.premiumPlus.transactions"),
            included: true,
          },
          {
            text: t("featuresComparison.mainFeatures.premiumPlus.einvoicing"),
            included: true,
          },
        ],
      },
    ],
  },
  {
    icon: <CreditCard size={24} weight="duotone" />,
    title: t("featuresComparison.paymentFeatures.title"),
    columns: [
      {
        features: [
          {
            text: t("featuresComparison.paymentFeatures.recurring"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.partial"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.advanced"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.paymentFeatures.recurring"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.partial"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.advanced"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.paymentFeatures.recurring"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.partial"),
            included: true,
          },
          {
            text: t("featuresComparison.paymentFeatures.advanced"),
            included: true,
          },
        ],
      },
    ],
  },
  {
    icon: <Bell size={24} weight="duotone" />,
    title: t("featuresComparison.notifications.title"),
    columns: [
      {
        features: [
          {
            text: t("featuresComparison.notifications.proPlus"),
            included: true,
          },
          {
            text: t("featuresComparison.notifications.customSender"),
            included: false,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.notifications.premium"),
            included: true,
          },
          {
            text: t("featuresComparison.notifications.customSender"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.notifications.premiumPlus"),
            included: true,
          },
          {
            text: t("featuresComparison.notifications.customSender"),
            included: true,
          },
        ],
      },
    ],
  },
  {
    icon: <DeviceMobile size={24} weight="duotone" />,
    title: t("featuresComparison.mobileApps.title"),
    columns: [
      {
        features: [
          {
            text: t("featuresComparison.mobileApps.merchant"),
            included: true,
          },
          {
            text: t("featuresComparison.mobileApps.customer"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.mobileApps.merchant"),
            included: true,
          },
          {
            text: t("featuresComparison.mobileApps.customer"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.mobileApps.merchant"),
            included: true,
          },
          {
            text: t("featuresComparison.mobileApps.customer"),
            included: true,
          },
        ],
      },
    ],
  },
  {
    icon: <Megaphone size={24} weight="duotone" />,
    title: t("featuresComparison.marketing.title"),
    columns: [
      {
        features: [
          {
            text: t("featuresComparison.marketing.proPlus"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.marketing.premium"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.marketing.premiumPlus"),
            included: true,
          },
        ],
      },
    ],
  },
  {
    icon: <CreditCard size={24} weight="duotone" />,
    title: t("featuresComparison.limits.title"),
    columns: [
      {
        features: [
          { text: t("featuresComparison.limits.minimum"), included: true },
          {
            text: t("featuresComparison.limits.maximumBusiness"),
            included: true,
          },
        ],
      },
      {
        features: [
          { text: t("featuresComparison.limits.minimum"), included: true },
          {
            text: t("featuresComparison.limits.maximumBusiness"),
            included: true,
          },
        ],
      },
      {
        features: [
          { text: t("featuresComparison.limits.minimum"), included: true },
          {
            text: t("featuresComparison.limits.maximumBusiness"),
            included: true,
          },
        ],
      },
    ],
  },
  {
    icon: <Stack size={24} weight="duotone" />,
    title: t("featuresComparison.transactionPricing.title"),
    columns: [
      {
        features: [
          {
            text: t(
              "featuresComparison.transactionPricing.proPlus.transaction"
            ),
            included: true,
          },
          {
            text: t(
              "featuresComparison.transactionPricing.proPlus.notification"
            ),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t(
              "featuresComparison.transactionPricing.premium.transaction"
            ),
            included: true,
          },
          {
            text: t(
              "featuresComparison.transactionPricing.premium.notification"
            ),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t(
              "featuresComparison.transactionPricing.premiumPlus.transaction"
            ),
            included: true,
          },
          {
            text: t(
              "featuresComparison.transactionPricing.premiumPlus.notification"
            ),
            included: true,
          },
        ],
      },
    ],
  },
  {
    icon: <CalendarCheck size={24} weight="duotone" />,
    title: t("featuresComparison.validity.title"),
    columns: [
      {
        features: [
          {
            text: t("featuresComparison.validity.durationBusiness"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.validity.durationBusiness"),
            included: true,
          },
        ],
      },
      {
        features: [
          {
            text: t("featuresComparison.validity.durationBusiness"),
            included: true,
          },
        ],
      },
    ],
  },
];
