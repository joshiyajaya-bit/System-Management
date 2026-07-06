import React from "react";
import {
  Eye, Pencil, Trash2,
} from "lucide-react";

export default function StudentTable({
  students,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="px-6 py-5 border-b border-slate-700">

        <h2 className="text-2xl font-bold text-white">
          Student Records
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Manage all registered students
        </p>

      </div>

      {/* Table */}

      <div className="w-full overflow-x-auto">

        <table className="w-full table-auto">
          {/* Header */}

          <thead className="bg-[#111827] border-b border-slate-700">

            <tr>

              <th className="px-5 py-4 text-left text-cyan-400 font-semibold">
                Student ID
              </th>

              <th className="px-5 py-4 text-left text-cyan-400 font-semibold">
                Name
              </th>

              <th className="px-5 py-4 text-left text-cyan-400 font-semibold">
                Email
              </th>

              <th className="px-5 py-4 text-left text-cyan-400 font-semibold">
                Phone
              </th>

              <th className="px-5 py-4 text-left text-cyan-400 font-semibold">
                Department
              </th>

              <th className="px-5 py-4 text-center text-cyan-400 font-semibold">
                Year
              </th>

              <th className="px-5 py-4 text-center text-cyan-400 font-semibold">
                Gender
              </th>

              <th className="px-5 py-4 text-center text-cyan-400 font-semibold">
                Fee Status
              </th>

              <th className="w-52 px-6 py-4 text-center text-cyan-400 font-semibold">
                Actions
              </th>
            </tr>

          </thead>

          {/* Body */}

          <tbody>

            {students.length > 0 ? (

              students.map((student, index) => (

                <tr
                  key={student["Student ID"] || index}
                  className="border-b border-slate-700 hover:bg-slate-800/60 transition-all duration-300"
                >

                  {/* Student ID */}

                  <td className="px-5 py-4 text-white font-semibold">
                    {student["Student ID"]}
                  </td>

                  {/* Name */}

                  <td className="px-5 py-4 text-slate-200">
                    {student["Full Name"]}
                  </td>

                  {/* Email */}

                  <td className="px-5 py-4 text-slate-400">
                    {student.Email}
                  </td>

                  {/* Phone */}

                  <td className="px-5 py-4 text-slate-400">
                    {student.Phone}
                  </td>

                  {/* Department */}

                  <td className="px-5 py-4">

                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">

                      {student.Department}

                    </span>

                  </td>

                  {/* Year */}

                  <td className="px-5 py-4 text-center text-white">

                    {student.Year}

                  </td>

                  {/* Gender */}

                  <td className="px-5 py-4 text-center text-slate-300">

                    {student.Gender}

                  </td>

                  {/* Fee Status */}

                  <td className="px-5 py-4 text-center">

                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${student["Fee Status"] === "Paid"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : "bg-red-500/20 text-red-400 border border-red-500/40"
                        }`}
                    >
                      {student["Fee Status"]}
                    </span>

                  </td>
                  {/* Actions */}

                  <td className="w-52 px-6 py-4">

                    <div className="flex items-center justify-center gap-3 whitespace-nowrap">

                      {/* View */}

                      <button
                        onClick={() => onView(student)}
                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all duration-300"
                      >
                        <Eye size={18} />
                      </button>

                      {/* Edit */}

                      <button
                        onClick={() => onEdit(student)}
                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500 hover:text-white hover:scale-110 transition-all duration-300"
                      >
                        <Pencil size={18} />
                      </button>

                      {/* Delete */}

                      <button
                        onClick={() => onDelete(student["Student ID"])}
                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all duration-300"
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
                  className="py-16 text-center"
                >

                  <div className="flex flex-col items-center">

                    <h2 className="text-2xl font-bold text-slate-300">

                      No Students Found

                    </h2>

                    <p className="text-slate-500 mt-2">

                      Try changing the search or filter options.

                    </p>

                  </div>

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>
    </div>


  );
}