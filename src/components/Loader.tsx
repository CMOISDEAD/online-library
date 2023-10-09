import { CircularProgress } from "@nextui-org/react";

export const Loader = () => {
  return (
    <div className="flex max-h-full min-h-[30vh] w-full content-center items-center justify-center">
      <CircularProgress size="lg" />
    </div>
  );
};
