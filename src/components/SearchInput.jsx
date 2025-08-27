import { ArrowUp } from 'lucide-react';

export const SearchInput = ({ searchInput, setSearchInput, onSend }) => {
  return (
    <div className="relative">
      <textarea
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full h-30 text-lg border-none outline-none bg-gray-100 rounded-xl px-4 py-3 pr-16 resize-none"
        placeholder="What kind of book are you looking for?"
      />
      <button
        onClick={onSend}
        className="absolute right-2 bottom-3 bg-gray-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-700 transition-colors"
      >
        <ArrowUp size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6"/>
      </button>
    </div>
  );
};
