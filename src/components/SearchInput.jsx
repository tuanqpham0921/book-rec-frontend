export const SearchInput = ({ searchInput, setSearchInput }) => {
  return (
    <input
      type="text"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      className="w-full text-lg border-none outline-none bg-gray-100 rounded-xl p-4 mb-4"
      placeholder="What kind of book are you looking for?"
    />
  );
};
