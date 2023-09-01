import { Footer } from "./Footer";
import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <div className="flex w-full h-full">
        <Sidebar />
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};
