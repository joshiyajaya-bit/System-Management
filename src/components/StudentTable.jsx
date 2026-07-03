// StudentTable.jsx

import React from "react";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const StudentTable = ({
  students,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          {/* Table Header */}
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Department</th>
              <th className="px-4 py-3 text-left">Year</th>
              <th className="px-4 py-3 text-left">Gender</th>
              <th className="px-4 py-3 text-left">DOB</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {/* Name */}
                  <td className="px-4 py-3 font-medium text-gray-700">
                    {student.name}
                  </td>

                  {/* Email */}
                  <td className="px-4 py-3">
                    {student.email}
                  </td>

                  {/* Phone */}
                  <td className="px-4 py-3">
                    {student.phone}
                  </td>

                  {/* Department */}
                  <td className="px-4 py-3">
                    {student.dept}
                  </td>

                  {/* Year */}
                  <td className="px-4 py-3">
                    {student.year}
                  </td>

                  {/* Gender */}
                  <td className="px-4 py-3">
                    {student.gender}
                  </td>

                  {/* DOB */}
                  <td className="px-4 py-3">
                    {student.dob}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2">
                      {/* View */}
                      <button
                        onClick={() => onView(student)}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition"
                      >
                        <Eye size={18} />
                      </button>

                      {/* Edit */}
                      <button
                        onClick={() => onEdit(student)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg transition"
                      >
                        <Pencil size={18} />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => onDelete(student.id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="9"
                  className="text-center py-10 text-gray-500"
                >
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;