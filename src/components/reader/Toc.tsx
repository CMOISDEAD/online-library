import { useState } from "react";
import { Outline } from "react-pdf";
import { PiArrowsOut, PiSidebar } from "react-icons/pi";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  ScrollShadow,
} from "@nextui-org/react";
import { RxBackpack } from "react-icons/rx";
import { useParams } from "react-router-dom";
import useLibraryStore from "../../store/store";
import { addShopping } from "../../api/user";
import { notify } from "../../utils/notify";
import { refresh } from "../../utils/refresh";

export const Toc = ({ pdf, setPdf }: any) => {
  const [toggle, setToggle] = useState(true);
  const user = useLibraryStore((state) => state.user);
  const { id } = useParams();

  const handleClick = ({ pageNumber }: { pageNumber: number }) => {
    setPdf({ ...pdf, currentPage: pageNumber });
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleShop = async () => {
    if (!user || !id) return;
    await addShopping(user.id, id);
    await refresh();
    notify({
      content: "Book added to cart",
      type: "success",
    });
  };

  return (
    <>
      <button
        className={`absolute left-1 top-1 z-50 rounded p-2 transition-colors hover:bg-primary ${
          toggle ? "hidden" : "block"
        }`}
        onClick={handleToggle}
      >
        <PiSidebar className="text-xl" />
      </button>
      <Card
        radius="md"
        isBlurred
        className={`max-w-md overflow-y-auto overflow-x-hidden border border-divider ${
          toggle ? "block" : "hidden"
        }`}
        isPressable
      >
        <CardHeader className="sticky top-0 justify-between bg-background/80 backdrop-blur-3xl">
          <h1 className="text-2xl font-bold">Content</h1>
          <div className="flex content-center items-center gap-2">
            <Button
              variant="shadow"
              size="sm"
              color="primary"
              onPress={handleShop}
              isDisabled={user.carIDs.includes(id)}
            >
              <RxBackpack />
            </Button>
            <Button variant="ghost" size="sm">
              <a href="#reader">
                <PiArrowsOut className="text-xl" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleToggle}>
              <PiSidebar className="text-xl" />
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <ScrollShadow>
            <Outline onItemClick={handleClick} />
          </ScrollShadow>
        </CardBody>
      </Card>
    </>
  );
};
