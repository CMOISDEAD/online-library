import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Toc } from "./Toc";
import { Loader } from "./Loader";
import { Toolbar } from "./Toolbar";
import useLibraryStore from "../../store/store";
import { addRecent } from "../../api/user";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

export const Viewer = () => {
  const { id } = useParams();
  const [pdf, setPdf] = useState({
    currentPage: 1,
    pages: 0,
    zoom: 85,
    toc: [],
  });
  const user = useLibraryStore((state) => state.user);

  useEffect(() => {
    if (!user.membership) return;
    (async () => {
      if (!user.id || !id) return;
      await addRecent({ userId: user.id, bookId: id });
    })();
  }, []);

  const handleSuccess = async (document: any) => {
    const table = await document.getOutline();
    const toc = table[0].items.flat(Infinity); // im using this ?
    setPdf({ ...pdf, pages: document.numPages, currentPage: 1, toc });
  };

  return (
    <Document
      onLoadSuccess={handleSuccess}
      file={`http://localhost:3000/pdf/${id}`}
      className="flex h-screen w-full gap-4"
      loading={<Loader />}
    >
      <Toc pdf={pdf} setPdf={setPdf} />
      <div className="bg-base-200 relative flex flex-grow content-center items-center justify-center rounded-md">
        <Page
          scale={(pdf.zoom - 2.8) / 100}
          pageNumber={pdf.currentPage}
          className="h-fit max-h-full overflow-auto"
          renderAnnotationLayer={true}
        />
        <Toolbar pdf={pdf} setPdf={setPdf} />
      </div>
    </Document>
  );
};
