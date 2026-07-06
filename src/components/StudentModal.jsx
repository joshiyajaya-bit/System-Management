import { useEffect, useState } from "react";
import { FaUserGraduate, FaEnvelope, FaPhone, FaBuilding, FaVenusMars, FaBook, FaPercent, FaMoneyBillWave } from "react-icons/fa";

export default function StudentModal({
  isOpen,
  onClose,
  student,
  mode = "view",
  onSave,
}) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  if (!isOpen) return null;

  const readOnly = mode === "view";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const inputStyle = "w-full bg-[#111827] border border-slate-700 text-white rounded-xl pl-12 pr-4 py-3 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30";

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-5"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl max-h-[90vh] rounded-3xl border border-slate-700 bg-[#1E293B] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}

        <div className="flex justify-between items-center px-8 py-5 border-b border-slate-700">

          <div>

            <h2 className="text-3xl font-bold text-white">

              {mode === "view"
                ? "Student Details"
                : "Edit Student"}

            </h2>

            <p className="text-slate-400 mt-1">

              JKNS Engineering College ERP

            </p>

          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xl transition"
          >
            ✕

          </button>

        </div>

        {/* Body */}

        {/* Body */}

        <div className="flex-1 overflow-y-auto">

          <div className="grid md:grid-cols-2 gap-6 p-8"></div>

          {/* Student ID */}

          <div>

            <label className="text-slate-300 mb-2 block">

              Student ID

            </label>

            <div className="relative">

              <FaUserGraduate className="absolute left-4 top-4 text-cyan-400" />

              <input
                name="Student ID"
                value={formData["Student ID"] || ""}
                onChange={handleChange}
                readOnly={readOnly}
                className={inputStyle}
              />

            </div>

          </div>

          {/* Name */}

          <div>

            <label className="text-slate-300 mb-2 block">

              Full Name

            </label>

            <div className="relative">

              <FaUserGraduate className="absolute left-4 top-4 text-cyan-400" />

              <input
                name="Full Name"
                value={formData["Full Name"] || ""}
                onChange={handleChange}
                readOnly={readOnly}
                className={inputStyle}
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="text-slate-300 mb-2 block">

              Email

            </label>

            <div className="relative">

              <FaEnvelope className="absolute left-4 top-4 text-emerald-400" />

              <input
                name="Email"
                value={formData.Email || ""}
                onChange={handleChange}
                readOnly={readOnly}
                className={inputStyle}
              />

            </div>

          </div>

          {/* Phone */}

          <div>

            <label className="text-slate-300 mb-2 block">

              Phone

            </label>

            <div className="relative">

              <FaPhone className="absolute left-4 top-4 text-orange-400" />

              <input
                name="Phone"
                value={formData.Phone || ""}
                onChange={handleChange}
                readOnly={readOnly}
                className={inputStyle}
              />

            </div>

          </div>

          {/* Department */}

          <div>

            <label className="text-slate-300 mb-2 block">

              Department

            </label>

            <div className="relative">

              <FaBuilding className="absolute left-4 top-4 text-purple-400" />

              <select
                name="Department"
                value={formData.Department || ""}
                onChange={handleChange}
                disabled={readOnly}
                className={inputStyle}
              >
                <option>CSE</option>
                <option>IT</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>MECH</option>
                <option>CIVIL</option>
              </select>

            </div>

          </div>

          {/* Year */}

          <div>

            <label className="text-slate-300 mb-2 block">

              Year

            </label>

            <select
              name="Year"
              value={formData.Year || ""}
              onChange={handleChange}
              disabled={readOnly}
              className={inputStyle}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>

          </div>

          {/* Semester */}

          <div>

            <label className="text-slate-300 mb-2 block">

              Semester

            </label>

            <select
              name="Semester"
              value={formData.Semester || ""}
              onChange={handleChange}
              disabled={readOnly}
              className={inputStyle}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem}>{sem}</option>
              ))}
            </select>

          </div>

          {/* Gender */}

          <div>

            <label className="text-slate-300 mb-2 block">

              Gender

            </label>

            <div className="relative">

              <FaVenusMars className="absolute left-4 top-4 text-pink-400" />

              <select
                name="Gender"
                value={formData.Gender || ""}
                onChange={handleChange}
                disabled={readOnly}
                className={inputStyle}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

            </div>

          </div>

          {/* Attendance */}

          <div>

            <label className="text-slate-300 mb-2 block">

              Attendance %

            </label>

            <div className="relative">

              <FaPercent className="absolute left-4 top-4 text-green-400" />

              <input
                name="Attendance (%)"
                value={formData["Attendance (%)"] || ""}
                onChange={handleChange}
                readOnly={readOnly}
                className={inputStyle}
              />

            </div>

          </div>

          {/* Marks */}

          <div>

            <label className="text-slate-300 mb-2 block">

              Marks %

            </label>

            <div className="relative">

              <FaBook className="absolute left-4 top-4 text-yellow-400" />

              <input
                name="Marks (%)"
                value={formData["Marks (%)"] || ""}
                onChange={handleChange}
                readOnly={readOnly}
                className={inputStyle}
              />

            </div>

          </div>

          {/* Fee Status */}

          <div className="md:col-span-2">

            <label className="text-slate-300 mb-2 block">

              Fee Status

            </label>

            <div className="relative">

              <FaMoneyBillWave className="absolute left-4 top-4 text-cyan-400" />

              <select
                name="Fee Status"
                value={formData["Fee Status"] || ""}
                onChange={handleChange}
                disabled={readOnly}
                className={inputStyle}
              >
                <option>Paid</option>
                <option>Pending</option>
              </select>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="sticky bottom-0 bg-[#1E293B] flex justify-end gap-4 px-8 py-5 border-t border-slate-700">

          <button
            onClick={onClose}
            className="px-7 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition"
          >
            Close
          </button>

          {mode === "edit" && (

            <button
              onClick={handleSave}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/30 transition"
            >
              Save Changes
            </button>

          )}

        </div>

      </div>
    </div>
  );
}