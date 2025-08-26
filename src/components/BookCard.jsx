export const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col h-full">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-36 object-cover rounded-lg bg-gray-600"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/200x300/4a4a4a/ffffff?text=' + encodeURIComponent(book.title);
        }}
      />

      <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">
          {book.title}
        </h3>
      
      <div className="mt-auto">
        <p className="text-gray-600 text-sm md:text-md">
          {book.author}
        </p>
        <p className="text-gray-600 text-xs md:text-sm">
          {book.genre} • {book.published} • {book.pages} pages
        </p>
      </div>
    </div>
  );
};