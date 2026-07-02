import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 flex flex -col">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        JKNS
      </div>

      {/* Menu */}
      <nav className="mt-6 flex-1">
        <ul className="space-y-2">

          <NavLink
  to="/"
  className={({ isActive }) =>
    `flex items-center gap-3 px-6 py-3 rounded-lg ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-800"
    }`
  }
>
  <FaHome />
  Dashboard
</NavLink>

          <NavLink
  to="/students"
  className={({ isActive }) =>
    `flex items-center gap-3 px-6 py-3 rounded-lg ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-800"
    }`
  }
>
  <FaUserGraduate />
  Students
</NavLink>
<NavLink to="/teachers"
              href="#"
              className="flex items-center gap-3 px-6 py-3 hover:bg-slate-800 transition rounded-lg">
            
              <FaChalkboardTeacher />
              Teachers
            </NavLink>
<NavLink to="/courses"
              href="#"
              className="flex items-center gap-3 px-6 py-3 hover:bg-slate-800 transition rounded-lg"
            >
              <FaBook />
              Courses
        </NavLink>

  

          <NavLink to="/settings"
              href="#"
              className="flex items-center gap-3 px-6 py-3 hover:bg-slate-800 transition rounded-lg"
            >
              <FaCog />
              Settings
         </NavLink>

        </ul>
      </nav>
     <div className="border-t border-slate-700 p-4">

  {/* Admin */}
  <div className="flex items-center gap-3 mb-4">
    <FaUserCircle className="text-4xl text-blue-400" />

    <div>
      <h3 className="font-semibold">Admin</h3>
      <p className="text-sm text-slate-400">
        Administrator
      </p>
    </div>
  </div>

  {/* Logout */}
  <button
    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
  >
    <FaSignOutAlt />
    Logout
  </button>

</div>



    </aside>
  );
}

export default Sidebar;