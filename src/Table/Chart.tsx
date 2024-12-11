import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { DataPoint } from "./types";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

type Props = {
  darkMode: boolean;
  label: string;
  data: DataPoint[];
};

const formatXAxis = (tick: string) => {
  const date = new Date(tick);
  return format(date, "d MMM", { locale: ru });
};

export function Chart({ darkMode, data, label }: Props) {
  return (
    <tr>
      <td
        colSpan={4}
        className={`px-6 py-4 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <ResponsiveContainer height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            {/* Gradient Stroke */}
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={darkMode ? "#4caf50" : "#8884d8"}
                  stopOpacity={1}
                />
                <stop
                  offset="100%"
                  stopColor={darkMode ? "#66bb6a" : "#82ca9d"}
                  stopOpacity={1}
                />
              </linearGradient>
            </defs>
            <Line
              type="monotone"
              dataKey="value"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: darkMode ? "#66bb6a" : "#82ca9d",
              }}
              activeDot={{ r: 6 }}
            />
            <CartesianGrid
              stroke={darkMode ? "#444" : "#e0e0e0"}
              strokeDasharray="5 5"
            />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12, fill: darkMode ? "#bbb" : "#555" }}
              tickFormatter={formatXAxis}
            />
            <YAxis
              tick={{ fontSize: 12, fill: darkMode ? "#bbb" : "#555" }}
              domain={[
                (dataMin: number) => Math.floor(dataMin * 0.9),
                (dataMax: number) => Math.ceil(dataMax * 1.1),
              ]}
            />
            <Tooltip
              formatter={(value) => [value, label]}
              contentStyle={{
                backgroundColor: darkMode ? "#424242" : "#f9f9f9",
                border: `1px solid ${darkMode ? "#666" : "#ccc"}`,
              }}
              labelStyle={{
                fontWeight: "bold",
                color: darkMode ? "#fff" : "#000",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </td>
    </tr>
  );
}
