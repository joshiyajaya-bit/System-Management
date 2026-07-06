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
   <div className="bg-[#1E293B]/95 backdrop-blur-xl border border-cyan-500/20 rounded-3xl shadow-2xl p-6">

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

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center shadow-lg">

          <FaCalendarAlt className="text-cyan-400 text-xl" />

        </div>

      </div>

      {/* Date */}

      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-6 border border-cyan-500/20 text-center">

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
<div className="bg-[#111827] rounded-3xl p-5 mt-5 border border-slate-700 flex items-center justify-center gap-4 shadow-lg">
        <FaClock className="text-cyan-400" />

        <h2 className="text-2xl font-bold text-white">

          {time.toLocaleTimeString()}

        </h2>

      </div>

      {/* Calendar */}

      <div className="mt-6 calendar-dark bg-[#111827] rounded-3xl border border-slate-700 p-4">

        <Calendar
          onChange={setDate}
          value={date}
        />

      </div>

      {/* Events */}

      <div className="mt-8">

       <div className="flex items-center justify-between mb-5">

  <h3 className="text-xl font-bold text-white">
    Upcoming Events
  </h3>

  <span className="text-cyan-400 text-sm">
    {events.length} Events
  </span>

</div>

        <div className="space-y-4">

          {events.map((event) => (

           <div
  key={event.id}
  className="flex items-center justify-between bg-[#111827] border border-slate-700 rounded-2xl px-5 py-4 hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300 shadow-lg"
>

              <div className="flex items-center gap-4 flex-1">

                <div
  className={`w-4 h-4 rounded-full ${event.color} shadow-md`}
/>

                <div>

                  <div className="flex justify-between items-center w-full">

                    <div>

                      <h4 className="text-white font-bold text-lg">
                        {event.title}
                      </h4>

                     <p className="text-slate-400 text-sm mt-1">
                        {event.date}
                      </p>

                    </div>

                    <span className="px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-bold whitespace-nowrap">
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