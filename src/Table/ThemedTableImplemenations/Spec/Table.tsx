import React from "react";
import { RowData } from "../../types";
import { Row } from "../../Row";

type Props = {
  rows: RowData[];
  toggleChart: (indicator: string) => void;
  expandedCharts: Record<string, boolean>;
  headings: [string, string, string, string];
};

const SpecTableImplementation: React.FC<Props> = ({
  rows,
  expandedCharts,
  toggleChart,
  headings,
}) => {
  return (
    <table
      className="w-full border-separate border-spacing-1 max-w-6xl mx-auto "
      cellSpacing={4}
      cellPadding={4}
    >
      <thead className=" to-blue-500 text-gray-600">
        <tr>
          {headings.map((header) => (
            <th
              key={header}
              className="px-4 py-3 text-left text-sm font-medium bg-gray-200"
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
            onToggleChart={toggleChart}
            expandedCharts={expandedCharts}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SpecTableImplementation;
