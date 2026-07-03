import { useState } from "react";
import { Routes, Route } from "react-router-dom";

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

import students from "./students/students.json";

export default function App() {
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

if (!isLoggedIn) {
  return <Navigate to="/login" replace />;
}
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
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

     <div className="flex flex-col flex-1 ml-64 min-h-screen">

        <Navbar />

        <main className="p-6">

          <Routes>

            {/* Dashboard */}
            <Route
              path="/"
              element={
                <>
                  {/* Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                    <AttendanceOverview />

                    <TeacherAttendanceOverview />

                    <FeeOverview />

                  </div>

                  {/* Charts + Calendar */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                   <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8">

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

            <Route path="/students" element={<Students />} />

            <Route path="/teachers" element={<Teachers />} />

            <Route path="/courses" element={<Courses />} />

             <Route path="/login" element={<Login />} />

          

          </Routes>

        </main>

      </div>

    </div>
  );
}