import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



import fees from "../students/fees.json";

const COLORS = [
  "#06B6D4",
  "#3B82F6",
];
export default function FeeOverview() {
  const totalStudents = fees.length;

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
    <div className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl p-8 w-full min-h-[380px]">

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
  contentStyle={{
    background: "#111827",
    border: "1px solid #334155",
    borderRadius: "14px",
    color: "#fff",
  }}
  formatter={(value, name) => {
    const total = totalPaid + totalPending;

    const percentage = (
      (Number(value) / total) *
      100
    ).toFixed(1);

    return [`${percentage}%`, name];
  }}
/>
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
                

              </PieChart>
            </ResponsiveContainer>

            {/* Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

 

<h2 className="text-xl font-bold text-white mt-2">
  Fees
</h2>

<p className="text-sm text-slate-400">
  Collection
</p>

            </div>

          </div>

        </div>

        {/* Gradient Divider */}
        <div className="w-[2px] rounded-full bg-slate-700"></div>

        {/* Right Side */}
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full">

          {/* Paid */}
         <div className="flex justify-between items-center gap-4 py-4">

            <div>
              <h2 className="font-bold text-white text-lg">
  Paid
</h2>

<p className="text-sm text-slate-400">
  Fee Collected
</p>

<h2 className="text-3xl font-bold text-cyan-400"></h2>
            </div>

           <h2 className="text-xl xl:text-2xl font-bold text-green-500 text-right break-all">
  ₹{totalPaid.toLocaleString()}
</h2>
          </div>

      <div className="border-b border-slate-700"></div>

          {/* Pending */}
       <div className="flex justify-between items-center gap-4 py-4">

  <div>

    <h2 className="font-bold text-white text-lg">
      Pending
    </h2>

    <p className="text-sm text-slate-400">
      Fee Balance
    </p>

  </div>

  <h2 className="text-xl xl:text-2xl font-bold text-red-400 text-right break-all">
  ₹{totalPending.toLocaleString()}
</h2>

</div>

        <div className="border-b border-slate-700"></div>

          {/* Paid Students */}
       <div className="flex justify-between items-center gap-4 py-4">

  <div>

    <h2 className="font-bold text-white text-lg">
      Paid Students
    </h2>

    <p className="text-sm text-slate-400">
      {paidStudents} of {totalStudents} Students
    </p>

  </div>

  <h2 className="text-3xl font-bold text-cyan-400 whitespace-nowrap">
    {paidStudents}
  </h2>

</div>

        </div>

      </div>

    </div>
  );
}