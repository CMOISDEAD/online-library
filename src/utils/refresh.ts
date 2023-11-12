import { getAllAuthors } from "../api/author";
import { getAllBooks } from "../api/book";
import { getAllCategories } from "../api/category";
import { getUser } from "../api/user";
import useLibraryStore from "../store/store";

export const refresh = async () => {
  const { user } = useLibraryStore.getState();
  const res = await getUser(user.id);
  const books = await getAllBooks();
  const authors = await getAllAuthors();
  const categories = await getAllCategories();
  useLibraryStore.setState({
    user: res,
    books,
    authors,
    categories,
  });
  return {
    user: res,
    books,
    authors,
    categories,
  };
};
