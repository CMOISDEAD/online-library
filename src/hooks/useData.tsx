import { useEffect } from "react";
import { getAllBooks } from "../api/book";
import { getAllAuthors } from "../api/author";
import { getAllCategories } from "../api/category";
import useLibraryStore from "../store/store";

export const useData = () => {
  useEffect(() => {
    (async () => {
      const books = await getAllBooks();
      const authors = await getAllAuthors();
      const categories = await getAllCategories();
      useLibraryStore.setState({ books, authors, categories });
    })();
  }, []);

  return {};
};
