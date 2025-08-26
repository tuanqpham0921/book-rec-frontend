import { useState } from 'react';
import { SearchSection } from '../components/SearchSection';
import { BooksGrid } from '../components/BooksGrid';
import { mockRecommendations, mockFilters, mockContent } from '../data/mockData';

export const BookRecommender = () => {
  const [searchInput, setSearchInput] = useState('classic literature books with compelling characters and timeless themes');
  const [activeFilters, setActiveFilters] = useState([
    mockFilters.genre,
    `${mockFilters.pages_min}+ pages`,
    `${mockFilters.published_year.min}+`,
    ...mockFilters.keywords
  ].filter(Boolean));

  // State to track which book set to show
  const [currentBookSet, setCurrentBookSet] = useState(1);
  const [showBooks, setShowBooks] = useState(false);

  // Books set 1 - Empty for testing
  const books_1 = []; 
  
  // Books set 2 - Full mock data
  const books_2 = mockRecommendations.map(book => ({
    id: book.isbn13,
    title: book.title,
    author: book.authors,
    genre: book.simple_categories,
    pages: book.num_pages,
    cover: book.large_thumbnail || book.thumbnail,
    description: book.description,
    rating: book.average_rating,
    published: book.published_year,
    categories: book.categories
  }));

  // Current books based on state
  const books = currentBookSet === 1 ? books_1 : books_2;

  // Function to toggle between book sets with staggered animation
  const handleSend = () => {
    if (currentBookSet === 1) {
      // Going from empty to books: show books immediately
      setCurrentBookSet(2);
      setTimeout(() => setShowBooks(true), 100);
    } else {
      // Going from books to empty: hide books first, then change layout
      setShowBooks(false);
      setTimeout(() => setCurrentBookSet(1), 300);
    }
  };

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className={`grid gap-8 h-screen-minus-padding transition-all duration-4000 ease-in-out ${books.length > 0 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
        {/* Left Side - Search and Filters*/}
        {/* TODO: this will have to be in a Chatbot component*/}
        <div className="flex flex-col justify-end h-full">
          <SearchSection 
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            activeFilters={activeFilters}
            removeFilter={removeFilter}
            responseText={mockContent}
            onSend={handleSend}
          />
        </div>

        {/* Right Side - Books Grid - Only show if there are books */}
        {books.length > 0 && showBooks && (
          <div className="h-full overflow-y-auto animate-fadeIn">
            <BooksGrid books={books} />
          </div>
        )}

      </div>
    </div>
  );
};