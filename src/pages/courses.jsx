import courses from "../students/courses.json";
import { BookOpen, Users, Clock } from "lucide-react";

export default function Courses() {
  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
              <BookOpen className="text-indigo-600" size={28} />
            </div>

            {/* Course Name */}
            <h2 className="text-lg font-bold text-slate-800">
              {course.course}
            </h2>

            {/* Course Code */}
            <p className="text-indigo-600 font-semibold mt-1">
              {course.code}
            </p>

            <div className="border-t my-4"></div>

            {/* Duration */}
            <div className="flex items-center justify-between text-gray-600 mb-3">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>Duration</span>
              </div>

              <span className="font-semibold">
                {course.duration}
              </span>
            </div>

            {/* Students */}
            <div className="flex items-center justify-between text-gray-600">
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>Students</span>
              </div>

              <span className="font-bold text-green-600">
                {course.students}
              </span>
            </div>

            {/* Button */}
            <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}