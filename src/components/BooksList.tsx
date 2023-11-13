import { BookCard } from "../components/BookCard";

type Props = {
  books: any[];
};

export const BookList = ({ books }: Props) => {
  return (
    <div className="grid h-full w-full grid-flow-col grid-rows-1 gap-4 overflow-x-auto overflow-y-hidden p-5 md:grid-flow-row md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {books.map((book, i) => (
        <BookCard book={book} key={i} />
      ))}
    </div>
  );
};
