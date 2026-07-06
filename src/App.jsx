import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Students from "./pages/stu";
import Teachers from "./pages/teachers";
import Courses from "./pages/courses";

function ProtectedRoute({ children }) {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Protected Layout */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="flex min-h-screen bg-[#0F172A] overflow-hidden">
              <Sidebar />

              <div className="flex flex-col flex-1 ml-72">
                <Navbar />

                <main className="px-8 py-6 lg:px-10">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />

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
                      path="*"
                      element={<Navigate to="/" replace />}
                    />
                  </Routes>
                </main>
              </div>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}