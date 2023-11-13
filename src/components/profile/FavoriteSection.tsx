import useLibraryStore from "../../store/store";
import { BookCard } from "../BookCard";

export const FavoriteSection = () => {
  const user = useLibraryStore((state) => state.user);

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">Your Favorites Books</h1>
      {user.favorites ? (
        <div className="grid h-full w-full grid-flow-col grid-rows-1 gap-4 overflow-x-auto overflow-y-hidden p-5 md:grid-flow-row md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {user.favorites.map((book: any, i: number) => (
            <BookCard book={book} key={i} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">
          You have no favorites books yet :(
        </p>
      )}
    </div>
  );
};
