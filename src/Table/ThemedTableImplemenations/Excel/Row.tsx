import { RowData } from "../../types";

type Props = {
  row: RowData;
  level: number;
  onToggleChart: (indicator: string) => void;
};

const calculatePercentageDifference = (today: number, yesterday: number) => {
  return yesterday !== 0 ? ((today - yesterday) / yesterday) * 100 : 0;
};

const getDayOfWeekAverage = (data: { value: number }[]) => {
  return data.reduce((sum, item) => sum + item.value, 0) / data.length;
};

export const ExcelRowImplementation = ({
  row,
  level,
  onToggleChart,
}: Props) => {
  const today = row.data[row.data.length - 1]?.value || 0;
  const yesterday = row.data[row.data.length - 2]?.value || 0;
  const percentageDifference = calculatePercentageDifference(today, yesterday);
  const dayOfWeekAverage = getDayOfWeekAverage(row.data);

  return (
    <tr
      className={`
        transition-all duration-300 ease-in-out 
        border-b border-neutral-300 
        hover:bg-neutral-100 
        font-inter 
        ${level > 0 ? "bg-neutral-50" : ""}
      `}
      onClick={() => onToggleChart(row.indicator)}
    >
      <td
        className={`
        px-6 py-4 
        text-base 
        font-semibold 
        text-neutral-800 
        ${level > 0 ? "pl-12" : ""}
      `}
      >
        {level > 0 && <span className="mr-2 text-neutral-500">→</span>}
        {row.indicator}
      </td>
      <td className="px-6 py-4 text-center text-base text-neutral-700">
        {today.toLocaleString()}
      </td>
      <td
        className={`
        px-6 py-4 text-center 
        ${percentageDifference < 0 ? "text-red-700" : "text-green-700"}
      `}
      >
        {yesterday.toLocaleString()}{" "}
        <span className="text-xs text-neutral-600 ml-1">
          ({percentageDifference.toFixed(2)}%)
        </span>
      </td>
      <td className="px-6 py-4 text-center text-base text-neutral-700">
        {dayOfWeekAverage.toFixed(2)}
      </td>
    </tr>
  );
};
