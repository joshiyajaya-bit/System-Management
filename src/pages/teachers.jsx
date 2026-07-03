import teachers from "../students/teachers.json";
import TeacherAttendanceOverview from "../components/teacherattendanceoverview";
import {
  UserCircle2,
  GraduationCap,
  BookOpen,
  Percent,
} from "lucide-react";

export default function Teachers() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Teachers
          </h1>

          <p className="text-slate-400 mt-2">
            Manage faculty members and attendance
          </p>

        </div>

        <button
          className="
          px-6
          py-3
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          hover:from-cyan-400
          hover:to-blue-500
          text-white
          font-semibold
          shadow-lg
          shadow-cyan-500/30
          transition-all
          duration-300
          "
        >
          + Add Teacher
        </button>

      </div>

      {/* Attendance Overview */}

      <TeacherAttendanceOverview />

      {/* Teachers Table */}

      <div className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">

        {/* Table Heading */}

        <div className="px-6 py-5 border-b border-slate-700">

          <h2 className="text-2xl font-bold text-white">
            Faculty Members
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Complete list of registered teachers
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            {/* Header */}

            <thead className="bg-[#111827] border-b border-slate-700">

              <tr>

                <th className="px-6 py-4 text-left text-cyan-400">
                  ID
                </th>

                <th className="px-6 py-4 text-left text-cyan-400">
                  Teacher
                </th>

                <th className="px-6 py-4 text-left text-cyan-400">
                  Department
                </th>

                <th className="px-6 py-4 text-left text-cyan-400">
                  Subject
                </th>

                <th className="px-6 py-4 text-center text-cyan-400">
                  Attendance
                </th>

              </tr>

            </thead>

            {/* Body */}

            <tbody>

              {teachers.map((teacher) => (

                <tr
                  key={teacher.id}
                  className="
                  border-b
                  border-slate-700
                  hover:bg-slate-800/70
                  transition-all
                  duration-300
                  "
                >

                  {/* ID */}

                  <td className="px-6 py-5 text-white font-semibold">
                    {teacher.id}
                  </td>

                  {/* Teacher */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div
                        className="
                        w-12
                        h-12
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        flex
                        items-center
                        justify-center
                        "
                      >
                        <UserCircle2
                          className="text-white"
                          size={24}
                        />
                      </div>

                      <div>

                        <h3 className="text-white font-semibold">
                          {teacher.name}
                        </h3>

                        <p className="text-slate-400 text-sm">
                          Faculty Member
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Department */}

                  <td className="px-6 py-5">

                    <span
                      className="
                      px-4
                      py-1
                      rounded-full
                      bg-cyan-500/20
                      text-cyan-300
                      text-sm
                      "
                    >
                      {teacher.department}
                    </span>

                  </td>

                  {/* Subject */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-slate-300">

                      <BookOpen
                        size={18}
                        className="text-purple-400"
                      />

                      {teacher.subject}

                    </div>

                  </td>

                  {/* Attendance */}

                  <td className="px-6 py-5 text-center">

                    <span
                      className={`px-4 py-2 rounded-full font-semibold ${
                        teacher.attendance >= 75
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : "bg-red-500/20 text-red-400 border border-red-500/40"
                      }`}
                    >
                      {teacher.attendance}%
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}