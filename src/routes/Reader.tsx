import { useState } from "react";
import { useParams } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Pager } from "../components/reader/Pager";
import { Toc } from "../components/reader/Toc";
import { Loader } from "../components/reader/Loader";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

export const Reader = () => {
  const { id } = useParams();
  const [pdf, setPdf] = useState({
    currentPage: 1,
    pages: 0,
  });

  const handleSuccess = (pdf: any) => {
    setPdf({ ...pdf, pages: pdf.numPages, currentPage: 1 });
  };

  return (
    <div className="relative my-2 flex w-full flex-grow flex-col content-center items-center gap-2">
      <Document
        onLoadSuccess={handleSuccess}
        file={`http://localhost:3000/pdf/${id}`}
        className="flex h-[98vh] w-full gap-4 overflow-hidden"
        loading={<Loader />}
      >
        <Toc pdf={pdf} setPdf={setPdf} />
        <div className="relative flex flex-grow content-center items-center justify-center rounded-md bg-base-200">
          <Page
            scale={0.9}
            pageNumber={pdf.currentPage}
            className="h-full w-fit"
          />
          <Pager pdf={pdf} setPdf={setPdf} />
        </div>
      </Document>
    </div>
  );
};
