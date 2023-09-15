import { PiMinus, PiPlus } from "react-icons/pi";
import { Button } from "../Button";

export const Zoom = ({ pdf, setPdf }: any) => {
  const { zoom } = pdf;
  const handleZoomIn = () => {
    if (zoom === 200) return;
    setPdf({ ...pdf, zoom: zoom + 5 });
  };

  const handleZoomReset = () => {
    setPdf({ ...pdf, zoom: 80 });
  };

  const handleZoomOut = () => {
    if (zoom === 50) return;
    setPdf({ ...pdf, zoom: zoom - 5 });
  };

  return (
    <div className="flex content-center items-center justify-center gap-4 rounded bg-base-200/80 p-2 backdrop-blur-sm">
      <Button onClick={handleZoomOut}>
        <PiMinus />
      </Button>
      <span
        onClick={handleZoomReset}
        className="hidden cursor-pointer rounded px-2 py-1 hover:bg-base-100 lg:block"
      >
        {pdf.zoom}%
      </span>
      <Button onClick={handleZoomIn}>
        <PiPlus />
      </Button>
    </div>
  );
};
