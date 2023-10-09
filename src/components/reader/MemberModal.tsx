import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const MemberModal = ({ isOpen, onOpenChange }: any) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Modal
      isOpen={isOpen}
      isDismissable={false}
      onOpenChange={onOpenChange}
      onClose={handleBack}
      backdrop="blur"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-warning">
          You are not a member, yet!
        </ModalHeader>
        <ModalBody>
          <p>
            You need to be a member to access to this content. Please, sign up
            for a membership.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={handleBack}>
            Go back
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
