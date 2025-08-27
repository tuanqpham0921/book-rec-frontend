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

  const [currentBookSet, setCurrentBookSet] = useState(1);

  // Books set 1 - Empty for testing
  const books_1 = [];

  // Always show books_2 - Full mock data
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

  const books = currentBookSet === 1 ? books_1 : books_2;

  // Function to toggle between book sets
  const handleSend = () => {
    setCurrentBookSet(currentBookSet === 1 ? 2 : 1);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 h-screen-minus-padding">
        {/* Left Side - Search and Filters*/}
        {/* TODO: this will have to be in a Chatbot component*/}
        <div className="flex flex-col justify-end h-full transition-all duration-4000 ease-in-out w-full lg:w-half">
          <SearchSection 
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            activeFilters={activeFilters}
            responseText={mockContent}
            onSend={handleSend}
          />
        </div>

        {/* Right Side - Books Grid - Always show books_2 */}
        <div className="w-full lg:w-half h-full overflow-y-auto animate-fadeIn">
          <BooksGrid books={books} />
        </div>

      </div>
    </div>
  );
};