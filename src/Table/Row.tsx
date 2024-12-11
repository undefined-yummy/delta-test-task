import React from "react";

import { RowData } from "./types";
import { useTheme } from "../Theme/useTheme";
import { Themes } from "../Theme/types";

import { ExcelRowImplementation } from "./ThemedTableImplemenations/Excel/Row";
import { BasicRowImplementation } from "./ThemedTableImplemenations/Basic/Row";
import { SpecRowImplementation } from "./ThemedTableImplemenations/Spec/Row";
import AdvancedRowImplementation from "./ThemedTableImplemenations/Advanced/Row";
import { Chart } from "./Chart";

type Props = {
  row: RowData;
  level: number;
  expandedCharts: Record<string, boolean>;
  onToggleChart: (indicator: string) => void;
};

type RowProps = {
  row: RowData;
  level: number;
  onToggleChart: (indicator: string) => void;
};

const ROW_IMPLEMENTATION_MAP: Record<Themes, React.FC<RowProps>> = {
  sharp: BasicRowImplementation,
  spec: SpecRowImplementation,
  fancy: BasicRowImplementation,
  solid: ExcelRowImplementation,
  dark: AdvancedRowImplementation,
};

export const Row = ({ row, level, onToggleChart, expandedCharts }: Props) => {
  const isChartExpanded = expandedCharts[row.indicator];

  const { theme, isDarkTheme } = useTheme();
  const RowImplementation = ROW_IMPLEMENTATION_MAP[theme];

  return (
    <React.Fragment key={row.indicator}>
      <RowImplementation
        row={row}
        level={level}
        onToggleChart={onToggleChart}
      />

      {isChartExpanded && (
        <Chart darkMode={isDarkTheme} data={row.data} label={row.indicator} />
      )}

      {row.children?.map((child) => (
        <Row
          key={child.indicator}
          level={level + 1}
          expandedCharts={expandedCharts}
          row={child}
          onToggleChart={onToggleChart}
        />
      ))}
    </React.Fragment>
  );
};
