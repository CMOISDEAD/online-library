import useLibraryStore from "../store/store";
import { Link } from "react-router-dom";
import { Chip } from "@nextui-org/react";
import { removeShopping } from "../api/user";
import { refresh } from "../utils/refresh";
import { notify } from "../utils/notify";
import { ShopList } from "../components/shopping/ShopList";
import { BuyCard } from "../components/shopping/BuyCard";

export const Shopping = () => {
  const user = useLibraryStore((state) => state.user);

  const handleRemove = async (id: string) => {
    await removeShopping(user.id, id);
    await refresh();
    notify({
      content: "Book removed",
      type: "success",
    });
  };

  return (
    <div>
      <div className="flex content-center items-center gap-4">
        <h1 className="text-3xl font-bold">Shopping Car</h1>
        <Chip color="primary">
          {user.car.length} {user.car.length === 1 ? "book" : "books"}
        </Chip>
      </div>
      {user.car.length ? (
        <div className="mt-8 flex items-start justify-between gap-4">
          <div className="flex w-3/4 flex-col gap-4">
            <ShopList handleRemove={handleRemove} />
          </div>
          <BuyCard />
        </div>
      ) : (
        <p className="text-lg text-gray-500">
          Your shopping cart is empty. Go to the{" "}
          <Link to="/" className="text-primary hover:underline">
            home page
          </Link>{" "}
          to add books to your cart.
        </p>
      )}
    </div>
  );
};
