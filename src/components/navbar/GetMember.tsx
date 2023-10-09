import { Button } from "@nextui-org/react";
import useLibraryStore from "../../store/store";

export const GetMember = () => {
  const user = useLibraryStore((state) => state.user);
  return !user.membership ? (
    <Button size="md" variant="shadow" color="secondary">
      ✨ You don't have a membership yet, <strong>get one now!</strong>
    </Button>
  ) : null;
};
