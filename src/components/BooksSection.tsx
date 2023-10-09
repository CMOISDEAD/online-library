import { useEffect, useState } from "react";
import useLibraryStore from "../store/store";
import { BookList } from "./BooksList";
import { getAllBooks } from "../api/book";
import { Loader } from "./Loader";

export const BooksSection = () => {
  const [error, setError] = useState(false);
  const books = useLibraryStore((state) => state.books);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllBooks();
        useLibraryStore.setState({ books: data });
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Top Books of the moment</h1>
      {!error ? (
        books.length > 0 ? (
          <BookList books={books} />
        ) : (
          <Loader />
        )
      ) : (
        <p>Something went wrong</p>
      )}
    </div>
  );
};
