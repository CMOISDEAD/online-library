import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import useLibraryStore from "../store/store";
import { Picture } from "../components/profile/Picture";
import { RecentsSection } from "../components/profile/RecentsSection";
import { UserInfo } from "../components/profile/UserInfo";
import { FavoriteSection } from "../components/profile/FavoriteSection";
import { BillingHistory } from "../components/profile/BillingHistory";

export const Profile = () => {
  const user = useLibraryStore((state) => state.user);
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex justify-between gap-4">
        <div className="flex justify-between gap-10">
          <div className="hidden md:block">
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
          </div>
          <UserInfo />
        </div>
        <Card className="hidden w-1/4 lg:block">
          <CardHeader className="text-xl font-bold">Friends</CardHeader>
          <CardBody>
            <div className="mt-5">
              <p className="text-lg text-gray-500">
                You have no friends yet :(
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div className="flex flex-grow flex-col gap-4">
          <RecentsSection />
          <FavoriteSection />
        </div>
        <BillingHistory />
      </div>
      <Picture isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};
