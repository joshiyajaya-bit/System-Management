import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", attendance: 92 },
  { day: "Tue", attendance: 88 },
  { day: "Wed", attendance: 94 },
  { day: "Thu", attendance: 90 },
  { day: "Fri", attendance: 96 },
  { day: "Sat", attendance: 91 },
];

export default function AttendanceOverview() {
  return (
    <div className="bg-[#1E293B] rounded-3xl p-6 shadow-xl border border-slate-700">

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">
            Attendance Overview
          </h2>

          <p className="text-slate-400 text-sm">
            Weekly Attendance Report
          </p>
        </div>

        <div className="text-right">
          <h3 className="text-3xl font-bold text-cyan-400">
            92%
          </h3>

          <p className="text-green-400 text-sm">
            +4% this week
          </p>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="attendance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#334155" />

            <XAxis dataKey="day" stroke="#94A3B8" />

            <YAxis stroke="#94A3B8" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="attendance"
              stroke="#06B6D4"
              strokeWidth={3}
              fill="url(#attendance)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}