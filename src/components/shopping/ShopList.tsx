import { Card, CardBody, Divider, Image, Button } from "@nextui-org/react";
import useLibraryStore from "../../store/store";
import { Link } from "react-router-dom";

export const ShopList = ({ handleRemove }: { handleRemove: Function }) => {
  const user = useLibraryStore((state) => state.user);
  return (
    <>
      {user.car.map((book: any, i: number) => (
        <>
          <Card key={i} className="w-full" isHoverable isPressable>
            <CardBody>
              <div className="flex justify-between gap-4">
                <div className="w-1/4">
                  <Image
                    isBlurred
                    shadow="md"
                    src={book.cover}
                    alt={`${book.title} cover book`}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="flex w-full flex-col justify-between gap-4">
                  <div className="info">
                    <Link to={`/reader/${book.id}`}>
                      <h2 className="text-2xl font-bold">{book.title}</h2>
                    </Link>
                    <p className="text-sm italic">{`${book.author.firstName} ${book.author.lastName}`}</p>
                    <p className="text-lg">{book.description}</p>
                    <p className="text-lg">Format: {book.format}</p>
                    <p className="text-lg">
                      Number of Pages: {book.numberPages}
                    </p>
                    <p className="text-lg font-bold">Price: ${book.price}</p>
                  </div>
                  <Button
                    size="sm"
                    color="danger"
                    onPress={() => handleRemove(book.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
          <Divider />
        </>
      ))}
    </>
  );
};
