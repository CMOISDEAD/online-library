import useLibraryStore from "../store/store";
import { BookList } from "./BooksList";

export const RecentsSection = () => {
  const user = useLibraryStore((state) => state.user);

  if (!user.recent || user.recent.length === 0) return null;
  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">Your recent books</h1>
      <BookList books={user.recent || []} />
    </div>
  );
};
