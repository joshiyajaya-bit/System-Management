import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { FaCalendarAlt, FaClock, } from "react-icons/fa";

import events from "./events";

export default function CalendarCard() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Calendar
          </h2>

          <p className="text-slate-400 text-sm">
            Schedule & Events
          </p>

        </div>

        <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

          <FaCalendarAlt className="text-cyan-400 text-xl" />

        </div>

      </div>

      {/* Date */}

      <div className="bg-[#111827] rounded-2xl p-5 border border-slate-700 text-center">

        <h1 className="text-5xl font-bold text-cyan-400">

          {time.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
          })}

        </h1>

        <p className="text-slate-400 mt-2">

          {time.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
          })}

        </p>

      </div>

      {/* Time */}

      <div className="bg-[#111827] rounded-2xl p-4 mt-5 border border-slate-700 flex items-center justify-center gap-3">

        <FaClock className="text-cyan-400" />

        <h2 className="text-2xl font-bold text-white">

          {time.toLocaleTimeString()}

        </h2>

      </div>

      {/* Calendar */}

      <div className="mt-6 calendar-dark">

        <Calendar
          onChange={setDate}
          value={date}
        />

      </div>

      {/* Events */}

      <div className="mt-8">

        <h3 className="text-xl font-semibold text-white mb-4">
          Upcoming Events
        </h3>

        <div className="space-y-4">

          {events.map((event) => (

            <div
              key={event.id}
              className="flex items-center justify-between bg-[#111827] border border-slate-700 rounded-2xl p-1 hover:border-cyan-500 transition"
            >

              <div className="flex items-center gap-3">

                <div
                  className={`w-3 h-3 rounded-full ${event.color}`}
                />

                <div>

                  <div className="flex justify-between items-center w-full">

                    <div>

                      <h4 className="text-white font-semibold">
                        {event.title}
                      </h4>

                      <p className="text-slate-400 text-sm">
                        {event.date}
                      </p>

                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-700 text-cyan-400 text-xs font-semibold">
                      {event.type}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}