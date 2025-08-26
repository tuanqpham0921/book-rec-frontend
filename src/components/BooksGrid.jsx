import { BookCard } from './BookCard';

export const BooksGrid = ({ books }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
