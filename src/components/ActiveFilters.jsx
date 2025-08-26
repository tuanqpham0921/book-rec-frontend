export const ActiveFilters = ({ activeFilters, removeFilter }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {activeFilters.map((filter) => (
        <span
          key={filter}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
        >
          {filter}
          <button
            onClick={() => removeFilter(filter)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </span>
      ))}
    </div>
  );
};
