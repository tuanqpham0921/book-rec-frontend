export const SmartFilters = ({ smartFilters }) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Smart Filters</h3>
        <div className="space-y-3">
          {smartFilters.map((filter) => (
            <div key={filter} className="flex items-center gap-3">
              <div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-gray-700">{filter}</span>
            </div>
          ))}
        </div>

        {/* Why this book section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-gray-500 text-sm mb-4">Why this book?</h4>
          <button className="w-full bg-gray-800 text-white rounded-full py-3 px-4 flex items-center justify-center">
            <span className="mr-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
