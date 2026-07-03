import { FaArrowUp,} from "react-icons/fa";

export default function Card({
  title,value,icon,color = "from-cyan-500 to-blue-600",
}) {
  return (
    <div
      className="relative overflow-hidden bg-[#1E293B] border border-slate-700 rounded-3xl p-6 shadow-xl hover:border-cyan-500 hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300 "
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
        "
      />

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            {value}
          </h2>

        </div>

        <div
         className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-3xl shadow-lg`}
        >
          {icon}
        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between">

        <div className="flex items-center gap-2 text-green-400 text-sm font-medium">

          <FaArrowUp />

          <span>12% Increase</span>

        </div>

        <span className="text-slate-500 text-sm">
          This Month
        </span>

      </div>

    </div>
  );
}