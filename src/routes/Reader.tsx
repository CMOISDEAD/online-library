import { Viewer } from "../components/reader/Viewer";

export const Reader = () => {
  return (
    <div className="relative flex w-full flex-grow flex-col content-center items-center gap-2">
      <Viewer />
    </div>
  );
};
