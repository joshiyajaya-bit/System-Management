import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import AttendanceOverview from "./components/attendanceoverview";
import TeacherAttendanceOverview from "./components/teacherattendanceoverview";
import FeeOverview from "./components/feeoverview";

import Charts from "./components/chart";
import Calendar from "./components/calendar";

import Students from "./pages/stu";
import Teachers from "./pages/teachers";
import Courses from "./pages/courses";
import Login from "./pages/login";

export default function App() {
  const location = useLocation();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

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



  // Show login page only
  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex flex-col flex-1 ml-64 min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="p-6">

          <Routes>

            {/* Dashboard */}
            <Route
              path="/"
              element={
                <>
                  {/* Top Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    <AttendanceOverview />

                    <TeacherAttendanceOverview />

                    <FeeOverview />

                  </div>

                  {/* Charts & Calendar */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6">

                      <Charts
                        attendanceData={attendanceData}
                        performanceData={performanceData}
                      />

                    </div>

                    <Calendar />

                  </div>
                </>
              }
            />

            <Route
              path="/students"
              element={<Students />}
            />

            <Route
              path="/teachers"
              element={<Teachers />}
            />

            <Route
              path="/courses"
              element={<Courses />}
            />

            <Route
              path="/login"
              element={<Navigate to="/" replace />}
            />

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />

          </Routes>

        </main>

      </div>

    </div>
  );
}