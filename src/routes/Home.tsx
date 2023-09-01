import { searchBooks } from "../api/books";
import { BookCard } from "../components/BookCard";

function Home() {
  const handleSearch = async () => {
    const response = await searchBooks("The Stand");
    console.log(response.docs[0]);
  };

  return (
    <div>
      <div className="relative flex h-32 w-full content-center items-center justify-center rounded bg-base-300">
        <img
          src="../src/assets/logo.png"
          alt="library-logo.png"
          className="absolute"
        />
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
      <div className="my-5 flex flex-wrap content-center gap-4">
        <BookCard book={"9255992"} />
        <BookCard book={"9356000"} />
        <BookCard book={"8255991"} />
        <BookCard book={"9255969"} />
      </div>
    </div>
  );
}

export default Home;
