import { useState } from 'react';
import { SearchInput } from './SearchInput';
import { ResponseText } from './ResponseText';
import { ActiveFilters } from './ActiveFilters';
import api from '@/api';

export const Chatbot = ({ onSend }) => {
  const [searchInput, setSearchInput] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [filters, setFilters] = useState(null);
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    if (searchInput.trim()) {
      setSubmittedQuery(searchInput);
      
      try {
        // Make API call to reason the query
        const response = await api.reasonQuery(searchInput);
        console.log('API Response:', response);
        
        // Update filters based on API response
        if (response.filters) {
          setFilters(response.filters);
        }
        
        // Update message based on API response
        if (response.content || response.message || response.explanation) {
          setMessage(response.content || response.message || response.explanation);
        }
        
        if (onSend) {
          onSend(response);
        }
      } catch (error) {
        console.error('API call failed:', error);
        // Fall back to mock data on error
        if (onSend) {
          onSend();
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      
      <ResponseText responseText={message} />

      <ActiveFilters 
        filters={filters}
      />

      <SearchInput 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSend={handleSend}
      />
    </div>
  );
};
