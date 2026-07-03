import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove login information
    localStorage.removeItem("isLoggedIn");

    // Redirect to Login page
    navigate("/login");
  };

  const menuClass = ({ isActive }) =>
    `flex items-center gap-4 px-6 py-4 mx-3 rounded-xl transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-gray-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-slate-900 text-white flex flex-col shadow-xl z-50">

      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold">JKNS</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        <ul className="space-y-2">

          <li>
            <NavLink to="/" className={menuClass}>
              <FaHome />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/students" className={menuClass}>
              <FaUserGraduate />
              <span>Students</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/teachers" className={menuClass}>
              <FaChalkboardTeacher />
              <span>Teachers</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/courses" className={menuClass}>
              <FaBook />
              <span>Courses</span>
            </NavLink>
          </li>

        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition duration-300"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;