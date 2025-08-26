import { SearchInput } from './SearchInput';
import { ResponseText } from './ResponseText';
import { ActiveFilters } from './ActiveFilters';

export const SearchSection = ({ searchInput, setSearchInput, activeFilters, removeFilter, responseText }) => {
  return (
    <div className="mb-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <SearchInput 
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        
        <ResponseText responseText={responseText} />

        <ActiveFilters 
          activeFilters={activeFilters}
          removeFilter={removeFilter}
        />
      </div>
    </div>
  );
};
