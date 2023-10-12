import { Button } from "@nextui-org/react";
import useLibraryStore from "../../store/store";
import { useNavigate } from "react-router-dom";

export const GetMember = () => {
  const user = useLibraryStore((state) => state.user);
  const navigation = useNavigate();

  const handlePress = () => navigation("/billing");

  return !user.membership ? (
    <Button size="md" variant="shadow" color="secondary" onPress={handlePress}>
      ✨ You don't have a membership yet, <strong>get one now!</strong>
    </Button>
  ) : null;
};
