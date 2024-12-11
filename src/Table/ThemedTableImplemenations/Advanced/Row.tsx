import React, { useState } from "react";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { RowData } from "../../types";

const AdvancedRowImplementation: React.FC<{
  row: RowData;
  level: number;
  onToggleChart: (indicator: string) => void;
}> = ({ row, onToggleChart }) => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const calculateTrend = (data: { value: number }[]) => {
    const latest = data[data.length - 1]?.value || 0;
    const previous = data[data.length - 2]?.value || 0;
    return ((latest - previous) / previous) * 100;
  };

  const trend = calculateTrend(row.data);
  const latestValue = row.data[row.data.length - 1]?.value || 0;
  const avgValue = row.data.reduce((a, b) => a + b.value, 0) / row.data.length;
  const isHovered = hoveredRow === row.indicator;

  return (
    <motion.tr
      key={row.indicator}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        border-b border-neutral-700 
        transition-all duration-300 
        cursor-pointer 
        ${
          isHovered
            ? "bg-gradient-to-r from-purple-900/30 to-blue-900/30"
            : "hover:bg-neutral-800/50"
        }
      `}
      onHoverStart={() => setHoveredRow(row.indicator)}
      onHoverEnd={() => setHoveredRow(null)}
      onClick={() => onToggleChart(row.indicator)}
    >
      <td className="px-6 py-4 flex items-center space-x-3">
        <AnimatePresence>
          {row.icon && (
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className={`
                text-blue-400 
                opacity-70 
                transition-all 
                ${isHovered ? "scale-110" : ""}
              `}
            >
              {row.icon}
            </motion.span>
          )}
        </AnimatePresence>
        <span className="font-medium text-sm">{row.indicator}</span>
      </td>
      <td className="px-6 py-4 text-sm font-semibold">
        {latestValue.toLocaleString()}
      </td>
      <td
        className={`
        px-6 py-4 
        ${trend >= 0 ? "text-green-400" : "text-red-400"}
      `}
      >
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center space-x-2"
        >
          {trend >= 0 ? (
            <ArrowTrendingUpIcon className="w-4 h-4" />
          ) : (
            <ArrowTrendingDownIcon className="w-4 h-4" />
          )}
          <span>{Math.abs(trend).toFixed(1)}%</span>
        </motion.div>
      </td>
      <td className="px-6 py-4 text-neutral-300 text-sm">
        {avgValue.toFixed(2)}
      </td>
    </motion.tr>
  );
};

export default AdvancedRowImplementation;
