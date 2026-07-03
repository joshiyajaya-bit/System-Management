import { useEffect, useState } from "react";
import {
  FaBell,FaSearch,FaUserCircle,FaCalendarAlt,FaClock,} from "react-icons/fa";

export default function Navbar() {
  const [dateTime, setDateTime] = useState(new Date());

  const username =
    localStorage.getItem("username") || "Admin";

  const role =
    localStorage.getItem("role") || "Administrator";

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 h-20 bg-[#111827]/95 backdrop-blur-xl border-b border-slate-700 flex items-center justify-between px-8 shadow-xl">

      {/* Left */}

      <div>
        <p className="text-slate-100 text-lg">
          JKNS Engineering College ERP Dashboard
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

       
        {/* Date */}

        <div className="hidden xl:flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-2xl">

          <FaCalendarAlt className="text-cyan-400" />

          <div>

            <p className="text-white text-sm font-semibold">
              {dateTime.toLocaleDateString()}
            </p>

            <p className="text-slate-400 text-xs">
              {dateTime.toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </p>

          </div>

        </div>

        {/* Time */}

        <div className="hidden xl:flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-2xl">

          <FaClock className="text-green-400" />

          <span className="text-white font-semibold">
            {dateTime.toLocaleTimeString()}
          </span>

        </div>

        {/* Notification */}

        <button className="relative w-12 h-12 rounded-2xl bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center">

          <FaBell className="text-white text-lg" />

          <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 bg-slate-800 rounded-2xl px-4 py-2">

          <FaUserCircle className="text-5xl text-cyan-400" />

          <div>

            <h3 className="text-white font-semibold">
              {username}
            </h3>

            <p className="text-slate-400 text-sm">
              {role}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}