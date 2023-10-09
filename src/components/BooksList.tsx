import { BookCard } from "../components/BookCard";

type Props = {
  books: any[];
};

export const BookList = ({ books }: Props) => {
  return (
    <div className="my-5 grid grid-flow-row grid-cols-2 place-content-start place-items-start gap-4  md:grid-cols-3 lg:grid-cols-5">
      {books.map((book, i) => (
        <BookCard book={book} key={i} />
      ))}
    </div>
  );
};
