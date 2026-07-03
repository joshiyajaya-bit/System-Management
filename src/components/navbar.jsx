import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

import logo from "../assets/jkns-logo.png";

function Navbar() {
const username =
  localStorage.getItem("username");

const role =
  localStorage.getItem("role");

  return (
   <header className="sticky top-0 z-40 h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
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
      {username || "Guest"}
    </p>

    <p className="text-sm text-gray-500">
      {role || "User"}
    </p>

  </div>

</div>
        

      </div>

    </header>
  );
}

export default Navbar;