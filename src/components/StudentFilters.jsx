import React from "react";
import {Search, RotateCcw,Filter,} from "lucide-react";

const StudentFilters = ({
  searchTerm,setSearchTerm,department,setDepartment,year,setYear,status,setStatus,}) => {
  const handleReset = () => {
    setSearchTerm("");
    setDepartment("");
    setYear("");
    setStatus("");
};

  return (
    <div className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Student Filters
          </h2>

          <p className="text-slate-400 text-sm">
            Search and filter student records
          </p>

        </div>

        <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

          <Filter className="text-cyan-400" size={24} />

        </div>

      </div>

      {/* Filters */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

        {/* Search */}

        <div className="xl:col-span-2">

          <label className="block text-slate-300 font-medium mb-2">
            Search Student
          </label>

          <div className="relative">

            <Search
              className="absolute left-4 top-3.5 text-slate-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search Name, Email or Phone..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full bg-[#111827] border border-slate-700 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"
            />

          </div>

        </div>

        {/* Department */}

        <div>

          <label className="block text-slate-300 font-medium mb-2">
            Department
          </label>

          <select
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
           className="w-full bg-[#111827] border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
          >
            <option value="">All</option>
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

          <label className="block text-slate-300 font-medium mb-2">
            Year
          </label>

          <select
            value={year}
            onChange={(e) =>
              setYear(e.target.value)
            }
           className="w-full bg-[#111827] border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
          >
            <option value="">All</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>

        </div>

        {/* Fee Status */}

        <div>

          <label className="block text-slate-300 font-medium mb-2">
            Fee Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="w-full bg-[#111827] border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
          >
            <option value="">All</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>

        </div>

      </div>

      {/* Bottom */}

      <div className="flex justify-between items-center mt-8">

        <p className="text-slate-400 text-sm">
          Use filters to quickly find students.
        </p>

        <button
         onClick={handleReset}
className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition duration-300 hover:scale-105"
        >
          <RotateCcw size={18} />
          Reset Filters
        </button>

      </div>

    </div>
  );
};

export default StudentFilters;