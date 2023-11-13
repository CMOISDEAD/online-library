import useLibraryStore from "../store/store";
import { BookCard } from "./BookCard";

export const RecentSection = () => {
  const user = useLibraryStore((state) => state.user);

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">Your recent books</h1>
      <div className="my-5 grid grid-flow-row grid-cols-2 place-content-start place-items-start gap-4  md:grid-cols-3 lg:grid-cols-5">
        {user.recent.map((book: any, i: number) => (
          <BookCard book={book} key={i} />
        ))}
      </div>
    </div>
  );
};
