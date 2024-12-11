import React from "react";
import { RowData } from "../../types";

type Props = {
  rows: RowData[];
  toggleChart: (indicator: string) => void;
  expandedCharts: Record<string, boolean>;
  headings: [string, string, string, string];
};

export const SharpTableImplementation: React.FC<Props> = ({
  rows,
  toggleChart,
  headings,
}) => {
  const calculateTrend = (data: { value: number }[]) => {
    const last = data[data.length - 1]?.value || 0;
    const previous = data[data.length - 2]?.value || 0;
    return ((last - previous) / previous) * 100;
  };

  return (
    <div className="bg-black text-white font-mono tracking-tighter border-4 border-zinc-800 p-2  max-w-6xl mx-auto  shadow-lg rounded-lg">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-zinc-700">
            {headings.map((header) => (
              <th
                key={header}
                className="
                  uppercase 
                  text-xs 
                  font-bold 
                  text-zinc-400 
                  py-3 
                  px-4 
                  text-left
                "
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const trend = calculateTrend(row.data);
            const latestValue = row.data[row.data.length - 1]?.value || 0;
            const avgValue =
              row.data.reduce((a, b) => a + b.value, 0) / row.data.length;

            return (
              <tr
                key={row.indicator}
                className="
                  border-b 
                  border-zinc-800 
                  hover:bg-zinc-900 
                  transition-colors 
                  cursor-pointer
                "
                onClick={() => toggleChart(row.indicator)}
              >
                <td className="py-3 px-4 font-semibold text-sm">
                  {row.indicator.toUpperCase()}
                </td>
                <td className="py-3 px-4 text-sm">
                  {latestValue.toLocaleString()}
                </td>
                <td
                  className={`
                  py-3 px-4 text-sm 
                  ${trend >= 0 ? "text-emerald-400" : "text-red-500"}
                `}
                >
                  {trend.toFixed(2)}%
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  {avgValue.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
