import React from "react";

const StudentFilters = ({
  searchTerm,
  setSearchTerm,
  department,
  setDepartment,
  year,
  setYear,
  status,
  setStatus,
}) => {
  const handleReset = () => {
    setSearchTerm("");
    setDepartment("");
    setYear("");
    setStatus("");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">

        {/* Search */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search Student
          </label>

          <input
            type="text"
            placeholder="Search by Name, Email or Phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Department */}
        <div className="w-full lg:w-52">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Department
          </label>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">All Departments</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
          </select>
        </div>

        {/* Year */}
        <div className="w-full lg:w-40">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">All Years</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>

        {/* Status */}
        <div className="w-full lg:w-44">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            onClick={handleReset}
            className="w-full lg:w-auto bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
};

export default StudentFilters;