// src/components/students/StudentSortOptions.jsx

import React from 'react';

const StudentSortOptions = ({ sort, onSortChange }) => {
  const handleSortToggle = (field) => {
    if (sort.field === field) {
      onSortChange({
        field: field,
        order: sort.order === 'asc' ? 'desc' : 'asc'
      });
    } else {
      onSortChange({
        field: field,
        order: 'asc'
      });
    }
  };

  const sortOptions = [
    { field: 'name', label: 'Name' },
    { field: 'id', label: 'Student ID' },
    { field: 'year', label: 'Year' },
    { field: 'department', label: 'Department' }
  ];

  const getSortArrow = (field) => {
    if (sort.field !== field) return '↕️';
    return sort.order === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="sort-container">
      <div className="sort-header">
        <span className="sort-icon">📊</span>
        <span className="sort-title">Sort By</span>
        {sort.field && (
          <span className="sort-active-badge">
            {sort.field} ({sort.order === 'asc' ? 'A-Z' : 'Z-A'})
          </span>
        )}
      </div>

      <div className="sort-buttons">
        {sortOptions.map((option) => (
          <button
            key={option.field}
            className={`sort-btn ${sort.field === option.field ? 'sort-btn-active' : ''}`}
            onClick={() => handleSortToggle(option.field)}
          >
            {option.label} {getSortArrow(option.field)}
          </button>
        ))}
      </div>

      {sort.field && (
        <div className="sort-info">
          Currently sorting by: <span className="sort-info-highlight">
            {sort.field} {sort.order === 'asc' ? '↑ (Ascending)' : '↓ (Descending)'}
          </span>
        </div>
      )}
    </div>
  );
};

export default StudentSortOptions;
