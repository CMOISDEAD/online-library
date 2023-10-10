import {
  Button,
  Chip,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { notify } from "../../utils/notify";
import { updatePhoto } from "../../api/auth";
import useLibraryStore from "../../store/store";

export const Profile = ({ isOpen, onOpenChange }: any) => {
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
          Profile settings
        </ModalHeader>
        <ModalBody className="flex content-center items-center justify-center">
          <Image
            isBlurred
            src={user.photo}
            width={300}
            height={300}
            fallbackSrc="https://via.placeholder.com/300x300"
          />
          <h1 className="text-center font-bold">{user.username}</h1>
          <h1 className="text-center font-bold">
            Membership:{" "}
            <Chip
              color={user.membership ? "primary" : "danger"}
              variant="shadow"
            >
              {user.membership ? "Premium" : "Free"}
            </Chip>
          </h1>

          <form
            onSubmit={handleProfilePic}
            className="flex content-center items-center justify-evenly gap-4"
          >
            <input type="file" name="profile" id="profile" accept="image/*" />
            <Button color="success" type="submit">
              Update
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
