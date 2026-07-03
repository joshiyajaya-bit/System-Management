import { useEffect, useState } from "react";

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
    if (onSave) {
      onSave(formData);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-2xl font-bold text-slate-800">
            {mode === "view"
              ? "Student Details"
              : "Edit Student"}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl font-bold text-red-500"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">

          {/* Student ID */}
          <div>
            <label className="font-medium">Student ID</label>

            <input
              type="text"
              name="Student ID"
              value={formData["Student ID"] || ""}
              onChange={handleChange}
              readOnly={readOnly}
              className="w-full mt-1 border rounded-lg p-2 bg-gray-50"
            />
          </div>

          {/* Name */}
          <div>
            <label className="font-medium">Full Name</label>

            <input
              type="text"
              name="Full Name"
              value={formData["Full Name"] || ""}
              onChange={handleChange}
              readOnly={readOnly}
              className="w-full mt-1 border rounded-lg p-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium">Email</label>

            <input
              type="email"
              name="Email"
              value={formData.Email || ""}
              onChange={handleChange}
              readOnly={readOnly}
              className="w-full mt-1 border rounded-lg p-2"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="font-medium">Phone</label>

            <input
              type="text"
              name="Phone"
              value={formData.Phone || ""}
              onChange={handleChange}
              readOnly={readOnly}
              className="w-full mt-1 border rounded-lg p-2"
            />
          </div>

          {/* Department */}
          <div>
            <label className="font-medium">Department</label>

            <select
              name="Department"
              value={formData.Department || ""}
              onChange={handleChange}
              disabled={readOnly}
              className="w-full mt-1 border rounded-lg p-2"
            >
              <option>CSE</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>MECH</option>
              <option>CIVIL</option>
            </select>
          </div>

          {/* Year */}
          <div>
            <label className="font-medium">Year</label>

            <select
              name="Year"
              value={formData.Year || ""}
              onChange={handleChange}
              disabled={readOnly}
              className="w-full mt-1 border rounded-lg p-2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>

          {/* Semester */}
          <div>
            <label className="font-medium">Semester</label>

            <select
              name="Semester"
              value={formData.Semester || ""}
              onChange={handleChange}
              disabled={readOnly}
              className="w-full mt-1 border rounded-lg p-2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="font-medium">Gender</label>

            <select
              name="Gender"
              value={formData.Gender || ""}
              onChange={handleChange}
              disabled={readOnly}
              className="w-full mt-1 border rounded-lg p-2"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Attendance */}
          <div>
            <label className="font-medium">Attendance (%)</label>

            <input
              type="number"
              name="Attendance (%)"
              value={formData["Attendance (%)"] || ""}
              onChange={handleChange}
              readOnly={readOnly}
              className="w-full mt-1 border rounded-lg p-2"
            />
          </div>

          {/* Marks */}
          <div>
            <label className="font-medium">Marks (%)</label>

            <input
              type="number"
              name="Marks (%)"
              value={formData["Marks (%)"] || ""}
              onChange={handleChange}
              readOnly={readOnly}
              className="w-full mt-1 border rounded-lg p-2"
            />
          </div>

          {/* Fee Status */}
          <div>
            <label className="font-medium">Fee Status</label>

            <select
              name="Fee Status"
              value={formData["Fee Status"] || ""}
              onChange={handleChange}
              disabled={readOnly}
              className="w-full mt-1 border rounded-lg p-2"
            >
              <option>Paid</option>
              <option>Pending</option>
            </select>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-4">

          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Close
          </button>

          {mode === "edit" && (
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          )}

        </div>
      </div>
    </div>
  );
}