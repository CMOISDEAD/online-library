import { ScrollShadow } from "@nextui-org/react";
import { Sidebar } from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { Navigation } from "./navbar/Navbar";
import { useEffect } from "react";
import useLibraryStore from "../store/store";

export const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) return navigate("/login");
    useLibraryStore.setState({ user: JSON.parse(user) });
  }, []);

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
