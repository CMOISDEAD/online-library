import { BookCard } from "../components/BookCard";

type Props = {
  books: any[];
};

export const BookList = ({ books }: Props) => {
  return (
    <div className="grid grid-cols-1 grid-flow-row gap-4 place-content-center place-items-center my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {books.map((book, i) => (
        <BookCard book={book} key={i} />
      ))}
    </div>
  );
};
