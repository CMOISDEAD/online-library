import { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Switch,
} from "@nextui-org/react";
import { notify } from "../../utils/notify";
import { updateUser } from "../../api/user";
import useLibraryStore from "../../store/store";

export const Setting = ({ isOpen, onOpenChange }: any) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const user = useLibraryStore((state) => state.user);

  useEffect(() => {
    setIsSelected(user.membership);
    setIsAdmin(user.role === "admin");
  }, []);

  const handleSettings = async () => {
    try {
      const data = await updateUser({
        ...user,
        role: isAdmin ? "admin" : "user",
        membership: isSelected,
      });
      useLibraryStore.setState({ user: data });
      notify({ content: "Membership updated successfully", type: "success" });
    } catch (err) {
      notify({ content: "Something went wrong", type: "error" });
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Settings</ModalHeader>
            <ModalBody>
              <Switch
                isSelected={isSelected}
                onValueChange={setIsSelected}
                value={user.membership}
              >
                Toggle Membership
              </Switch>
              <Switch
                isSelected={isAdmin}
                onValueChange={setIsAdmin}
                value={user.role === "admin" ? "true" : "false"}
              >
                Toggle Admin
              </Switch>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="success" onClick={handleSettings}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
