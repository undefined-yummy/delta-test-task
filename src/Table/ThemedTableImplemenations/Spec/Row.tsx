import React from "react";
import cn from "classnames";

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

export const SpecRowImplementation = ({ row, level, onToggleChart }: Props) => {
  const today = row.data[row.data.length - 1]?.value || 0;
  const yesterday = row.data[row.data.length - 2]?.value || 0;
  const percentageDifference = calculatePercentageDifference(today, yesterday);
  const dayOfWeekAverage = getDayOfWeekAverage(row.data);

  return (
    <React.Fragment key={row.indicator}>
      <tr
        className={`cursor-pointer transition-all duration-200 bg-gray-100 text-gray-600 font-semibold ${
          level === 0 ? "hover:bg-gray-50" : "hover:bg-gray-100"
        }`}
        onClick={() => onToggleChart(row.indicator)}
      >
        <td
          className={`  px-6 py-4 text-sm font-medium ${
            level > 0 ? "pl-8 text-gray-600" : "text-gray-800"
          } flex items-center gap-2`}
        >
          {row.indicator}
        </td>
        <td className=" bg-blue-100 px-6 py-4 text-right">
          <span className="">{today}</span>
        </td>
        <td
          className={cn("px-6 py-4 text-center flex justify-between items-center", {
            "text-green-600 bg-green-50": today > yesterday,
            "text-red-600 bg-red-50": today < yesterday,
          })}
        >
          <span className="font-semibold text-gray-600">{yesterday}</span>{" "}
          <span className="">{`${percentageDifference.toFixed(
            2
          )}%`}</span>
        </td>
        <td className="  px-6 py-4 text-center">
          <span className="font-semibold">{dayOfWeekAverage.toFixed(2)}</span>
        </td>
      </tr>
    </React.Fragment>
  );
};
