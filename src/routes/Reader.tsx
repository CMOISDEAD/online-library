import { useEffect } from "react";
import { Viewer } from "../components/reader/Viewer";
import { useDisclosure } from "@nextui-org/react";
import { MemberModal } from "../components/reader/MemberModal";
import useLibraryStore from "../store/store";
import { Reviews } from "../components/reader/Reviews";

export const Reader = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const user = useLibraryStore((state) => state.user);

  useEffect(() => {
    if (user.membership === "free" || !user.membership) onOpen();
  }, []);

  return (
    <div>
      <div
        className="relative flex w-full flex-grow flex-col content-center items-center gap-2"
        id="reader"
      >
        <Viewer />
        <MemberModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
        />
      </div>
      <Reviews />
    </div>
  );
};
