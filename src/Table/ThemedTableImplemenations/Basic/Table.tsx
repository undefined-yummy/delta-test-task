import React from "react";
import { RowData } from "../../types";
import { Row } from "../../Row";

type Props = {
  rows: RowData[];
  toggleChart: (indicator: string) => void;
  expandedCharts: Record<string, boolean>;
  headings: [string, string, string, string];
};

const BasicTableImplementation: React.FC<Props> = ({
  rows,
  expandedCharts,
  toggleChart,
  headings,
}) => {
  return (
    <table className="w-full border-collapse p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      <thead className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <tr>
          <th className="px-4 py-3 text-left text-sm font-medium">
            {headings[0]}
          </th>
          <th className="px-4 py-3 text-center text-sm font-medium">
            {headings[1]}
          </th>
          <th className="px-4 py-3 text-center text-sm font-medium">
            {headings[2]}
          </th>
          <th className="px-4 py-3 text-center text-sm font-medium">
            {headings[3]}
          </th>
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

export default BasicTableImplementation;
