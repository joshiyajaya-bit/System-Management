import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111827] border border-slate-700 text-white px-4 py-3 rounded-xl shadow-xl">
        <p className="text-cyan-400 font-semibold">
          {payload[0].value}%
        </p>
      </div>
    );
  }

  return null;
};

export default function Charts({
  attendanceData,
  performanceData,
}) {
  return (
    <div className="space-y-8">

      {/* Attendance Chart */}

      <div className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl p-6">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Attendance Overview
            </h2>

            <p className="text-slate-400 text-sm">
              Weekly Attendance Report
            </p>

          </div>

          <select
            className="
            bg-[#111827]
            border
            border-slate-700
            rounded-xl
            px-4
            py-2
            text-white
            outline-none
            "
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>

        </div>

        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <AreaChart data={attendanceData}>

            <defs>

              <linearGradient
                id="attendanceGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#06B6D4"
                  stopOpacity={0.5}
                />

                <stop
                  offset="95%"
                  stopColor="#06B6D4"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#334155"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              stroke="#94A3B8"
            />

            <YAxis
              stroke="#94A3B8"
            />

            <Tooltip
              content={<CustomTooltip />}
            />

            <Area
              type="monotone"
              dataKey="attendance"
              fill="url(#attendanceGradient)"
              stroke="none"
            />

            <Line
              type="monotone"
              dataKey="attendance"
              stroke="#06B6D4"
              strokeWidth={4}
              dot={{
                fill: "#06B6D4",
                stroke: "#fff",
                strokeWidth: 3,
                r: 6,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* Performance Chart */}

      <div className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl p-6">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Student Performance
            </h2>

            <p className="text-slate-400 text-sm">
              Top Performing Students
            </p>

          </div>

          <select
            className="
            bg-[#111827]
            border
            border-slate-700
            rounded-xl
            px-4
            py-2
            text-white
            outline-none
            "
          >
            <option>All Departments</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
            <option>EEE</option>
          </select>

        </div>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <BarChart data={performanceData}>

            <defs>

              <linearGradient
                id="performanceGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#3B82F6"
                />

                <stop
                  offset="100%"
                  stopColor="#06B6D4"
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#334155"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              stroke="#94A3B8"
            />

            <YAxis
              stroke="#94A3B8"
            />

            <Tooltip
              content={<CustomTooltip />}
            />

            <Bar
              dataKey="score"
              fill="url(#performanceGradient)"
              radius={[12,12,0,0]}
              barSize={45}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}