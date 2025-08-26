import { BookCard } from './BookCard';

export const BooksGrid = ({ books }) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-screen">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
