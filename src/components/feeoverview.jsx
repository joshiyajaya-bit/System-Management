import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import fees from "../students/fees.json";

const COLORS = ["#06B6D4", "#3B82F6"];

export default function FeeOverview() {
  // ===============================
  // Fee Calculations
  // ===============================

  const totalStudents = fees.length;

  const paidStudents = fees.filter(
    (student) => student.Status === "Paid"
  ).length;

  const totalPaid = fees.reduce(
    (sum, student) => sum + Number(student["Paid Amount"]),
    0
  );

  const totalPending = fees.reduce(
    (sum, student) => sum + Number(student["Pending Amount"]),
    0
  );

  const data = [
    {
      name: "Paid",
      value: totalPaid,
    },
    {
      name: "Pending",
      value: totalPending,
    },
  ];

  return (
    <div className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl p-8 w-full h-[400px]">

      <div className="flex h-full">

        {/* ============================
             LEFT SIDE
        ============================= */}

        <div className="w-[42%] flex items-center justify-center">

          <div className="relative w-[220px] h-[220px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={72}
                  outerRadius={100}
                  paddingAngle={3}
                  stroke="#ffffff"
                  strokeWidth={4}
                >
                  {data.map((entry, index) => (
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
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                  formatter={(value, name) => {
                    const total =
                      totalPaid + totalPending;

                    const percentage = (
                      (Number(value) / total) *
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

            {/* ============================
                 CENTER CONTENT
            ============================= */}

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

              <h2 className="text-4xl font-bold text-cyan-400">
                ₹
              </h2>

              <h3 className="text-3xl font-bold text-white">
                Fees
              </h3>

              <p className="text-slate-400 text-lg">
                Collection
              </p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="w-px bg-slate-700 mx-5"></div>

        {/* Right Side Starts Here */}
        <div className="flex-1 flex flex-col justify-between">

        </div>
                  {/* =========================
              Paid Section
          ========================= */}

          <div className="flex justify-between items-center py-2 gap-4">

            <div>

              <h2 className="text-2xl font-bold text-white">
                Paid
              </h2>

              <p className="text-slate-400">
                Fee Collected
              </p>

            </div>

            <h2 className="text-4xl font-bold text-green-500 whitespace-nowrap">
              ₹{(totalPaid / 100000).toFixed(2)}L
            </h2>

          </div>

          <div className="border-b border-slate-700 my-2"></div>

          {/* =========================
              Pending Section
          ========================= */}

          <div className="flex justify-between items-center py-2 gap-4">

            <div>

              <h2 className="text-2xl font-bold text-white">
                Pending
              </h2>

              <p className="text-slate-400">
                Fee Balance
              </p>

            </div>

            <h2 className="text-4xl font-bold text-red-500 whitespace-nowrap">
              ₹{(totalPending / 100000).toFixed(2)}L
            </h2>

          </div>

          <div className="border-b border-slate-700 my-2"></div>

          {/* =========================
              Paid Students
          ========================= */}

          <div className="flex justify-between items-center py-2 gap-4">

            <div>

              <h2 className="text-2xl font-bold text-white">
                Paid Students
              </h2>

              <p className="text-slate-400">
                {paidStudents} of {totalStudents} Students
              </p>

            </div>

            <h2 className="text-4xl font-bold text-cyan-400 whitespace-nowrap">
              {paidStudents}
            </h2>

          </div>

        </div>

      </div>

   
  );
}