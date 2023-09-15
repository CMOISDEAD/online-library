import { PiQuestion } from "react-icons/pi";
import { Button } from "../Button";

export const Help = () => {
  return (
    <div className="flex content-center items-center justify-center gap-4 rounded bg-base-200/80 p-2 backdrop-blur-sm">
      <Button>
        <PiQuestion />
      </Button>
    </div>
  );
};
