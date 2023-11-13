import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const BookCard = ({ book }: any) => {
  return (
    <Link to={`/reader/${book.id}`}>
      <button
        className="h-72 w-48 rounded-md border border-divider shadow-md transition-all hover:scale-105 hover:border-focus hover:shadow-primary"
        aria-labelledby="book-title"
      >
        <Image
          isBlurred
          radius="md"
          loading="lazy"
          src={book.cover}
          alt={book.title}
          className="h-72 w-48 object-cover"
        />
      </button>
    </Link>
  );
};
