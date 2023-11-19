import { Chip } from "@nextui-org/react";
import { Achievements } from "./Achievements";

export const UserInfo = ({ user }: any) => {
  return (
    <div className="flex flex-grow flex-col gap-4 px-5 md:px-0">
      <h1 className="flex content-center items-center gap-2 font-bold">
        {user.username}
        <Chip color={user.membership ? "primary" : "danger"} variant="shadow">
          {user.membership ? "Premium" : "Free"} user
        </Chip>
        {user.role === "admin" && (
          <Chip color="secondary" variant="shadow">
            Admin
          </Chip>
        )}
      </h1>
      <div className="info">
        <p className="text-lg">
          Name: {user.firstname} {user.lastname}
        </p>
        <p className="text-lg">Email: {user.email}</p>
        <p className="text-sm font-bold">
          join date: {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
      <Achievements />
    </div>
  );
};
