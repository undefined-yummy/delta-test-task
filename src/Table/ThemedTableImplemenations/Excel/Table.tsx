import React from "react";
import { RowData } from "../../types";
import { Row } from "../../Row";

type Props = {
  rows: RowData[];
  toggleChart: (indicator: string) => void;
  expandedCharts: Record<string, boolean>;
  headings: [string, string, string, string];
};

const ExcelTableImplementation: React.FC<Props> = ({
  rows,
  toggleChart,
  expandedCharts,
  headings
}) => {
  return (
    <div className="border border-neutral-300 overflow-hidden font-inter  max-w-6xl mx-auto  bg-white shadow-lg rounded-lg">
      <table className="min-w-full">
        <thead className="bg-neutral-900 text-neutral-100">
          <tr>
            {headings.map((header) => (
              <th
                key={header}
                className="
                  px-6 py-4 
                  text-left 
                  text-sm 
                  font-bold 
                  tracking-wider 
                  uppercase 
                  text-neutral-300
                "
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <Row
              key={row.indicator}
              row={row}
              level={0}
              expandedCharts={expandedCharts}
              onToggleChart={toggleChart}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelTableImplementation;
