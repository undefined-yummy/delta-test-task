import React from "react";

import { RowData } from "../../types";
import {
  calculatePercentageDifference,
  getDayOfWeekAverage,
} from "../../utils";

type Props = {
  row: RowData;
  level: number;
  onToggleChart: (indicator: string) => void;
};

export const BasicRowImplementation = ({
  row,
  level,
  onToggleChart,
}: Props) => {
  const today = row.data[row.data.length - 1]?.value || 0;
  const yesterday = row.data[row.data.length - 2]?.value || 0;
  const percentageDifference = calculatePercentageDifference(today, yesterday);
  const dayOfWeekAverage = getDayOfWeekAverage(row.data);

  return (
    <React.Fragment key={row.indicator}>
      <tr
        className={`cursor-pointer transition-all duration-200 ${
          level === 0 ? "hover:bg-gray-50" : "hover:bg-gray-100"
        }`}
        onClick={() => onToggleChart(row.indicator)}
      >
        <td
          className={`border-b border-gray-300 px-6 py-4 font-medium ${
            level > 0 ? "pl-8 text-gray-600" : "text-gray-800"
          } flex items-center gap-2`}
        >
          {row.icon && (
            <span className="h-4 w-4 text-blue-600">{row.icon}</span>
          )}
          {level > 0 && "↳ "}
          {row.indicator}
        </td>
        <td className="border-b border-gray-300 px-6 py-4 text-center">
          <span className="font-semibold">{today}</span>
        </td>
        <td
          className={`border-b border-gray-300 px-6 py-4 text-center ${
            percentageDifference < 0 ? "text-red-600" : "text-green-600"
          }`}
        >
          <span className="font-semibold">{yesterday}</span>{" "}
          <span className="text-xs">{`(${percentageDifference.toFixed(
            2
          )}%)`}</span>
        </td>
        <td className="border-b border-gray-300 px-6 py-4 text-center">
          <span className="font-semibold">{dayOfWeekAverage.toFixed(2)}</span>
        </td>
      </tr>
    </React.Fragment>
  );
};
