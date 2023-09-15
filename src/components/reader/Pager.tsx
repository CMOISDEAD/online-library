import { useEffect, useState } from "react";

interface PagerProps {
  pdf: any;
  setPdf: any;
}

export const Pager = ({ pdf, setPdf }: PagerProps) => {
  const [move, setMove] = useState(false);

  useEffect(() => {
    let timer = 0;
    const handleMove = () => {
      setMove(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setMove(false);
      }, 1000);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const fade = move ? "opacity-100" : "opacity-0";

  const handleNext = () => {
    if (pdf.currentPage >= pdf.pages) return;
    setPdf({ ...pdf, currentPage: pdf.currentPage + 1 });
  };

  const handlePrev = () => {
    if (pdf.currentPage <= 1) return;
    setPdf({ ...pdf, currentPage: pdf.currentPage - 1 });
  };

  return (
    <div
      className={`absolute bottom-1 z-50 flex content-center items-center justify-center gap-4 rounded bg-base-200/80 p-2 backdrop-blur-sm ${fade} transition-opacity`}
    >
      <button
        onClick={handlePrev}
        className="rounded-md bg-base-100 px-4 py-1 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        disabled={pdf.currentPage <= 1}
      >
        Prev
      </button>
      <span>
        {pdf.currentPage} / {pdf.pages}
      </span>
      <button
        onClick={handleNext}
        className="rounded-md bg-base-100 px-4 py-1  transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        disabled={pdf.currentPage >= pdf.pages}
      >
        Next
      </button>
    </div>
  );
};
