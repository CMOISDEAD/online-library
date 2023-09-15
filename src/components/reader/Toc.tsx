import { useState } from "react";
import { Outline } from "react-pdf";
import { PiSidebar } from "react-icons/pi";

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
        className={`absolute left-1 top-1 z-50 rounded p-2 transition-colors hover:bg-base-100 ${
          toggle ? "hidden" : "block"
        }`}
        onClick={handleToggle}
      >
        <PiSidebar className="text-xl" />
      </button>
      <div
        className={`relative hidden w-4/12 overflow-auto rounded-md bg-base-200 transition-opacity md:block ${
          toggle ? "md:block" : "md:hidden"
        }`}
      >
        <div className="content-ceter sticky top-0 flex w-full items-center justify-between bg-base-300/80 p-2 backdrop-blur-sm">
          <h1 className="text-2xl font-bold">Content</h1>
          <button
            className="rounded p-2 transition-colors hover:bg-base-100"
            onClick={handleToggle}
          >
            <PiSidebar className="text-xl" />
          </button>
        </div>
        <Outline onItemClick={handleClick} className="p-3" />
      </div>
    </>
  );
};