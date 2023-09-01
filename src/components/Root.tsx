import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="flex gap-4 w-full h-full">
      <Sidebar />
      <div className="container flex-grow my-2 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
