import { useState } from "react";
import { useParams } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Toc } from "../components/reader/Toc";
import { Loader } from "../components/reader/Loader";
import { Toolbar } from "../components/reader/Toolbar";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

export const Reader = () => {
  const { id } = useParams();
  const [pdf, setPdf] = useState({
    currentPage: 1,
    pages: 0,
    zoom: 80,
  });

  const handleSuccess = (document: any) => {
    setPdf({ ...pdf, pages: document.numPages, currentPage: 1 });
  };

  return (
    <div className="relative flex w-full flex-grow flex-col content-center items-center gap-2">
      <Document
        onLoadSuccess={handleSuccess}
        file={`http://localhost:3000/pdf/${id}`}
        className="flex h-screen w-full gap-4"
        loading={<Loader />}
      >
        <Toc pdf={pdf} setPdf={setPdf} />
        <div className="relative flex flex-grow content-center items-center justify-center rounded-md bg-base-200">
          <Page
            scale={pdf.zoom / 100}
            pageNumber={pdf.currentPage}
            className="h-full overflow-auto"
            renderAnnotationLayer={false}
          />
          <Toolbar pdf={pdf} setPdf={setPdf} />
        </div>
      </Document>
    </div>
  );
};
