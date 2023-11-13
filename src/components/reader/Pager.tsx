import { Button, Card } from "@nextui-org/react";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

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
    <Card
      radius="md"
      className="flex flex-row content-center items-center justify-between gap-4 border border-divider bg-background/80 text-xs backdrop-blur-sm lg:text-medium"
    >
      <Button
        onClick={handlePrev}
        isDisabled={pdf.currentPage <= 1}
        variant="light"
        radius="md"
      >
        <PiArrowLeft />
      </Button>
      <span className="hidden font-bold md:block">
        {pdf.currentPage} / {pdf.pages}
      </span>
      <Button
        onClick={handleNext}
        isDisabled={pdf.currentPage >= pdf.pages}
        variant="light"
        radius="md"
      >
        <PiArrowRight />
      </Button>
    </Card>
  );
};
