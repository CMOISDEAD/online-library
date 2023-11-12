import { ScrollShadow } from "@nextui-org/react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Navigation } from "./navbar/Navbar";
import { useUser } from "../hooks/useUser";
import { useData } from "../hooks/useData";

export const Root = () => {
  useUser();
  useData();

  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <ScrollShadow className="container mx-auto">
        <Navigation />
        <div className="p-5">
          <Outlet />
        </div>
      </ScrollShadow>
    </div>
  );
};
