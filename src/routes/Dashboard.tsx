import { Tab, Tabs } from "@nextui-org/react";
import { Books } from "../components/dashboard/Books";
import { Authors } from "../components/dashboard/Authors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLibraryStore from "../store/store";

export const Dashboard = () => {
  const user = useLibraryStore((state) => state.user);
  const navigation = useNavigate();

  useEffect(() => {
    if (user.role !== "admin") return navigation("/");
  }, []);

  return (
    <div>
      <Tabs color="primary" variant="bordered">
        <Tab key="books" title="Books">
          <Books />
        </Tab>
        <Tab key="authors" title="Authors">
          <Authors />
        </Tab>
        <Tab key="categories" title="Categories"></Tab>
        <Tab key="users" title="Users"></Tab>
      </Tabs>
    </div>
  );
};
