// Payment sections data
import {
  CheckCircle,
  XCircle,
  Clock,
  ChartLine,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import {
  DailyTransferIcon,
  DuePaymentsIcon,
  PaidIcon,
  PaidRecurringIcon,
  TotalAccountsIcon,
  TotalPaymentsIcon,
  UnpaidIcon,
} from "../components/icons";
import { OfflinePaymentsIcon } from "../components/icons/offlinePaymentsIcon";

interface StatCardData {
  id: string;
  icon: React.ReactNode;
  titleKey: string;
  amount: string;
  count: string;
  chartData: number[];
  variant?: "oneTime" | "recurring";
}

interface PaymentSection {
  sectionTitleKey: string;
  cards: StatCardData[];
}

export const paymentSections: PaymentSection[] = [
  {
    sectionTitleKey: "oneTimePayments",
    cards: [
      {
        variant: "oneTime",
        id: "paid",
        icon: <PaidIcon />,
        titleKey: "paid",
        amount: "212,548,104.54",
        count: "164,233",
        chartData: [
          30, 34, 32, 36, 33, 37, 35, 39, 36, 38, 37, 40, 38, 41, 39, 42,
        ],
      },
      {
        variant: "oneTime",
        id: "unpaid",
        icon: <UnpaidIcon />,
        titleKey: "unpaid",
        amount: "163,548,104.54",
        count: "96,031",
        chartData: [
          55, 48, 52, 45, 50, 47, 53, 49, 55, 51, 48, 52, 48, 54, 50, 56,
        ],
      },
      {
        variant: "oneTime",
        id: "due",
        icon: <DuePaymentsIcon />,
        titleKey: "duePayments",
        amount: "112,560,030.54",
        count: "63,174",
        chartData: [
          40, 45, 42, 48, 52, 58, 55, 62, 68, 65, 70, 67, 72, 68, 74, 71,
        ],
      },
      {
        variant: "oneTime",
        id: "total",
        icon: <TotalPaymentsIcon />,
        titleKey: "totalPayments",
        amount: "214,223,072.29",
        count: "145,390",
        chartData: [
          50, 54, 58, 56, 62, 68, 72, 75, 78, 82, 85, 88, 84, 90, 87, 92,
        ],
      },
    ],
  },
  {
    sectionTitleKey: "recurringPayments",
    cards: [
      {
        variant: "recurring",
        id: "totalAccounts",
        icon: <TotalAccountsIcon />,
        titleKey: "totalAccounts",
        amount: "1,275,369.00",
        count: "123",
        chartData: [
          60, 65, 58, 70, 68, 72, 65, 75, 70, 78, 72, 80, 75, 82, 78, 85,
        ],
      },
      {
        variant: "recurring",
        id: "recurringPaid",
        icon: <PaidRecurringIcon />,
        titleKey: "recurringPaid",
        amount: "378,469.20",
        count: "89",
        chartData: [
          50, 55, 60, 58, 65, 62, 68, 70, 72, 75, 78, 76, 80, 82, 85, 88,
        ],
      },
      {
        variant: "recurring",
        id: "offlinePayments",
        icon: <OfflinePaymentsIcon />,
        titleKey: "offlinePayments",
        amount: "27,565,019.00",
        count: "18,867",
        chartData: [
          40, 38, 42, 45, 43, 48, 46, 50, 52, 48, 55, 53, 58, 56, 60, 62,
        ],
      },
      {
        variant: "recurring",
        id: "dailyTransferAmount",
        icon: <DailyTransferIcon />,
        titleKey: "dailyTransferAmount",
        amount: "28,271,970.05",
        count: "15,961",
        chartData: [
          55, 60, 58, 65, 70, 68, 75, 72, 78, 82, 80, 85, 88, 86, 90, 92,
        ],
      },
    ],
  },
];

export interface ProductCardData {
  id: string;
  imagePath?: string; // Optional: path to the visual content image
}

export const productSuiteData: ProductCardData[] = [
  {
    id: "gopay",
    imagePath:
      "https://framerusercontent.com/images/3W8VMxNI3mLuPxBop0eJIskq4.png?width=1024&height=677",
  },
  {
    id: "goinvoice",
    imagePath:
      "https://framerusercontent.com/images/8QZ9CFJ6kIU0Hh7V0AO0auNAoU.png?width=1190&height=1684",
  },
  {
    id: "gosplit",
    imagePath:
      "https://framerusercontent.com/images/DtDFaDVKYf5tTSECoCxchhNvRI.png?width=1060&height=428",
  },
  {
    id: "goonline",
    imagePath:
      "https://framerusercontent.com/images/dltRp4qIsFlPJXK0LAtdmFuymU.png?width=1060&height=394",
  },
  {
    id: "gopayPlus",
    imagePath:
      "https://framerusercontent.com/images/pekNvaXoQZmZLXJYvEO1C7vjGU.png?width=548&height=836",
  },
];

export interface ImpactCardData {
  id: string;
  iconType: "up" | "down";
}

export const impactCardsData: ImpactCardData[] = [
  {
    id: "paymentSuccessRate",
    iconType: "up",
  },
  {
    id: "dso",
    iconType: "down",
  },
  {
    id: "costPerCollection",
    iconType: "down",
  },
  {
    id: "financeTeamProductivity",
    iconType: "up",
  },
  {
    id: "reconciliationEffort",
    iconType: "down",
  },
  {
    id: "complianceOverhead",
    iconType: "down",
  },
];

export const clientLogos = [
  {
    src: "https://framerusercontent.com/images/ZGXekz2SbwsanSSV6IAY9mtyc.png?scale-down-to=512&width=914&height=273",
    alt: "Saudi Finance Company",
  },
  {
    src: "https://framerusercontent.com/images/Lcj0LwR6PdG9wIwE3Uf9nSMwsQ.png?scale-down-to=512&width=862&height=312",
    alt: "King Faisal School",
  },
  {
    src: "https://framerusercontent.com/images/BZ5sJ2p6lBLEWvpBmjiLZj8Zd0.png?scale-down-to=512&width=1474&height=356",
    alt: "Energy Tech",
  },
  {
    src: "https://framerusercontent.com/images/L6hgPNJ3xpgF93Wkj9gBhLv0.png?scale-down-to=512&width=670&height=395",
    alt: "Tabadul",
  },
  {
    src: "https://framerusercontent.com/images/c5vOTMFCdUMkzbrtku3R4CPhvY.png?scale-down-to=512&width=1660&height=376",
    alt: "Saudi Diesel Equipment",
  },
  {
    src: "https://framerusercontent.com/images/1hxCdHcmn6V3cjWEZoQcDzfHc0.png?scale-down-to=512&width=1921&height=1081",
    alt: "Kayan",
  },
  {
    src: "https://framerusercontent.com/images/IZSGveDTbIDhCi9IvWmk77b9A.png?scale-down-to=512&width=1921&height=1081",
    alt: "Royal Commission for AlUla",
  },
  {
    src: "https://framerusercontent.com/images/6A6laD6Edx83nZn2IsH3998Eoc.png?scale-down-to=512&width=1920&height=1081",
    alt: "Tawzea Aquapor",
  },
  {
    src: "https://framerusercontent.com/images/D6AI4ZRysdaZIvEc2OZU5iTT4g.png?scale-down-to=512&width=662&height=223",
    alt: "Gulf Health Council",
  },
  {
    src: "https://framerusercontent.com/images/IGIej5nDpb5zc3tgvLN0KGzrvMg.png?width=400&height=400",
    alt: "Obekan Digital Solutions",
  },
  {
    src: "https://framerusercontent.com/images/0GUl24oECz88GQh6SEKqnIRe8e4.png?scale-down-to=512&width=722&height=308",
    alt: "Hala Hala",
  },
  {
    src: "https://framerusercontent.com/images/twewF3Px4rvl9nOwEwx4WSsstS4.png?scale-down-to=512&width=1920&height=1081",
    alt: "Sayara",
  },
  {
    src: "https://framerusercontent.com/images/Kob5cVGwXFIwlfdI7pmd1hOrDM.png?scale-down-to=512&width=1921&height=1081",
    alt: "Dalah",
  },
  {
    src: "https://framerusercontent.com/images/FlQunIZqjfebLdGMR3xDYucEE.png?width=400&height=221",
    alt: "Four Winds Saudi Arabia",
  },
  {
    src: "https://framerusercontent.com/images/IfNQS26Iqfi6OM4o9tYhcEyyxc.png?scale-down-to=512&width=620&height=403",
    alt: "AgriServ",
  },
  {
    src: "https://framerusercontent.com/images/RTsbG1m1XpyabN2HTGaLhSrrc.png?scale-down-to=512&width=1920&height=1080",
    alt: "Riyad Bank",
  },
  {
    src: "https://framerusercontent.com/images/6fh5BaVm8Ul4uSLjrGWV63v17g.png?scale-down-to=512&width=1920&height=1081",
    alt: "Moyasar",
  },
  {
    src: "https://framerusercontent.com/images/jwCpb73eFoHGox3cfH5ntFYaKA.png?scale-down-to=512&width=1633&height=888",
    alt: "PayTabs",
  },
  {
    src: "https://framerusercontent.com/images/1RSftnXeJUgSVSCTSJvrN2xPgjA.png?scale-down-to=512&width=600&height=81",
    alt: "Foodics",
  },
  {
    src: "https://framerusercontent.com/images/DgwN66giW57lciwQUWj8rqMYyFY.png?scale-down-to=512&width=1921&height=1081",
    alt: "Tawteen",
  },
  {
    src: "https://framerusercontent.com/images/9Gld5P9CS3xesOxMF80IDz8zc.png?width=500&height=250",
    alt: "Urway Payment Gateway",
  },
  {
    src: "https://framerusercontent.com/images/YkZIN6u1hLxgwivWa67bcC9VWlc.png?width=479&height=105",
    alt: "Payments",
  },
];
