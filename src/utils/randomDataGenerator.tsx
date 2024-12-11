import {
  ChartBarIcon,
  BanknotesIcon,
  CreditCardIcon,
  ReceiptRefundIcon,
  UserGroupIcon,
  TrashIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const randomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomData = (baseValue: number, days: number = 15) =>
  Array.from({ length: days }, (_, index) => ({
    date: `2024-12-0${4 + index}`,
    value: Number(randomInRange(baseValue * 0.8, baseValue * 1.2).toFixed(0)),
  }));

export const generateRandomRows = () => [
  {
    indicator: "Выручка",
    icon: <ChartBarIcon />,
    data: generateRandomData(160000),
    children: [
      {
        indicator: "Наличные",
        icon: <ChartBarIcon />,
        data: generateRandomData(52000),
      },
      {
        indicator: "Безналичные",
        icon: <BanknotesIcon />,
        data: generateRandomData(72000),
      },
      {
        indicator: "Кредитки",
        icon: <CreditCardIcon />,
        data: generateRandomData(36000),
      },
    ],
  },
  {
    indicator: "Средний чек",
    icon: <ReceiptRefundIcon />,
    data: generateRandomData(850),
  },
  {
    indicator: "Средний гость",
    icon: <UserGroupIcon />,
    data: generateRandomData(320),
  },
  {
    indicator: "Удаления из чека после оплаты",
    icon: <TrashIcon />,
    data: generateRandomData(8),
  },
  {
    indicator: "Удаления из чека до оплаты",
    icon: <TrashIcon />,
    data: generateRandomData(12),
  },
  {
    indicator: "Количество чеков",
    icon: <DocumentTextIcon />,
    data: generateRandomData(220),
  },
  {
    indicator: "Количество гостей",
    icon: <UserIcon />,
    data: generateRandomData(520),
  },
];
