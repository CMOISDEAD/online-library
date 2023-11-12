import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Image,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import useLibraryStore from "../store/store";
import { Picture } from "../components/profile/Picture";
import { RecentsSection } from "../components/RecentsSection";
import { UserInfo } from "../components/profile/UserInfo";
import { FavoriteSection } from "../components/profile/FavoriteSection";

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
        <div className="flex justify-between gap-4">
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
            <UserInfo />
          </div>
          <Card className="w-1/4">
            <CardBody>
              <h1 className="text-xl font-bold">Friends</h1>
              <div className="mt-5">
                <p className="text-lg text-gray-500">
                  You have no friends yet :(
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
        <RecentsSection />
        <FavoriteSection />
      </div>
      <Picture isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
