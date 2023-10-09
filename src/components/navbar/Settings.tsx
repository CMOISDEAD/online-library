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
import useLibraryStore from "../../store/store";

export const Setting = ({ isOpen, onOpenChange }: any) => {
  const user = useLibraryStore((state) => state.user);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(user.membership);
  }, []);

  const handleMembership = () => {
    useLibraryStore.setState({ user: { ...user, membership: isSelected } });
    notify({ content: "Membership updated successfully", type: "success" });
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Settings</ModalHeader>
            <ModalBody>
              <Switch isSelected={isSelected} onValueChange={setIsSelected}>
                Toggle Membership
              </Switch>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="success" onClick={handleMembership}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
