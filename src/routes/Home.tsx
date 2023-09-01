import { Banner } from "../components/Banner";
import { BookList } from "../components/BooksList";
import { books } from "../utils/books";

function Home() {
  return (
    <div>
      <Banner />
      <h1 className="text-3xl font-bold">Top Books</h1>
      <BookList books={books} />
    </div>
  );
}

export default Home;
