import { useState } from "react";
import { Outline } from "react-pdf";
import { PiArrowsOut, PiSidebar } from "react-icons/pi";
import { Card, CardBody, CardHeader, ScrollShadow } from "@nextui-org/react";

export const Toc = ({ pdf, setPdf }: any) => {
  const [toggle, setToggle] = useState(true);

  const handleClick = ({ pageNumber }: { pageNumber: number }) => {
    setPdf({ ...pdf, currentPage: pageNumber });
  };

  const handleToggle = () => {
    setToggle(!toggle);
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
        <CardHeader className="justify-between">
          <h1 className="text-2xl font-bold">Content</h1>
          <div className="flex gap-2">
            <a
              className="rounded p-2 transition-colors hover:bg-focus/80"
              href="#reader"
            >
              <PiArrowsOut className="text-xl" />
            </a>
            <button
              className="rounded p-2 transition-colors hover:bg-focus/80"
              onClick={handleToggle}
            >
              <PiSidebar className="text-xl" />
            </button>
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
