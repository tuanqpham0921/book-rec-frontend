import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export const VersionDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState('V3.0.0');
  const dropdownRef = useRef(null);

  const versions = [
    { id: 'v1', name: 'V1.0.0', description: 'Pre-defined filters and limited' },
    { id: 'v2', name: 'V2.1.0', description: 'Smart filters to parse query' },
    { id: 'v3', name: 'V3.0.0', description: 'Conversational recommender' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleVersionSelect = (version) => {
    setSelectedVersion(version.name);
    setIsOpen(false);
    console.log('Selected version:', version.name);
  };

  return (
    <div className="relative inline-block " ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center pl-4 text-lg font-semibold text-gray-800 hover:text-gray-700 hover:bg-gray-100 rounded-lg px-4 py-2 transition-all duration-200"
      >
        Book Recommender {selectedVersion}
        <ChevronDown className={`ml-025 text-gray-500`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 py-2">
          {versions.map((version) => (
            <button
              key={version.id}
              onClick={() => handleVersionSelect(version)}
              className={`block w-full px-4 py-3 text-left text-base font-medium transition-all duration-150 hover:bg-gray-100 rounded-2xl hover:text-gray-900 ${
                version.name === selectedVersion ? 'text-gray-800 bg-gray-50' : 'text-gray-700'}
                `}
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col text-left">
                  <span className="text-left">{version.name}</span>
                  <span className="text-xs text-gray-500 font-normal text-left">{version.description}</span>
                </div>
                {version.name === selectedVersion && (
                  <span className="text-gray-600 ml-025">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};