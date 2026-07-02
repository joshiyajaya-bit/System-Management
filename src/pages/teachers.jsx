import teachers from "../students/teachers.json";
import TeacherAttendanceOverview from "../components/teacherattendanceoverview";

export default function Teachers() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold text-slate-800">
        Teachers
      </h1>

      {/* Attendance Overview */}
      <TeacherAttendanceOverview />

      {/* Teachers List */}
      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-xl font-semibold mb-4">
          Teachers List
        </h2>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-100">

              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Subject</th>
                <th className="p-3 text-left">Attendance</th>
              </tr>

            </thead>

            <tbody>

              {teachers.map((teacher) => (
                <tr
                  key={teacher.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-3">{teacher.id}</td>
                  <td className="p-3">{teacher.name}</td>
                  <td className="p-3">{teacher.department}</td>
                  <td className="p-3">{teacher.subject}</td>

                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        teacher.attendance >= 75
                          ? "bg-green-500"
                          : "bg-red-500"
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