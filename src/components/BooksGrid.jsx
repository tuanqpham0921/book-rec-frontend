import { BookCard } from './BookCard';

export const BooksGrid = ({ books }) => {
  // If no books, show empty state
  if (!books || books.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-gray-500 space-y-2">
          <h3 className="text-xl font-medium">No books to display</h3>
        </div>
      </div>
    );
  }

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
