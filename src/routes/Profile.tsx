import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { getUser } from "../api/user";

interface Props {
  owner: boolean;
}

export const Profile = ({ owner }: Props) => {
  const [user, setUser] = useState<any>(null);
  const alt = useLibraryStore((state) => state.user);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (owner || !id) {
        console.log(id);
        if (!alt) return navigate("/login");
        setUser(alt);
      } else {
        const data = await getUser(id);
        if (!data) return navigate("/login");
        if (alt && alt.id === data.id) return navigate("/profile"); // FIX: redirect to own profile but dont works
        setUser(data);
      }
    })();
  }, []);

  return (
    <div className="flex h-full flex-col gap-4">
      {user ? (
        <>
          <div className="flex justify-between gap-4">
            <div className="flex justify-between gap-10">
              <div className="hidden md:block">
                {owner ? (
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
                      onClick={() => owner && onOpen()}
                    />
                  </Tooltip>
                ) : (
                  <Image
                    isBlurred
                    src={user.photo}
                    width={500}
                    height={300}
                    fallbackSrc="https://via.placeholder.com/500x300"
                  />
                )}
              </div>
              <UserInfo user={user} />
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
              <RecentsSection user={user} />
              <FavoriteSection user={user} />
            </div>
            {owner && <BillingHistory />}
          </div>
          <Picture isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl text-gray-500">Loading...</p>
        </div>
      )}
    </div>
  );
};
