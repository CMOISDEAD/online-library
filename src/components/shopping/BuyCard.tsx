import {
  Card,
  CardBody,
  CardHeader,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import useLibraryStore from "../../store/store";
import { BuyModal } from "./BuyModal";

export const BuyCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const user = useLibraryStore((state) => state.user);

  return (
    <>
      <Card className="sticky top-0 w-1/4">
        <CardHeader>
          <h2 className="text-2xl font-bold">Total</h2>
        </CardHeader>
        <CardBody>
          <p className="text-lg font-bold">
            Number of books: {user.car.length}
          </p>
          <p className="text-lg font-bold">
            Total price: $
            {user.car.reduce((acc: any, curr: any) => acc + curr.price, 0)}
          </p>
          <Button color="primary" size="sm" className="mt-4" onPress={onOpen}>
            Buy
          </Button>
        </CardBody>
      </Card>
      <BuyModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
