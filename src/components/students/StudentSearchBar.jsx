// src/components/students/StudentSearchBar.jsx

import React, { useState } from 'react';

const StudentSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="🔍 Search by Name, ID, Email, or Phone..."
            className="search-input"
          />
          {searchTerm && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={handleClear}
            >
              ✕
            </button>
          )}
        </div>
        <button type="submit" className="search-submit-btn">
          🔍 Search
        </button>
      </form>
    </div>
  );
};

export default StudentSearchBar;

