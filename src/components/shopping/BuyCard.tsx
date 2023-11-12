import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import useLibraryStore from "../../store/store";
import { notify } from "../../utils/notify";

export const BuyCard = () => {
  const user = useLibraryStore((state) => state.user);

  const handleBuy = async () => {
    notify({
      content: "Book bought",
      type: "success",
    });
  };

  return (
    <Card className="sticky top-0 w-1/4">
      <CardHeader>
        <h2 className="text-2xl font-bold">Total</h2>
      </CardHeader>
      <CardBody>
        <p className="text-lg font-bold">Number of books: {user.car.length}</p>
        <p className="text-lg font-bold">
          Total price: $
          {user.car.reduce((acc: any, curr: any) => acc + curr.price, 0)}
        </p>
        <Button color="primary" size="sm" className="mt-4" onPress={handleBuy}>
          Buy
        </Button>
      </CardBody>
    </Card>
  );
};
