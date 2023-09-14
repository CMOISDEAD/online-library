import { useState } from "react";
import { useParams } from "react-router-dom";
import { Document, Page, Outline } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { PiSidebar } from "react-icons/pi";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

export const Reader = () => {
  const [pdf, setPdf] = useState({
    currentPage: 1,
    pages: 0,
  });
  const { id } = useParams();

  const handleSuccess = (pdf: any) => {
    setPdf({ ...pdf, pages: pdf.numPages, currentPage: 1 });
  };

  const handleNext = () => {
    if (pdf.currentPage >= pdf.pages) return;
    setPdf({ ...pdf, currentPage: pdf.currentPage + 1 });
  };

  const handlePrev = () => {
    if (pdf.currentPage <= 1) return;
    setPdf({ ...pdf, currentPage: pdf.currentPage - 1 });
  };

  const handleToc = ({ pageNumber }: { pageNumber: number }) => {
    setPdf({ ...pdf, currentPage: pageNumber });
  };

  return (
    <div className="my-2 flex w-full flex-grow flex-col content-center items-center gap-2">
      <Document
        file={`http://localhost:3000/pdf/${id}`}
        onLoadSuccess={handleSuccess}
        className="flex h-[98vh] w-full gap-4 overflow-hidden"
      >
        <div className="relative hidden w-4/12 overflow-auto rounded-md bg-base-200 md:block">
          <div className="content-ceter sticky top-0 flex w-full items-center justify-between bg-base-300/80 p-2 backdrop-blur-sm">
            <h1 className="text-2xl font-bold">Content</h1>
            <button className="rounded p-2 transition-colors hover:bg-base-100">
              <PiSidebar className="text-xl" />
            </button>
          </div>
          <Outline onItemClick={handleToc} className="p-3" />
        </div>
        <div className="relative flex flex-grow content-center items-center justify-center rounded-md bg-base-200">
          <Page
            pageNumber={pdf.currentPage}
            scale={0.9}
            className="h-full w-fit"
          />
          <div className="absolute bottom-1 z-50 flex content-center items-center justify-center gap-4 rounded bg-base-200/80 p-2 backdrop-blur-sm">
            <button
              onClick={handlePrev}
              className="rounded-md bg-base-100 px-4 py-1 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              disabled={pdf.currentPage <= 1}
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="rounded-md bg-base-100 px-4 py-1  transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              disabled={pdf.currentPage >= pdf.pages}
            >
              Next
            </button>
          </div>
        </div>
      </Document>
    </div>
  );
};
