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

        {/* TODO: This will be in a Chat message section*/}
        <ResponseText responseText={responseText} />

        <ActiveFilters 
          activeFilters={activeFilters}
          removeFilter={removeFilter}
        />
      </div>
    </div>
  );
};
