import { Tab, Tabs } from "@nextui-org/react";
import { Books } from "../components/dashboard/books/Books";
import { Authors } from "../components/dashboard/Authors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLibraryStore from "../store/store";
import { Category } from "../components/dashboard/Category";

export const Dashboard = () => {
  const user = useLibraryStore((state) => state.user);
  const navigation = useNavigate();

  useEffect(() => {
    if (user.role !== "admin") return navigation("/");
  }, []);

  return (
    <div className="w-full">
      <Tabs color="primary">
        <Tab key="books" title="Books">
          <Books />
        </Tab>
        <Tab key="authors" title="Authors">
          <Authors />
        </Tab>
        <Tab key="categories" title="Categories">
          <Category />
        </Tab>
        <Tab key="users" title="Users"></Tab>
      </Tabs>
    </div>
  );
};
