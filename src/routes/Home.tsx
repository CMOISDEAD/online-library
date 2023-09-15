import { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { BookList } from "../components/BooksList";
import { getAllBooks } from "../api/book";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllBooks();
      setBooks(data);
    })();
  }, []);

  return (
    <div>
      <Banner />
      <h1 className="text-3xl font-bold">Top Books of the moment</h1>
      <BookList books={books} />
    </div>
  );
}

export default Home;
