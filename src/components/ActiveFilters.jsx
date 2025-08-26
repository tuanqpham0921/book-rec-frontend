export const ActiveFilters = ({ activeFilters }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {activeFilters.map((filter) => (
        <span
          key={filter}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
        >
          {filter}
        </span>
      ))}
    </div>
  );
};
