import { BookList } from "../components/BooksList";
import { BooksSection } from "../components/BooksSection";
import useLibraryStore from "../store/store";

function Home() {
  const user = useLibraryStore((state) => state.user);

  return (
    <div>
      <BooksSection />
      <h1 className="text-3xl font-bold capitalize">
        {user.username}'s recent books
      </h1>
      <BookList books={user.recent || []} />
    </div>
  );
}

export default Home;
