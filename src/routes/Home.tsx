import { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { BookList } from "../components/BooksList";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/book")
      .then(({ data }) => {
        setBooks(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
