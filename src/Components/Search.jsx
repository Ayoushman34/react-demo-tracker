import React, { useState } from 'react';
import "./css/SearchEvent.css"
import EventList from './EventList';
function SearchEvent({ onSearchLocation , onSearchId }) {
  const [searchType, setSearchType] = useState('id');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchType, searchValue);
  };

  return (
    <div className='search-container'>
      <h2>Search Event</h2>
      <form onSubmit={handleSearch}>
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="id">Event ID</option>
          <option value="location">Location</option>
        </select>
        <input
          type="text"
          placeholder={`Enter ${searchType === 'id' ? 'Event ID' : 'Location'}`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchEvent;
