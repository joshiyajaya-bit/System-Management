import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F"];

export default function Charts({
  attendanceData,
  performanceData,
}) {

   const pieData = [
  {
    name: "Active",
    value: attendanceData.filter(
      (s) => s.attendance >= 80
    ).length,
  },
  {
    name: "Inactive",
    value: attendanceData.filter(
      (s) => s.attendance < 80
    ).length,
  },
];

  return (
  <div className="space-y-8">  

      {/* Line Chart */}
      <div>
        <h3>Attendance Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
        <LineChart  data={attendanceData}>
  <CartesianGrid stroke="#374151" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Line
    type="monotone"
    dataKey="attendance"
    stroke="#3b82f6"
  />

</LineChart>
</ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div>
        <h3>Performance</h3>
         <ResponsiveContainer width="100%" height={300}>
       <BarChart data={performanceData}>
  <CartesianGrid stroke="#374151" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar
    dataKey="score"
    fill="#22c55e"
  />
</BarChart>
</ResponsiveContainer>
      </div>

    

    </div>
  );
}