import React from "react";
import { Search, RotateCcw } from "lucide-react";

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
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

        {/* Search */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Search Student
          </label>

          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search by Name, Email or Phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border rounded-xl pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Department
          </label>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Year
          </label>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full border rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">All Years</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>

        {/* Fee Status */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Fee Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">All</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

      </div>

      {/* Reset Button */}
      <div className="flex justify-end mt-5">

        <button
          onClick={handleReset}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl transition"
        >
          <RotateCcw size={18} />
          Reset Filters
        </button>

      </div>

    </div>
  );
};

export default StudentFilters;