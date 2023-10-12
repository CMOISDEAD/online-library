import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { notify } from "../utils/notify";
import useLibraryStore from "../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { buyMembership } from "../api/auth";

export const Billing = () => {
  const user = useLibraryStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.membership) navigate("/");
  }, []);

  const handleBuy = async () => {
    try {
      await buyMembership(user.id);
      notify({
        content: "Membership updated successfully",
        type: "success",
      });
      navigate("/");
    } catch (error) {
      notify({
        content: "Something went wrong",
        type: "error",
      });
    }
  };

  return (
    <div className="flex h-[85vh] flex-col content-center justify-center gap-10">
      <h1 className="text-center text-7xl font-bold">
        Find a plan to power your reading
      </h1>
      <div className="cards flex content-center items-center justify-center gap-4">
        <Card className="h-[65vh] w-1/3 border border-divider p-5" isPressable>
          <CardHeader className="flex flex-col content-start items-start justify-start">
            <h1 className="text-2xl font-bold">Free</h1>
            <h2 className="text-4xl font-bold">$0</h2>
            <p>per month</p>
          </CardHeader>
          <CardBody>
            <ul className="list-disc">
              <li>Unlimited books</li>
              <li>Unlimited highlights</li>
              <li>Unlimited notes</li>
              <li>Unlimited bookmarks</li>
            </ul>
          </CardBody>
          <CardFooter>
            <Button
              color="secondary"
              variant="ghost"
              onPress={handleBuy}
              className="w-full"
            >
              Buy now
            </Button>
          </CardFooter>
        </Card>
        <Card className="h-[65vh] w-1/3 border border-divider p-5" isPressable>
          <CardHeader className="flex flex-col content-start items-start justify-start">
            <h1 className="text-2xl font-bold">Pro</h1>
            <h2 className="text-4xl font-bold">$9.99</h2>
            <p>per month</p>
          </CardHeader>
          <CardBody>
            <ul className="list-disc">
              <li>Unlimited books</li>
              <li>Unlimited highlights</li>
              <li>Unlimited notes</li>
              <li>Unlimited bookmarks</li>
              <li>Unlimited tags</li>
              <li>Unlimited collections</li>
            </ul>
          </CardBody>
          <CardFooter>
            <Button
              color="secondary"
              variant="ghost"
              onPress={handleBuy}
              className="w-full"
            >
              Buy now
            </Button>
          </CardFooter>
        </Card>
        <Card className="h-[65vh] w-1/3 border border-divider p-5" isPressable>
          <CardHeader className="flex flex-col content-start items-start justify-start">
            <h1 className="text-2xl font-bold">Enterprise</h1>
            <h2 className="text-4xl font-bold">Custom</h2>
            <p>for teams with some special needs</p>
          </CardHeader>
          <CardBody>
            <ul className="list-disc">
              <li>Unlimited books</li>
              <li>Unlimited highlights</li>
              <li>Unlimited notes</li>
              <li>Unlimited bookmarks</li>
              <li>Unlimited tags</li>
              <li>Unlimited collections</li>
            </ul>
          </CardBody>
          <CardFooter>
            <Button
              color="secondary"
              variant="ghost"
              onPress={handleBuy}
              className="w-full"
            >
              Contact us
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
