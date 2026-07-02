import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaSignOutAlt,
  // FaUserCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
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
        <h1 className="text-3xl font-bold tracking-wide text-white">
          JKNS
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        <ul className="space-y-2">
          <li>
            <NavLink to="/" className={menuClass}>
              <FaHome className="text-lg" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/students" className={menuClass}>
              <FaUserGraduate className="text-lg" />
              <span>Students</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/teachers" className={menuClass}>
              <FaChalkboardTeacher className="text-lg" />
              <span>Teachers</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/courses" className={menuClass}>
              <FaBook className="text-lg" />
              <span>Courses</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-slate-700 p-5">
        {/* Admin */}
        <div className="flex items-center gap-3 mb-5">
          <FaUserCircle className="text-4xl text-blue-400" />

          {/* <div>
            <h3 className="font-semibold text-white">Admin</h3>
            <p className="text-sm text-gray-400">
              Administrator
            </p>
          </div> */}
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition duration-300 font-medium">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
