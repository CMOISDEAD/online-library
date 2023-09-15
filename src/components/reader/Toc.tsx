import { Outline } from "react-pdf";
import { PiSidebar } from "react-icons/pi";

export const Toc = ({ pdf, setPdf }: any) => {
  const handleToc = ({ pageNumber }: { pageNumber: number }) => {
    setPdf({ ...pdf, currentPage: pageNumber });
  };

  return (
    <div className="relative hidden w-4/12 overflow-auto rounded-md bg-base-200 md:block">
      <div className="content-ceter sticky top-0 flex w-full items-center justify-between bg-base-300/80 p-2 backdrop-blur-sm">
        <h1 className="text-2xl font-bold">Content</h1>
        <button className="rounded p-2 transition-colors hover:bg-base-100">
          <PiSidebar className="text-xl" />
        </button>
      </div>
      <Outline onItemClick={handleToc} className="p-3" />
    </div>
  );
};
