import useLibraryStore from "../../store/store";
import { BookCard } from "../BookCard";

export const FavoriteSection = () => {
  const user = useLibraryStore((state) => state.user);

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">Your Favorites Books</h1>
      {user.favorites.length !== 0 ? (
        <div className="my-5 grid grid-flow-row grid-cols-2 place-content-start place-items-start gap-4  md:grid-cols-3 lg:grid-cols-4">
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
