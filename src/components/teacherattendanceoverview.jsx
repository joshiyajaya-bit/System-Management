import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


import teachers from "../students/teachers.json";

export default function TeacherAttendanceOverview() {
  const excellent = teachers.filter(
    (teacher) => Number(teacher.attendance) >= 90
  ).length;

  const good = teachers.filter(
    (teacher) =>
      Number(teacher.attendance) >= 75 &&
      Number(teacher.attendance) < 90
  ).length;

  const average = teachers.filter(
    (teacher) =>
      Number(teacher.attendance) >= 60 &&
      Number(teacher.attendance) < 75
  ).length;

  const poor = teachers.filter(
    (teacher) => Number(teacher.attendance) < 60
  ).length;

  const data = [
    {
      name: "Excellent",
      value: excellent,
    },
    {
      name: "Good",
      value: good,
    },
    {
      name: "Average",
      value: average,
    },
    {
      name: "Poor",
      value: poor,
    },
  ];

  const COLORS = [
    "#22C55E",
    "#3B82F6",
    "#F59E0B",
    "#EF4444",
  ];

  return (
 <div className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl p-8 w-full min-h-[380px]">

      <div className="flex h-full items-center gap-5">

        {/* Chart */}

       <div className="w-[42%] flex items-center justify-center">

          <div className="relative w-[220px] h-[220px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
outerRadius={100}
                  paddingAngle={3}
                  stroke="#1E293B"
                  strokeWidth={3}
                >
                  {data.map((item, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid #334155",
                    borderRadius: "14px",
                    color: "#fff",
                  }}
                />

              </PieChart>

            </ResponsiveContainer>

            {/* Center */}

            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">

             <h2 className="text-4xl font-bold text-white">
92%
</h2>

<p className="text-slate-400">
Attendance
</p>

<p className="text-cyan-400 text-sm mt-1">
Teachers
</p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="w-[2px] self-stretch rounded-full bg-slate-700"></div>

        {/* Details */}

        <div className="flex-1 flex flex-col justify-between">

          {/* Excellent */}

          <div className="flex justify-between items-center py-3">

            <div>

              <h3 className="font-bold text-white text-lg">
                Excellent
              </h3>

              <p className="text-slate-400">
                Attendance ≥ 90%
              </p>

            </div>

            <h2 className="text-3xl font-bold text-green-400">
              {excellent}
            </h2>

          </div>

          <div className="border-b border-slate-700"></div>

          {/* Good */}

          <div className="flex justify-between items-center py-3">

            <div>

              <h3 className="font-bold text-white text-lg">
                Good
              </h3>

              <p className="text-slate-400">
                75% - 89%
              </p>

            </div>

            <h2 className="text-3xl font-bold text-blue-400">
              {good}
            </h2>

          </div>

          <div className="border-b border-slate-700"></div>

          {/* Average */}

          <div className="flex justify-between items-center py-3">

            <div>

              <h3 className="font-bold text-white text-lg">
                Average
              </h3>

              <p className="text-slate-400">
                60% - 74%
              </p>

            </div>

            <h2 className="text-3xl font-bold text-yellow-400">
              {average}
            </h2>

          </div>

          <div className="border-b border-slate-700"></div>

          {/* Poor */}

          <div className="flex justify-between items-center py-3">

            <div>

              <h3 className="font-bold text-white text-lg">
                Poor
              </h3>

              <p className="text-slate-400">
                Below 60%
              </p>

            </div>

            <h2 className="text-3xl font-bold text-red-400">
              {poor}
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}