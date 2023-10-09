import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CommandProvider } from "./command/CommandProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <CommandProvider>{children}</CommandProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};
