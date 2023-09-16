import { useEffect } from "react";
import { Loader } from "./reader/Loader";
import useLibraryStore from "../store/store";
import { getAllAuthors } from "../api/author";

export const AuthorsSection = () => {
  const authors = useLibraryStore((state) => state.authors);

  useEffect(() => {
    (async () => {
      const data = await getAllAuthors();
      useLibraryStore.setState({ authors: data });
    })();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Authors Section</h1>
      {authors.length > 0 ? (
        <div className="content-ceter flex items-center gap-4">
          {authors.map((author) => (
            <div key={author.id}>
              <h1 className="text-xl font-bold capitalize">
                {author.firstName} {author.lastName}
              </h1>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
