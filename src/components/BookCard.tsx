export const BookCard = ({ book }: any) => {
  return (
    <button className="w-48 h-72 border shadow-xl transition-all hover:scale-105 card border-base-300 bg-base-100">
      <figure>
        <img src={book.cover} alt={book.title} className="object-cover" />
      </figure>
    </button>
  );
};
