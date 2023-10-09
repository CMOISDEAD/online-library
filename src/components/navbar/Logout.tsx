import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import useLibraryStore from "../../store/store";
import { notify } from "../../utils/notify";

export const LogoutModal = ({ isOpen, onOpenChange }: any) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    useLibraryStore.setState({ user: null });
    notify({
      content: "You have been logged out successfully",
      type: "success",
    });
    navigate("/login");
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Are you sure you want to log out?
            </ModalHeader>
            <ModalBody>
              <p>
                If you log out now, you will have to provide your credentials
                again to access your account.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="danger" onClick={handleLogout}>
                Log out
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
