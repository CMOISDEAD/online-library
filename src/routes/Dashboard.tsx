import { Tab, Tabs } from "@nextui-org/react";
import { Books } from "../components/dashboard/Books";
import { Authors } from "../components/dashboard/Authors";

export const Dashboard = () => {
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
