import { BookCard } from "../BookCard";

export const FavoriteSection = ({ user }: any) => {
  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">{user.username}'s Books</h1>
      {user.favorites.length ? (
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
