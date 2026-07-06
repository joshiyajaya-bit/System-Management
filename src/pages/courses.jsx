
import { useState, useEffect } from "react";
import api from "../api/api";
import { BookOpen, Clock, Users, ArrowRight } from "lucide-react";
export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Courses
          </h1>

          <p className="text-slate-400 mt-2">
            Manage all available courses in JKNS ERP
          </p>

        </div>

        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/30 transition-all duration-300"
        >
          + Add Course
        </button>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">

        {courses.map((course) => (

          <div
            key={course.id}
            className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >

            {/* Top */}

            <div className="p-6">

              <div
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30"
              >

                <BookOpen
                  size={32}
                  className="text-white"
                />

              </div>

              <h2 className="text-2xl font-bold text-white mt-5">

                {course.course}

              </h2>

              <p className="text-cyan-400 font-semibold mt-2">

                {course.code}

              </p>

            </div>

            {/* Divider */}

            <div className="border-t border-slate-700"></div>

            {/* Body */}

            <div className="p-6 space-y-5">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <Clock
                    className="text-orange-400"
                    size={20}
                  />

                  <span className="text-slate-400">
                    Duration
                  </span>

                </div>

                <span className="font-bold text-white">

                  {course.duration}

                </span>

              </div>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <Users
                    className="text-green-400"
                    size={20}
                  />

                  <span className="text-slate-400">
                    Students
                  </span>

                </div>

                <span className="text-emerald-400 font-bold text-lg">

                  {course.students}

                </span>

              </div>

            </div>

            {/* Footer */}

            <div className="p-6 pt-0">

              <button
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all duration-300"
              >

                View Details

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}