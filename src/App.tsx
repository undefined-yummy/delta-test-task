import { Dashboard } from "./Dashboard/Dashboard";
import { useTheme } from "./Theme";
import cn from "classnames";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={cn("w-screen h-screen transition-colors", {
        "bg-black": theme === "sharp",
        "bg-gradient-to-br from-blue-400/5 to-purple-300/10": theme === "sharp",
      })}
    >
      <Dashboard />
    </div>
  );
}

export default App;
