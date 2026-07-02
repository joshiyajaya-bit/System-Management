// src/components/common/Dropdown.jsx

import React from 'react';

const Dropdown = ({ 
  label,           // Label text (e.g., "Department")
  options,         // Array of options to show
  value,           // Currently selected value
  onChange,        // Function to call when selection changes
  placeholder = "Select..."
}) => {
  return (
    <div className="filter-group">
      {/* Label */}
      <label className="filter-label">
        {label}
      </label>
      
      {/* Select Dropdown */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="filter-select"
      >
        <option value="">All {label}s</option>
        {options && options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
