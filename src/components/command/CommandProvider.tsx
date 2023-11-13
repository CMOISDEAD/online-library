import { KBarProvider } from "kbar";
import { CommandMenu } from "./CommandMenu";
import { useTheme } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export const CommandProvider = ({ children }: Props) => {
  const { setTheme } = useTheme();

  const actions = [
    {
      id: "theme",
      name: "Toggle Theme",
      shortcut: ["t"],
      keywords: "theme",
      perform: () => {
        let color =
          window.localStorage.getItem("theme") === "dark" ? "light" : "dark";
        setTheme(color);
      },
    },
    {
      id: "search",
      name: "Search",
      shortcut: ["k"],
      keywords: "search",
      perform: () => {},
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <CommandMenu />
      {children}
    </KBarProvider>
  );
};
