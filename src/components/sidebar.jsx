import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/jkns-logo.png";

export default function Sidebar() {
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  localStorage.removeItem("rememberUser");

  navigate("/login", { replace: true });
};
const menuClass = ({ isActive }) =>
  `group flex items-center gap-4 px-5 py-3 rounded-2xl transition-all duration-300 ${
    isActive
      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg border-l-4 border-cyan-300"
      : "text-slate-300 hover:bg-slate-800 hover:text-white"
  }`;

  return (
    <aside
      className="
      fixed
      left-0
      top-0
      h-screen
      w-72
      bg-[#111827]/95
      backdrop-blur-xl
      border-r
      border-slate-700
      flex
      flex-col
      shadow-2xl
    "
    >
      {/* Logo */}

      <div className="h-24 px-6 flex items-center border-b border-slate-700">

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">

          <img
            src={logo}
            alt=""
            className="w-10 h-10 object-contain"
          />

        </div>

        <div className="ml-4">

          <h1 className="text-white text-2xl font-bold">
            JKNS ERP
          </h1>

          <p className="text-slate-400 text-sm">
            Student Management
          </p>

        </div>

      </div>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto px-4 py-6">


        <div className="space-y-3">

          <NavLink to="/" className={menuClass}>
            <FaHome />
            Dashboard
          </NavLink>

          <NavLink to="/students" className={menuClass}>
            <FaUserGraduate />
            Students
          </NavLink>

          <NavLink to="/teachers" className={menuClass}>
            <FaChalkboardTeacher />
            Teachers
          </NavLink>

          <NavLink to="/courses" className={menuClass}>
            <FaBook />
            Courses
          </NavLink>


        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-700 p-5">

        <button
          onClick={handleLogout}
         className="
w-full
py-3
rounded-2xl
bg-gradient-to-r
from-white-500
to-blue-700
hover:scale-105
transition
duration-300
text-white
font-semibold
flex
items-center
justify-center
gap-3
shadow-lg
"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
}