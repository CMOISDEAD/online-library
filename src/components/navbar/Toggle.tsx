import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PiMoon, PiSun } from "react-icons/pi";

export const Toggle = () => {
  const [isDark, setIsDark] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="light" radius="full" onClick={toggleDarkMode}>
      {isDark ? <PiMoon /> : <PiSun />}
    </Button>
  );
};
