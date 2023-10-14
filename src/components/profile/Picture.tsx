import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { notify } from "../../utils/notify";
import useLibraryStore from "../../store/store";
import { updatePhoto } from "../../api/user";

export const Picture = ({ isOpen, onOpenChange }: any) => {
  const user = useLibraryStore((state) => state.user);

  const handleProfilePic = async (e: any) => {
    e.preventDefault();
    const photo = e.target.profile.files[0];
    if (!photo)
      return notify({
        content: "Please select a photo",
        type: "error",
      });
    await updatePhoto({ id: user.id, photo });
    notify({
      content: "Profile picture updated",
      type: "success",
    });
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Select profile image
        </ModalHeader>
        <ModalBody className="flex content-center items-center justify-center">
          <form
            onSubmit={handleProfilePic}
            className="flex content-center items-center justify-evenly gap-4"
          >
            <input
              id="profile"
              name="profile"
              type="file"
              accept="image/*"
              required
              className="block w-full cursor-pointer rounded-lg border border-divider bg-background text-sm text-gray-400 placeholder-gray-400 transition-all hover:bg-neutral-800 focus:outline-none"
            />
            <Button color="success" type="submit">
              Update
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
