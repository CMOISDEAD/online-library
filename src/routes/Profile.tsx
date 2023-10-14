import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Chip, Image, Tooltip, useDisclosure } from "@nextui-org/react";
import useLibraryStore from "../store/store";
import { Picture } from "../components/profile/Picture";
import { RecentsSection } from "../components/RecentsSection";
import { Progress } from "../components/profile/Progress";

export const Profile = () => {
  const user = useLibraryStore((state) => state.user);
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-10">
          <Tooltip
            content="Select profile image"
            placement="bottom"
            color="primary"
            offset={-7}
          >
            <Image
              isBlurred
              src={user.photo}
              width={500}
              height={300}
              fallbackSrc="https://via.placeholder.com/500x300"
              className="cursor-pointer"
              onClick={onOpen}
            />
          </Tooltip>
          <div className="flex flex-grow flex-col gap-4">
            <h1 className="flex content-center items-center gap-2 font-bold">
              {user.username}
              <Chip
                color={user.membership ? "primary" : "danger"}
                variant="shadow"
              >
                {user.membership ? "Premium" : "Free"} user
              </Chip>
              {user.role === "admin" && (
                <Chip color="success" variant="shadow">
                  Admin
                </Chip>
              )}
            </h1>
            <p>
              {user.firstname} {user.lastname}
            </p>
            <p>{user.email}</p>
            <p>join date: {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
          {/* <Progress /> */}
        </div>
        <RecentsSection />
      </div>
      <Picture isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
