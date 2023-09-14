import { Link } from "react-router-dom";

export const BookCard = ({ book }: any) => {
  return (
    <Link to={`/reader/${book.id}`}>
      <button className="card h-72 w-48 rounded-md border border-base-300 bg-base-100 shadow-md transition-all hover:scale-105 hover:border-neutral-700 hover:shadow-neutral-700">
        <figure>
          <img
            src={book.cover}
            alt={book.title}
            className="rounded-md object-cover"
          />
        </figure>
      </button>
    </Link>
  );
};
