import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import useTheme from "@/hooks/useTheme";

const iconByTheme = {
  dark: <Sun />,
  light: <Moon />,
};

const ModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className="w-10" aria-label="mode-toggle" onClick={toggleTheme}>
      {iconByTheme[theme]}
    </Button>
  );
};

export default ModeToggle;
