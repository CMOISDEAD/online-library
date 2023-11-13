import { ScrollShadow } from "@nextui-org/react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Navigation } from "./navbar/Navbar";
import { useUser } from "../hooks/useUser";
import { useData } from "../hooks/useData";
import useLibraryStore from "../store/store";

export const Root = () => {
  const user = useLibraryStore((state) => state.user);
  useUser();
  useData();

  return (
    <div className="flex h-full w-full">
      <Sidebar />
      {user.id && (
        <ScrollShadow className="container mx-auto">
          <Navigation />
          <div className="p-5">
            <Outlet />
          </div>
        </ScrollShadow>
      )}
    </div>
  );
};
