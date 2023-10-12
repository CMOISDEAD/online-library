import { ScrollShadow } from "@nextui-org/react";
import { Sidebar } from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { Navigation } from "./navbar/Navbar";
import { useEffect } from "react";
import useLibraryStore from "../store/store";
import { getUser } from "../api/user";

export const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const staged = JSON.parse(window.localStorage.getItem("user") || "null");
      if (!staged) return navigate("/login");
      const user = await getUser(staged.id);
      useLibraryStore.setState({ user: user });
      window.localStorage.setItem("user", JSON.stringify(user));
    })();
  });

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
