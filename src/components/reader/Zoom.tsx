import { PiMinus, PiPlus } from "react-icons/pi";
import { Card, Button } from "@nextui-org/react";

export const Zoom = ({ pdf, setPdf }: any) => {
  const { zoom } = pdf;
  const handleZoomIn = () => {
    if (zoom === 200) return;
    setPdf({ ...pdf, zoom: zoom + 5 });
    console.log(zoom);
  };

  const handleZoomReset = () => {
    setPdf({ ...pdf, zoom: 80 });
  };

  const handleZoomOut = () => {
    if (zoom === 50) return;
    setPdf({ ...pdf, zoom: zoom - 5 });
  };

  return (
    <Card
      isBlurred
      radius="md"
      className="flex flex-row content-center items-center justify-between gap-4 border border-divider text-xs lg:text-medium"
    >
      <Button onClick={handleZoomOut} variant="light" radius="md">
        <PiMinus />
      </Button>
      <span
        onClick={handleZoomReset}
        className="hidden cursor-pointer rounded px-2 py-1 hover:bg-content1 lg:block"
      >
        {pdf.zoom}%
      </span>
      <Button onClick={handleZoomIn} variant="light" radius="md">
        <PiPlus />
      </Button>
    </Card>
  );
};
