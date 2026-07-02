import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

import logo from "../assets/jkns-logo.png";

function Navbar() {
  return (
    <header className="h-20 bg-white shadow-md flex items-center justify-between px-8 sticky top-0 z-40">
      {/* Left */}
      <div className="flex items-center gap-4">

        <img
          src={logo}
          alt="JKNS Logo"
          className="w-14 h-14 rounded-full object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            JKNS Engineering College
          </h1>

          <p className="text-sm text-gray-500">
            Student Management System
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative">

          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-64
              pl-10
              pr-4
              py-2.5
              border
              border-gray-300
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

        </div>

        {/* Notification */}
        <button className="relative text-xl text-gray-600 hover:text-blue-600 transition">

          <FaBell />

          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">

          <FaUserCircle className="text-5xl text-blue-600" />

          <div>
            <h2 className="font-bold text-lg text-slate-800">
              Admin
            </h2>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;