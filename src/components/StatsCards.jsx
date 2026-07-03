import { FaUserGraduate,FaChalkboardTeacher, FaBook,FaMoneyBillWave,} from "react-icons/fa";

import students from "../students/students.json";
import teachers from "../students/teachers.json";
import courses from "../students/courses.json";
import fees from "../students/fees.json";

export default function StatsCards() {
  const totalStudents = students.length;
  const totalTeachers = teachers.length;
  const totalCourses = courses.length;

  const totalRevenue = fees.reduce(
    (sum, item) => sum + Number(item["Paid Amount"]),
    0
  );

  const cards = [
    {
      title: "Students",
      value: totalStudents,
      icon: <FaUserGraduate size={28} />,
      color: "from-cyan-500 to-blue-600",
      glow: "shadow-cyan-500/30",
    },
    {
      title: "Teachers",
      value: totalTeachers,
      icon: <FaChalkboardTeacher size={28} />,
      color: "from-emerald-500 to-green-600",
      glow: "shadow-green-500/30",
    },
    {
      title: "Courses",
      value: totalCourses,
      icon: <FaBook size={28} />,
      color: "from-violet-500 to-indigo-600",
      glow: "shadow-violet-500/30",
    },
    {
      title: "Fee Collection",
      value: `₹${totalRevenue.toLocaleString()}`,
      icon: <FaMoneyBillWave size={28} />,
      color: "from-orange-500 to-red-500",
      glow: "shadow-orange-500/30",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className="
          group
          bg-[#1E293B]
          border
          border-slate-700
          rounded-3xl
          p-6
          overflow-hidden
          relative
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-500
          hover:shadow-2xl
        "
        >

          {/* Background Glow */}

          <div
            className="
            absolute
            -right-10
            -top-10
            w-32
            h-32
            rounded-full
            bg-cyan-500/10
            blur-3xl
            group-hover:bg-cyan-400/20
            transition-all
            duration-500
          "
          />

          {/* Top */}

          <div className="flex justify-between items-center relative z-10">

            <div
              className={`  w-16  h-16  rounded-2xl  flex  items-center justify-center bg-gradient-to-r ${card.color} text-white shadow-xl ${card.glow} `}
            >
              {card.icon}
            </div>

            <div className="text-right">

              <p className="text-slate-400 text-sm">
                Total
              </p>

              <h2 className="text-4xl font-bold text-white">
                {card.value}
              </h2>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-8 relative z-10">

            <p className="text-slate-400 text-lg">
              {card.title}
            </p>

            <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">

              <div
                className={`h-2 rounded-full bg-gradient-to-r ${card.color}`}
                style={{ width: "82%" }}
              />

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}