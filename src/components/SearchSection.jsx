import { SearchInput } from './SearchInput';
import { ResponseText } from './ResponseText';
import { ActiveFilters } from './ActiveFilters';

export const SearchSection = ({ searchInput, setSearchInput, activeFilters, responseText, onSend }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      
      {/* TODO: This will be in a Chat message section*/}
      <ResponseText responseText={responseText} />

      <ActiveFilters 
        activeFilters={activeFilters}
      />

      <SearchInput 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSend={onSend}
      />
    </div>
  );
};
