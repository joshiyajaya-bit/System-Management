import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Students from "./pages/stu";
import Teachers from "./pages/teachers";
import Courses from "./pages/courses";

export default function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Login Page
  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#0F172A]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 ml-72">
        {/* Navbar */}
        <Navbar />

        {/* Pages */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/students" element={<Students />} />

            <Route path="/teachers" element={<Teachers />} />

            <Route path="/courses" element={<Courses />} />

            {/* Prevent opening login after login */}
            <Route
              path="/login"
              element={<Navigate to="/" replace />}
            />

            {/* Unknown routes */}
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