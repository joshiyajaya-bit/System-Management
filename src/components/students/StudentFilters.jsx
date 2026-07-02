// src/components/students/StudentFilters.jsx

import React from 'react';

const StudentFilters = ({ filters, onFilterChange, filterOptions }) => {
  // Handle individual filter changes
  const handleFilterChange = (filterName, value) => {
    onFilterChange({
      ...filters,
      [filterName]: value
    });
  };

  // Clear all filters
  const handleClearFilters = () => {
    onFilterChange({
      department: '',
      year: '',
      status: '',
      gender: ''
    });
  };

  // Check if any filter is active
  const isFilterActive = Object.values(filters).some(val => val !== '');

  return (
    <div className="filters-container">
      <div className="filters-header">
        <div className="filters-title-wrapper">
          <span className="filters-icon">⚙️</span>
          <span className="filters-title">Filters</span>
          {isFilterActive && (
            <span className="filters-active-badge">Active</span>
          )}
        </div>
        {isFilterActive && (
          <button className="filters-clear-btn" onClick={handleClearFilters}>
            Clear All Filters
          </button>
        )}
      </div>

      <div className="filters-grid">
        {/* Department Filter */}
        <div className="filter-group">
          <label className="filter-label">Department</label>
          <select
            className="filter-select"
            value={filters.department || ''}
            onChange={(e) => handleFilterChange('department', e.target.value)}
          >
            <option value="">All Departments</option>
            {filterOptions.departments?.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <div className="filter-group">
          <label className="filter-label">Year</label>
          <select
            className="filter-select"
            value={filters.year || ''}
            onChange={(e) => handleFilterChange('year', e.target.value)}
          >
            <option value="">All Years</option>
            {filterOptions.years?.map((year) => (
              <option key={year} value={year}>Year {year}</option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="filter-group">
          <label className="filter-label">Status</label>
          <select
            className="filter-select"
            value={filters.status || ''}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="">All Status</option>
            {filterOptions.statuses?.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        {/* Gender Filter */}
        <div className="filter-group">
          <label className="filter-label">Gender</label>
          <select
            className="filter-select"
            value={filters.gender || ''}
            onChange={(e) => handleFilterChange('gender', e.target.value)}
          >
            <option value="">All Genders</option>
            {filterOptions.genders?.map((gender) => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default StudentFilters;
