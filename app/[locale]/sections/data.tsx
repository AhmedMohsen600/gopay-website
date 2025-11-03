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
