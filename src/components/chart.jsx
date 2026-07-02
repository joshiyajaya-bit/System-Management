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
      <div className="bg-violet-600 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-semibold">
        {payload[0].value}%
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

      {/* ================= Attendance Card ================= */}

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">

        {/* Header */}

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl font-bold text-gray-800">
            Attendance Overview
          </h2>

          <select
            className="
            border
            border-gray-200
            rounded-xl
            px-4
            py-2
            text-sm
            outline-none
            bg-white
            shadow-sm
          "
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>

        </div>

        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <AreaChart
            data={attendanceData}
            margin={{
              top: 10,
              right: 20,
              left: -15,
              bottom: 0,
            }}
          >

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
                  stopColor="#6D5DFC"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#6D5DFC"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#F1F5F9"
            />

            <XAxis
              dataKey="name"
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              content={<CustomTooltip />}
            />

            <Area
              type="monotone"
              dataKey="attendance"
              stroke="none"
              fill="url(#attendanceGradient)"
            />

            <Line
              type="monotone"
              dataKey="attendance"
              stroke="#6D5DFC"
              strokeWidth={3}
              dot={{
                r: 6,
                strokeWidth: 3,
                stroke: "#ffffff",
                fill: "#6D5DFC",
              }}
              activeDot={{
                r: 8,
                fill: "#6D5DFC",
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

            {/* ================= Performance Card ================= */}

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">

        {/* Header */}

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl font-bold text-gray-800">
            Performance Overview
          </h2>

          <select
            className="
              border
              border-gray-200
              rounded-xl
              px-4
              py-2
              text-sm
              outline-none
              bg-white
              shadow-sm
            "
          >
            <option>All Classes</option>
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
          <BarChart
            data={performanceData}
            margin={{
              top: 10,
              right: 20,
              left: -15,
              bottom: 0,
            }}
          >

            <defs>

              <linearGradient
                id="barGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#22C55E"
                />

                <stop
                  offset="100%"
                  stopColor="#6EE7B7"
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#F1F5F9"
            />

            <XAxis
              dataKey="name"
              tick={{
                fill: "#64748B",
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{
                fill: "#F8FAFC",
              }}
            />

            <Bar
              dataKey="score"
              fill="url(#barGradient)"
              radius={[8, 8, 0, 0]}
              barSize={48}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}