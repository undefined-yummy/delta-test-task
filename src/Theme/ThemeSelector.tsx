import { useTheme } from ".";
import { THEMES } from "./consts";

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ThemeSelector: React.FC = () => {
  const { setTheme, theme } = useTheme();

  const currentIndex = THEMES.indexOf(theme);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setTheme(THEMES[nextIndex]);
  };

  const handlePrevious = () => {
    const previousIndex = (currentIndex - 1 + THEMES.length) % THEMES.length;
    setTheme(THEMES[previousIndex]);
  };

  return (
    <div className="flex items-center justify-center space-x-6 select-none">
      <button
        onClick={handlePrevious}
        className="
          group p-3 
        hover:bg-neutral-200 
          transition-all duration-300 
          shadow-lg hover:shadow-xl
          focus:outline-none focus:ring-4 focus:ring-neutral-300
        "
      >
        <ChevronLeftIcon
          className="
            w-12 h-12 
            text-neutral-700 
            group-hover:text-neutral-900 
            transition-colors
          "
          strokeWidth={1.5}
        />
      </button>

      <div
        className="
          text-7xl font-bold 
          px-12 py-6 
          from-neutral-100 to-neutral-200 
          min-w-[500px] 
          text-center 
          text-neutral-800
          select-none
          transition-all duration-300 
        "
      >
        {theme}
      </div>

      <button
        onClick={handleNext}
        className="
          group rounded-full p-3 
          transition-all duration-300 
          shadow-lg hover:shadow-xl
          focus:outline-none focus:ring-4 focus:ring-neutral-300
        "
      >
        <ChevronRightIcon
          className="
            w-12 h-12 
            text-neutral-700 
            group-hover:text-neutral-900 
            transition-colors
          "
          strokeWidth={1.5}
        />
      </button>
    </div>
  );
};

export { ThemeSelector };
