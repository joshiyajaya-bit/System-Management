import { useState,useEffect } from "react";
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
import Settings from "./pages/settings";

import students from "./students/students.json";
import StudentForm from "./components/common/Studentform";
import React from 'react';
import StudentManagementPage from './pages/StudentManagementPage';
import './App.css'; // ← ADD THIS LINE

export default function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const attendanceData = students.map((student) => ({
    name: student["Full Name"],
    attendance: Number(student["Attendance (%)"]),
  }));

  const performanceData = students.map((student) => ({
    name: student["Full Name"],
    score: Number(student["Marks (%)"]),
  }));
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  // Load LocalStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  // Save LocalStorage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Add Student
  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  // Update Student
  const updateStudent = (updatedStudent) => {
    const updated = students.map((item) =>
      item.id === updatedStudent.id ? updatedStudent : item
    );

    setStudents(updated);
    setEditStudent(null);
  };

  // Delete Student
  const deleteStudent = (id) => {
    const confirmDelete = window.confirm("Delete Student?");

    if (confirmDelete) {
      setStudents(students.filter((item) => item.id !== id));
    }
  };

  

  return (
    <div className="flex min-h-screen bg-slate-100">
       <StudentManagementPage />
       

      <Sidebar />

      <div className="flex-1 ml-64">

        <Navbar />

        <main className="p-6">

          <Routes>

            {/* Dashboard */}
            <Route
              path="/"
              element={
                <>
                  {/* Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <AttendanceOverview />

                    <TeacherAttendanceOverview />

                    <FeeOverview />

                  </div>

                  {/* Charts + Calendar */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6">

                      <Charts
                        attendanceData={attendanceData}
                        performanceData={performanceData}
                      />

                    </div>

                    <Calendar />

                  </div>
                   <div>

      <StudentForm
        students={students}
        addStudent={addStudent}
        updateStudent={updateStudent}
        editStudent={editStudent}
      />

    </div>

                </>
              }
            />

            <Route path="/students" element={<Students />} />

            <Route path="/teachers" element={<Teachers />} />

            <Route path="/courses" element={<Courses />} />

            <Route path="/settings" element={<Settings />} />

          </Routes>
        


  

        </main>
  </div>
      </div>


  );
}
// src/App.js



