import { Loader } from "./reader/Loader";
import { authors } from "../utils/authors";
import { Card, CardFooter, Image } from "@nextui-org/react";

export const AuthorsSection = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Authors Section</h1>
      {authors.length > 0 ? (
        <div className="content-ceter my-5 flex items-center gap-4">
          {authors.map((author, i) => (
            <Card
              key={i}
              className="h-48 w-3/12 transition-all hover:scale-105 hover:cursor-pointer hover:border hover:border-focus hover:shadow hover:shadow-primary"
              shadow="lg"
            >
              <Image
                isBlurred
                loading="lazy"
                alt={author.name}
                className="z-0 h-full w-full object-cover"
                src={author.image}
              />
              <CardFooter className="absolute bottom-0 z-10 border-t border-divider bg-background/80">
                <h4 className="text-xl font-bold ">{author.name}</h4>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
