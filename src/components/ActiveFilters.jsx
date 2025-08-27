export const ActiveFilters = ({ filters }) => {
  // Format filters from API response
  const formatFilters = (filterData) => {
    if (!filterData) return [];
    
    return [
      filterData.genre,
      filterData.pages_min ? `${filterData.pages_min}+ pages` : null,
      filterData.published_year?.min ? `${filterData.published_year.min}+` : null,
      ...(filterData.keywords || [])
    ].filter(Boolean);
  };

  const displayFilters = formatFilters(filters);

  if (displayFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {displayFilters.map((filter) => (
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
