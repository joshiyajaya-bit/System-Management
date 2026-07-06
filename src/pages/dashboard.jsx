import StatsCards from "../components/StatsCards";
import AttendanceOverview from "../components/attendanceoverview";
import TeacherAttendanceOverview from "../components/teacherattendanceoverview";
import FeeOverview from "../components/feeoverview";
import Charts from "../components/chart";
import Calendar from "../components/calendar";

export default function Dashboard() {
  const attendanceData = [
    { name: "Mon", attendance: 62 },
    { name: "Tue", attendance: 72 },
    { name: "Wed", attendance: 81 },
    { name: "Thu", attendance: 64 },
    { name: "Fri", attendance: 75 },
    { name: "Sat", attendance: 92 },
    { name: "Sun", attendance: 68 },
  ];

  const performanceData = [
    { name: "Rahul", score: 66 },
    { name: "Meena", score: 74 },
    { name: "Harish", score: 96 },
    { name: "Sanjay", score: 67 },
    { name: "Satish", score: 85 },
    { name: "Naveen", score: 92 },
    { name: "Monisha", score: 71 },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-700 to-slate-900 p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="text-slate-300 mt-3">
          JKNS Engineering College ERP Management Dashboard
        </p>
      </div>

      {/* Stats */}
      <StatsCards />

      {/* Overview */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <AttendanceOverview />
        <TeacherAttendanceOverview />
        <FeeOverview />
      </div>

      {/* Charts + Calendar */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left Side */}
        <div className="xl:col-span-2 space-y-6">

          <Charts
            attendanceData={attendanceData}
            performanceData={performanceData}
          />

        </div>

        {/* Right Side */}
        <div>

          <Calendar />

        </div>

      </div>
    </div>
  );
}