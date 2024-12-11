import { motion } from "framer-motion";
import { RowData } from "../../types";
import { Row } from "../../Row";

const AdvancedTableImplementation: React.FC<{
  rows: RowData[];
  toggleChart: (indicator: string) => void;
  expandedCharts: Record<string, boolean>;
  headings: [string, string, string, string];
}> = ({ rows, toggleChart, expandedCharts, headings }) => {
  return (
    <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-black p-8 rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full text-neutral-100 relative">
          <thead className="sticky top-0 z-10">
            <tr className="border-b border-neutral-700 font-bold backdrop-blur-sm">
              {headings.map((header) => (
                <motion.th
                  key={header}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="
                    px-6 py-4 
                    text-left 
                    text-xs 
                    font-bold
                    uppercase 
                    tracking-wider 
                    text-neutral-300
                  "
                >
                  {header}
                </motion.th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <Row
                expandedCharts={expandedCharts}
                key={row.indicator}
                row={row}
                level={0}
                onToggleChart={toggleChart}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvancedTableImplementation;
