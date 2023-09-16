import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
