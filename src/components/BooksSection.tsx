import { useEffect } from "react";
import useLibraryStore from "../store/store";
import { BookList } from "./BooksList";
import { Loader } from "./reader/Loader";
import { getAllBooks } from "../api/book";

export const BooksSection = () => {
  const books = useLibraryStore((state) => state.books);

  useEffect(() => {
    (async () => {
      const data = await getAllBooks();
      useLibraryStore.setState({ books: data });
    })();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Top Books of the moment</h1>
      {books.length > 0 ? <BookList books={books} /> : <Loader />}
    </div>
  );
};
