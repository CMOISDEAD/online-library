import { useEffect, useState } from "react";
import useLibraryStore from "../store/store";
import { BookList } from "./BooksList";
import { getAllBooks } from "../api/book";
import { Loader } from "./Loader";

export const BooksSection = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const books = useLibraryStore((state) => state.books);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getAllBooks();
        useLibraryStore.setState({ books: data });
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    })();
  }, []);

  // HACK: improve this fetch handling
  return (
    <div>
      <h1 className="text-3xl font-bold">Top Books of the moment</h1>
      {!error ? (
        !loading ? (
          books.length > 0 ? (
            <BookList books={books} />
          ) : (
            <p>No books found</p>
          )
        ) : (
          <Loader />
        )
      ) : (
        <p>Something went wrong</p>
      )}
    </div>
  );
};
