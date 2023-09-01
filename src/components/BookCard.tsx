import { searchCover } from "../api/covers";

export const BookCard = ({ book }: any) => {
  return (
    <button className="border shadow-xl transition-all hover:scale-105 card h-[16.8rem] border-base-300 bg-base-100">
      <figure>
        <img
          src={searchCover(book, "M")}
          alt="book cover"
          className="object-cover"
        />
      </figure>
    </button>
  );
};
