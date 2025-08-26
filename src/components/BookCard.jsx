export const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex gap-4">
        <img
          src={book.cover}
          alt={book.title}
          className="w-24 h-36 object-cover rounded-lg bg-gray-600"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200x300/4a4a4a/ffffff?text=' + encodeURIComponent(book.title);
          }}
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 mb-1">
            {book.title}
          </h3>
          <p className="text-gray-600 mb-2">{book.author}</p>
          <p className="text-gray-500 text-sm mb-2">
            {book.genre} • {book.published} • {book.pages} pages
          </p>
          {book.rating && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500">★</span>
              <span className="text-gray-600 text-sm">{book.rating}/5</span>
            </div>
          )}
          
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
            <span className="text-lg">👍</span>
            <span className="text-sm">Why this book?</span>
          </button>
        </div>
      </div>
    </div>
  );
};
