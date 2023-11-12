import useLibraryStore from "../../store/store";
import { BookList } from "../BooksList";

export const FavoriteSection = () => {
  const user = useLibraryStore((state) => state.user);

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">Your Favorites Books</h1>
      {user.favorites.length !== 0 ? (
        <BookList books={user.favorites || []} />
      ) : (
        <p className="text-center text-lg text-gray-500">
          You have no favorites books yet :(
        </p>
      )}
    </div>
  );
};
