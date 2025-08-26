import { useState } from 'react';
import { SearchSection } from '../components/SearchSection';
import { SmartFilters } from '../components/SmartFilters';
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

  // Convert mock recommendations to the format expected by our components
  const books = mockRecommendations.map(book => ({
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

  const smartFilters = ['classic', 'literature', 'fiction', 'fantasy', 'romance'];

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <SearchSection 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        activeFilters={activeFilters}
        removeFilter={removeFilter}
        responseText={mockContent}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <SmartFilters smartFilters={smartFilters} />
        <BooksGrid books={books} />
      </div>
    </div>
  );
};