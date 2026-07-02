// src/pages/StudentManagementPage.jsx

import React, { useState, useMemo } from 'react';
import StudentSearchBar from '../components/students/StudentSearchBar';
import StudentFilters from '../components/students/StudentFilters';
import StudentSortOptions from '../components/students/StudentSortOptions';
import StudentTable from '../components/students/StudentTable';
import { studentsData, getFilterOptions } from '../data/studentsData';

const StudentManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    year: '',
    status: '',
    gender: ''
  });
  const [sort, setSort] = useState({
    field: 'name',
    order: 'asc'
  });

  const filterOptions = useMemo(() => {
    return getFilterOptions(studentsData);
  }, []);

  const filteredAndSortedStudents = useMemo(() => {
    let result = [...studentsData];

    // Search
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(student => 
        student.name.toLowerCase().includes(term) ||
        student.id.toLowerCase().includes(term) ||
        student.email.toLowerCase().includes(term) ||
        student.phone.includes(term)
      );
    }

    // Filters
    if (filters.department) {
      result = result.filter(s => s.department === filters.department);
    }
    if (filters.year) {
      result = result.filter(s => s.year === parseInt(filters.year));
    }
    if (filters.status) {
      result = result.filter(s => s.feeStatus === filters.status);
    }
    if (filters.gender) {
      result = result.filter(s => s.gender === filters.gender);
    }

    // Sort
    if (sort.field) {
      result.sort((a, b) => {
        let aVal = a[sort.field];
        let bVal = b[sort.field];
        
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sort.order === 'asc' ? aVal - bVal : bVal - aVal;
        }
        
        if (typeof aVal === 'string' && typeof bVal === 'string') {
          return sort.order === 'asc' 
            ? aVal.localeCompare(bVal) 
            : bVal.localeCompare(aVal);
        }
        
        return 0;
      });
    }

    return result;
  }, [searchTerm, filters, sort]);

  return (
    <div className="student-management-container">
      <div className="page-header">
        <h1 className="page-title">Student Management</h1>
        <p className="page-subtitle">Manage and organize all student records</p>
      </div>

      <StudentSearchBar onSearch={setSearchTerm} />
      <StudentFilters 
        filters={filters}
        onFilterChange={setFilters}
        filterOptions={filterOptions}
      />
      <StudentSortOptions 
        sort={sort}
        onSortChange={setSort}
      />

      <div className="results-info">
        <span className="results-count">
          Showing {filteredAndSortedStudents.length} of {studentsData.length} students
        </span>
        {filteredAndSortedStudents.length === 0 && (
          <span className="no-results-message">
            No students found matching your criteria
          </span>
        )}
      </div>

      <StudentTable students={filteredAndSortedStudents} />
    </div>
  );
};

export default StudentManagementPage;
