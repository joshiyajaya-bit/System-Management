import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

import logo from "../assets/jkns-logo.png";

function Navbar() {
  return (
    <header className="h-20 bg-white shadow flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-4">

        <img
          src={logo}
          alt="JKNS Logo"
          className="w-14 h-14 rounded-full object-contain shadow-md border border-gray-200"
        />

        <div>

          <h1 className="text-2xl font-bold text-slate-800">
            JKNS Engineering College
          </h1>

          <p className="text-sm text-gray-500 tracking-wide">
            Student Management System
          </p>

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="relative">

          <FaSearch className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-64 pl-10 pr-4 py-2 border rounded-xl outline-none
                       focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Notification */}
        <button className="relative text-xl text-gray-600 hover:text-blue-600">

          <FaBell />

          <span
            className="absolute -top-1 -right-1
                       w-2 h-2 rounded-full bg-red-500"
          ></span>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-slate-700" />

          <div>

            <p className="font-semibold">
              Admin
            </p>

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