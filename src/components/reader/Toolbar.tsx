import { useEffect, useState } from "react";
import { Pager } from "./Pager";
import { Zoom } from "./Zoom";
import { Help } from "./Help";
import { Button } from "@nextui-org/react";
import { RxHeart } from "react-icons/rx";
import { addFavorite } from "../../api/user";
import { useParams } from "react-router-dom";
import useLibraryStore from "../../store/store";
import { notify } from "../../utils/notify";
import { refresh } from "../../utils/refresh";

export const Toolbar = ({ pdf, setPdf }: any) => {
  const [move, setMove] = useState(false);
  const { id } = useParams();
  const user = useLibraryStore((state) => state.user);

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

  const handleFavorite = async () => {
    if (!user || !id) return;
    await addFavorite(user.id, id);
    await refresh();
    notify({
      content: "This book has been added to your favorites",
      type: "success",
    });
  };

  return (
    <>
      <div
        className={`${fade} absolute left-1 top-1 z-50 flex w-full content-start items-center justify-between gap-4 transition-opacity`}
      >
        <Button variant="ghost" onPress={handleFavorite}>
          <RxHeart />
        </Button>
      </div>
      <div
        className={`${fade} absolute bottom-1 z-50 flex w-full content-start items-center justify-between gap-4 transition-opacity`}
      >
        <Zoom pdf={pdf} setPdf={setPdf} />
        <Pager pdf={pdf} setPdf={setPdf} />
        <Help />
      </div>
    </>
  );
};
