import React, { useState } from "react";
import { RowData } from "./types";
import { useTheme } from "../Theme";
import { Themes } from "../Theme/types";
import BasicTableImplementation from "./ThemedTableImplemenations/Basic/Table";
import ExcelTableImplementation from "./ThemedTableImplemenations/Excel/Table";
import { SharpTableImplementation } from "./ThemedTableImplemenations/Sharp/Table";
import SpecTableImplementation from "./ThemedTableImplemenations/Spec/Table";
import AdvancedTableImplementation from "./ThemedTableImplemenations/Advanced/Table";
import { AnimatePresence, motion } from "framer-motion";

type TableProps = {
  rows: RowData[];
  toggleChart: (indicator: string) => void;
  expandedCharts: Record<string, boolean>;
  headings: [string, string, string, string];
};

const TABLE_IMPLEMENTATION_MAP: Record<Themes, React.FC<TableProps>> = {
  spec: SpecTableImplementation,
  dark: AdvancedTableImplementation,
  fancy: BasicTableImplementation,
  solid: ExcelTableImplementation,
  sharp: SharpTableImplementation,
};

type Props = {
  rows: RowData[];
};

const Table: React.FC<Props> = ({ rows }) => {
  const [expandedCharts, setExpandedCharts] = useState<Record<string, boolean>>(
    {}
  );

  const { theme } = useTheme();

  const toggleChart = (indicator: string) => {
    setExpandedCharts((prev) => ({
      ...prev,
      [indicator]: !prev[indicator],
    }));
  };

  const TableImplementation = TABLE_IMPLEMENTATION_MAP[theme];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          duration: 0.24,
          ease: "easeInOut",
        }}
      >
        <TableImplementation
          rows={rows}
          toggleChart={toggleChart}
          expandedCharts={expandedCharts}
          headings={[
            "Показатель",
            "Текущий день",
            "Вчера",
            "Этот день недели (Avg)",
          ]}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Table;
