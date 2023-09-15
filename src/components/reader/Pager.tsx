import { Button } from "../Button";

interface PagerProps {
  pdf: any;
  setPdf: any;
}

export const Pager = ({ pdf, setPdf }: PagerProps) => {
  const handleNext = () => {
    if (pdf.currentPage >= pdf.pages) return;
    setPdf({ ...pdf, currentPage: pdf.currentPage + 1 });
  };

  const handlePrev = () => {
    if (pdf.currentPage <= 1) return;
    setPdf({ ...pdf, currentPage: pdf.currentPage - 1 });
  };

  return (
    <div className="mx-auto flex content-center items-center justify-center gap-4 rounded bg-base-200/80 p-2 backdrop-blur-sm">
      <Button onClick={handlePrev} disabled={pdf.currentPage <= 1}>
        Prev
      </Button>
      <span>
        {pdf.currentPage} / {pdf.pages}
      </span>
      <Button onClick={handleNext} disabled={pdf.currentPage >= pdf.pages}>
        Next
      </Button>
    </div>
  );
};
