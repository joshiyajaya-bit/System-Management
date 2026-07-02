// src/components/students/StudentTable.jsx

import React from 'react';

const StudentTable = ({ students }) => {
  if (students.length === 0) {
    return (
      <div className="table-container">
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <p className="empty-state-text">No students found matching your criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="student-table">
          <thead className="table-header">
            <tr>
              <th className="table-header-cell">ID</th>
              <th className="table-header-cell">Name</th>
              <th className="table-header-cell">Gender</th>
              <th className="table-header-cell">Department</th>
              <th className="table-header-cell">Year</th>
              <th className="table-header-cell">Email</th>
              <th className="table-header-cell">Phone</th>
              <th className="table-header-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr 
                key={student.id}
                className={`table-body-row ${
                  index % 2 === 0 ? 'table-body-row-even' : 'table-body-row-odd'
                }`}
              >
                <td className="table-cell table-cell-id">{student.id}</td>
                <td className="table-cell">{student.name}</td>
                <td className="table-cell">
                  <span className={`gender-badge ${
                    student.gender === 'Male' ? 'gender-male' : 'gender-female'
                  }`}>
                    {student.gender}
                  </span>
                </td>
                <td className="table-cell">{student.department}</td>
                <td className="table-cell">Year {student.year}</td>
                <td className="table-cell">{student.email}</td>
                <td className="table-cell">{student.phone}</td>
                <td className="table-cell">
                  <span className={`status-badge ${
                    student.feeStatus === 'Paid' ? 'status-paid' : 'status-pending'
                  }`}>
                    {student.feeStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;