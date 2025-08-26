import { ArrowRight } from 'lucide-react';

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
        className="absolute right-3 bottom-1 bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-700 transition-colors"
      >
        <ArrowRight size={96}/>
      </button>
    </div>
  );
};
