import { Button, Spinner } from "@nextui-org/react";
import { RxBackpack } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { addShopping } from "../../api/user";
import { refresh } from "../../utils/refresh";
import { useEffect, useState } from "react";
import { getBook } from "../../api/book";
import useLibraryStore from "../../store/store";
import { promiseNotify } from "../../utils/notify";

export const AddButton = () => {
  const [book, setBook] = useState<any>();
  const { user } = useLibraryStore((state) => state);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      if (!id) return;
      const data = await getBook(id);
      setBook(data);
    })();
  }, []);

  const handleShop = async () => {
    if (!user || !id) return;
    promiseNotify(addShopping(user.id, id), {
      loading: "Adding book to cart...",
      success: "Book added to cart",
      error: "Error adding book to cart",
    });
    await refresh();
  };

  return (
    <Button
      variant="shadow"
      size="sm"
      color="primary"
      onPress={handleShop}
      isDisabled={!book || !book.stock || user.carIDs.includes(id)}
    >
      {!book ? (
        <Spinner color="success" size="sm" />
      ) : book.stock !== 0 ? (
        <>
          <RxBackpack /> {book.stock}
        </>
      ) : (
        <span>Out of stock</span>
      )}
    </Button>
  );
};
