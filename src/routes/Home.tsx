import { AuthorsSection } from "../components/AuthorsSection";
import { Banner } from "../components/Banner";
import { BooksSection } from "../components/BooksSection";

function Home() {
  return (
    <div>
      <Banner />
      <BooksSection />
      <AuthorsSection />
    </div>
  );
}

export default Home;
