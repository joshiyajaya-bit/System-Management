import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Users } from "lucide-react";

import teachers from "../students/teachers.json";

const COLORS = ["#22c55e", "#ef4444"];

export default function TeacherAttendanceOverview() {
  const totalTeachers = teachers.length;

  const presentTeachers = teachers.filter(
    (teacher) => Number(teacher.attendance) >= 75
  ).length;

  const absentTeachers = totalTeachers - presentTeachers;

  const data = [
    {
      name: "Present",
      value: presentTeachers,
    },
    {
      name: "Absent",
      value: absentTeachers,
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 w-full h-[330px] overflow-hidden">

      <div className="flex h-full items-center gap-5">

        {/* Pie Chart */}
        <div className="w-[160px] flex justify-center items-center shrink-0">

          <div className="relative w-[150px] h-[150px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={48}
                  outerRadius={72}
                  paddingAngle={2}
                  stroke="#fff"
                  strokeWidth={3}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  cursor={false}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px rgba(0,0,0,.15)",
                  }}
                  formatter={(value, name) => {
                    const percentage = (
                      (Number(value) / totalTeachers) *
                      100
                    ).toFixed(1);

                    return [
                      `${percentage}%`,
                      name,
                    ];
                  }}
                />

              </PieChart>

            </ResponsiveContainer>

            {/* Center */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">

              <Users
                size={34}
                className="text-gray-500"
              />

              <h2 className="text-xl font-bold mt-2">
                Teachers
              </h2>

              <p className="text-gray-500 text-sm">
                Overview
              </p>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="w-[3px] self-stretch rounded-full bg-gradient-to-b from-green-500 via-cyan-500 to-purple-600"></div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-between h-full">

          {/* Present */}
          <div className="flex justify-between items-center py-4">

            <div>

              <h2 className="text-lg font-bold">
                Present
              </h2>

              <p className="text-sm text-gray-500">
                Teachers Present
              </p>

            </div>

            <h2 className="text-3xl font-bold text-green-600 whitespace-nowrap">
              {presentTeachers}
            </h2>

          </div>

          <hr />

          {/* Absent */}
          <div className="flex justify-between items-center py-4">

            <div>

              <h2 className="text-lg font-bold">
                Absent
              </h2>

              <p className="text-sm text-gray-500">
                Teachers Absent
              </p>

            </div>

            <h2 className="text-3xl font-bold text-red-500 whitespace-nowrap">
              {absentTeachers}
            </h2>

          </div>

          <hr />

          {/* Total */}
          <div className="flex justify-between items-center py-4">

            <div>

              <h2 className="text-lg font-bold">
                Total Teachers
              </h2>

              <p className="text-sm text-gray-500">
                Registered Teachers
              </p>

            </div>

            <h2 className="text-3xl font-bold text-blue-600 whitespace-nowrap">
              {totalTeachers}
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}