import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import events from "./events";

export default function CalendarCard() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">

      {/* Heading */}
      <div className="flex justify-center mb-5">
        <h2 className="text-xl font-bold bg-blue-100 text-blue-700 px-5 py-2 rounded-full">
           Calendar
        </h2>
      </div>

      {/* Date */}
      <div className="text-center mb-3">

        <h1 className="text-4xl font-bold text-blue-600">
          {time.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
          })}
        </h1>

        <p className="text-gray-500">
          {time.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
          })}
        </p>

      </div>

      {/* Time */}
      <div className="text-center mb-5">

        <h2 className="text-3xl font-bold text-green-600">
          {time.toLocaleTimeString()}
        </h2>

      </div>

      {/* Calendar */}
      <Calendar
        onChange={setDate}
        value={date}
      />

      {/* Upcoming Events */}
      <div className="mt-6">

        <h3 className="text-lg font-bold text-gray-700 mb-3">
          Upcoming Events
        </h3>

        <div className="space-y-3">

          {events.map((event) => (

            <div
              key={event.id}
              className="flex items-center bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition"
            >

              <div
                className={`w-3 h-3 rounded-full mr-3 ${event.color}`}
              ></div>

              <div>

                <h4 className="font-semibold">
                  {event.title}
                </h4>

                <p className="text-sm text-gray-500">
                  {event.date}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}