import React from "react";
import Table from "../Table/Table";
import { ThemeSelector } from "../Theme/ThemeSelector";
import { useTheme } from "../Theme";
import cn from "classnames";
import { generateRandomRows } from "../utils/randomDataGenerator";

export const Dashboard: React.FC = () => {
  const { theme } = useTheme();
  const [rows, setRows] = React.useState(generateRandomRows());

  return (
    <div
      className={cn(" font-inter", {
        "bg-black text-white": theme === "sharp",
      })}
    >
      <div className="flex flex-col justify-center items-center mb-16 pt-16">
        <div className="mb-16">
          <ThemeSelector />
        </div>
        <div>
          <button
            className="bg-white text-black px-4 py-2 rounded-md texl-2xl border-4"
            onClick={() => setRows(generateRandomRows())}
          >
            Сгенерировать данные заново
          </button>
        </div>
      </div>
      <Table rows={rows} />
    </div>
  );
};

