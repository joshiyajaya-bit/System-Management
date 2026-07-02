import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import logo from "../assets/jkns-logo.png";

function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-4 px-5 py-3 rounded-xl mx-3 transition-all duration-300
    ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-slate-200 hover:bg-slate-800 hover:translate-x-1"
    }`;

  return (
    <aside
      className="
        fixed
        top-0
        left-0
        w-64
        h-screen
        bg-slate-900
        text-white
        shadow-2xl
        flex
        flex-col
        z-50
      "
    >
      {/* ================= Logo ================= */}

      <div className="border-b border-slate-700 p-5">

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="JKNS Logo"
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
          />

          <div>
            <h2 className="text-2xl font-bold">
              JKNS
            </h2>

            <p className="text-xs text-slate-400">
              Engineering College
            </p>
          </div>

        </div>

      </div>

      {/* ================= Navigation ================= */}

      <nav className="flex-1 mt-6">

        <ul className="space-y-2">

          <li>
            <NavLink to="/" className={menuClass}>
              <FaHome />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/students" className={menuClass}>
              <FaUserGraduate />
              Students
            </NavLink>
          </li>

          <li>
            <NavLink to="/teachers" className={menuClass}>
              <FaChalkboardTeacher />
              Teachers
            </NavLink>
          </li>

          <li>
            <NavLink to="/courses" className={menuClass}>
              <FaBook />
              Courses
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings" className={menuClass}>
              <FaCog />
              Settings
            </NavLink>
          </li>

        </ul>

      </nav>

      {/* ================= Bottom ================= */}

      <div className="border-t border-slate-700 p-5">

        {/* Admin */}

        <div className="flex items-center gap-3 mb-5">

          <FaUserCircle className="text-5xl text-blue-400" />

          <div>

            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-sm text-slate-400">
              Administrator
            </p>

          </div>

        </div>

        {/* Logout */}

        <button
          className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            py-3
            rounded-xl
            bg-red-600
            hover:bg-red-700
            transition
            font-semibold
          "
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;