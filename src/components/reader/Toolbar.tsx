import { useEffect, useState } from "react";
import { Pager } from "./Pager";
import { Zoom } from "./Zoom";
import { Help } from "./Help";

export const Toolbar = ({ pdf, setPdf }: any) => {
  const [move, setMove] = useState(false);

  useEffect(() => {
    let timer: number | any = 0;
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

  return (
    <div
      className={`${fade} absolute bottom-1 z-50 flex w-full content-start items-center justify-between gap-4 transition-opacity`}
    >
      <Zoom pdf={pdf} setPdf={setPdf} />
      <Pager pdf={pdf} setPdf={setPdf} />
      <Help />
    </div>
  );
};
