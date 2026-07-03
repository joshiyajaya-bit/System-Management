import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import api from "../api/api";

const COLORS = [
  "#10b981",
  "#f59e0b",
];

export default function FeeOverview() {
  const totalStudents = fees.length;

  const [fees, setFees] = useState([]);

useEffect(() => {
  api.get("/fees").then((res) => {
    setFees(res.data);
  });
}, []);

  const paidStudents = fees.filter(
    (s) => s.Status === "Paid"
  ).length;

  const totalPaid = fees.reduce(
    (sum, s) => sum + Number(s["Paid Amount"]),
    0
  );

  const totalPending = fees.reduce(
    (sum, s) => sum + Number(s["Pending Amount"]),
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
    <div className="bg-white rounded-3xl shadow-xl p-6 w-full h-[330px]">

      <div className="flex h-full items-center gap-4">

        {/* Pie Chart */}
        <div className="w-[140px] flex justify-center shrink-0">

          <div className="relative w-[130px] h-[130px]">

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={62}
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
                    background: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px rgba(0,0,0,.15)",
                  }}
                  formatter={(value, name) => {
                    const total = totalPaid + totalPending;

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

            {/* Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

              <IndianRupee
                size={28}
                className="text-gray-500"
              />

              <h2 className="text-lg font-bold">
                Fee
              </h2>

              <p className="text-xs text-gray-500">
                Overview
              </p>

            </div>

          </div>

        </div>

        {/* Gradient Divider */}
        <div className="w-[3px] self-stretch rounded-full bg-gradient-to-b from-green-500 via-cyan-500 to-purple-600"></div>

        {/* Right Side */}
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full">

          {/* Paid */}
          <div className="flex justify-between items-center py-4">

            <div>
              <h2 className="font-bold text-lg">
                Paid
              </h2>

              <p className="text-sm text-gray-500">
                Fee Collected
              </p>
            </div>

            <h2 className="text-2xl font-bold text-green-600 whitespace-nowrap text-right">
              ₹{totalPaid.toLocaleString()}
            </h2>

          </div>

          <hr />

          {/* Pending */}
          <div className="flex justify-between items-center py-4">

            <div>
              <h2 className="font-bold text-lg">
                Pending
              </h2>

              <p className="text-sm text-gray-500">
                Fee Balance
              </p>
            </div>

            <h2 className="text-2xl font-bold text-orange-500 whitespace-nowrap text-right">
              ₹{totalPending.toLocaleString()}
            </h2>

          </div>

          <hr />

          {/* Paid Students */}
          <div className="flex justify-between items-center py-4">

            <div>
              <h2 className="font-bold text-lg">
                Paid Students
              </h2>

              <p className="text-sm text-gray-500">
                {paidStudents} of {totalStudents} Students
              </p>
            </div>

            <h2 className="text-2xl font-bold text-blue-600 whitespace-nowrap text-right">
              {paidStudents}
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}