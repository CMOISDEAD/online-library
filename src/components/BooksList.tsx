import { BookCard } from "../components/BookCard";
import { Loader } from "./reader/Loader";

type Props = {
  books: any[];
};

export const BookList = ({ books }: Props) => {
  return (
    <div className="my-5 grid grid-flow-row grid-cols-1 place-content-start place-items-start gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {books.length > 0 ? (
        books.map((book, i) => <BookCard book={book} key={i} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};
