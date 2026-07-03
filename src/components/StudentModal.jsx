// StudentModal.jsx

import { useEffect, useState } from "react";

const StudentModal = ({
  isOpen,
  onClose,
  student,
  mode = "view", // view | edit
  onSave,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dept: "",
    year: "",
    status: "",
    dob: "",
    gender: "",
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  if (!isOpen) return null;

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

  const readOnly = mode === "view";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800">
            {mode === "view" ? "Student Details" : "Edit Student"}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Student Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              readOnly={readOnly}
              className={`w-full border rounded-lg p-2 ${
                readOnly ? "bg-gray-100" : ""
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              readOnly={readOnly}
              className={`w-full border rounded-lg p-2 ${
                readOnly ? "bg-gray-100" : ""
              }`}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              readOnly={readOnly}
              className={`w-full border rounded-lg p-2 ${
                readOnly ? "bg-gray-100" : ""
              }`}
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Department
            </label>
            <select
              name="dept"
              value={formData.dept || ""}
              onChange={handleChange}
              disabled={readOnly}
              className={`w-full border rounded-lg p-2 ${
                readOnly ? "bg-gray-100" : ""
              }`}
            >
              <option value="">Select Department</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>Mechanical</option>
              <option>Civil</option>
              <option>IT</option>
            </select>
          </div>

          {/* Year */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Year
            </label>
            <select
              name="year"
              value={formData.year || ""}
              onChange={handleChange}
              disabled={readOnly}
              className={`w-full border rounded-lg p-2 ${
                readOnly ? "bg-gray-100" : ""
              }`}
            >
              <option value="">Select Year</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status || ""}
              onChange={handleChange}
              disabled={readOnly}
              className={`w-full border rounded-lg p-2 ${
                readOnly ? "bg-gray-100" : ""
              }`}
            >
              <option value="">Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob || ""}
              onChange={handleChange}
              readOnly={readOnly}
              className={`w-full border rounded-lg p-2 ${
                readOnly ? "bg-gray-100" : ""
              }`}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              disabled={readOnly}
              className={`w-full border rounded-lg p-2 ${
                readOnly ? "bg-gray-100" : ""
              }`}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>

          {mode === "edit" && (
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentModal;