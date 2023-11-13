import useLibraryStore from "../../store/store";
import { BookCard } from "../BookCard";

export const RecentsSection = () => {
  const user = useLibraryStore((state) => state.user);

  if (!user.recent || user.recent.length === 0) return null;
  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">Your recent books</h1>
      <div className="grid h-full w-full grid-flow-col grid-rows-1 gap-4 overflow-x-auto overflow-y-hidden p-5 md:grid-flow-row md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {user.recent.map((book: any, i: number) => (
          <BookCard book={book} key={i} />
        ))}
      </div>
    </div>
  );
};
