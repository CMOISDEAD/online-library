import useLibraryStore from "../../store/store";
import { BookCard } from "../BookCard";

export const RecentsSection = () => {
  const user = useLibraryStore((state) => state.user);

  if (!user.recent || user.recent.length === 0) return null;
  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">Your recent books</h1>
      <div className="my-5 grid grid-flow-row grid-cols-2 place-content-start place-items-start gap-4  md:grid-cols-3 lg:grid-cols-4">
        {user.recent.map((book: any, i: number) => (
          <BookCard book={book} key={i} />
        ))}
      </div>
    </div>
  );
};
