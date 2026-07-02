import { useState, useEffect, useRef } from "react";

const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
  department: "",
  year: "",
  address: "",
  status: "Active",
};

const StudentForm = ({
  students = [],
  addStudent,
  updateStudent,
  editStudent = null,
}) => {
  const [student, setStudent] = useState(initialState);
  const inputRef = useRef(null);

  // Focus first input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Load editStudent data or reset form
  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    } else {
      setStudent(initialState);
    }
  }, [editStudent]);

  // Handle Input Change
  const handleChange = (e) => {
    setStudent((prev) => ({
     ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Required Validation
    if (
     !student.id ||
     !student.name ||
     !student.email ||
     !student.phone ||
     !student.gender ||
     !student.dob ||
     !student.department ||
     !student.year ||
     !student.address
    ) {
      alert("Please fill all fields.");
      return;
    }

    // Student ID Validation
    if (!/^[0-9]{4,10}$/.test(student.id)) {
      alert("Student ID must contain 4-10 digits.");
      return;
    }

    // Name Validation
    if (!/^[A-Za-z ]+$/.test(student.name)) {
      alert("Student Name should contain only alphabets.");
      return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(student.email)) {
      alert("Enter a valid email address.");
      return;
    }

    // Phone Validation
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!phoneRegex.test(student.phone)) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }

    // Duplicate Student ID
    const duplicateId = students.find(
      (item) =>
        item.id === student.id &&
        (!editStudent || item.id!== editStudent.id)
    );
    if (duplicateId) {
      alert("Student ID already exists.");
      return;
    }

    // Duplicate Email
    const duplicateEmail = students.find(
      (item) =>
        item.email === student.email &&
        (!editStudent || item.id!== editStudent.id)
    );
    if (duplicateEmail) {
      alert("Email already exists.");
      return;
    }

    // Add or Update Student
    if (editStudent) {
      updateStudent(student);
      alert("Student Updated Successfully");
    } else {
      addStudent(student);
      alert("Student Registered Successfully");
    }

    setStudent(initialState);
    inputRef.current?.focus();
  };

  const handleReset = () => {
    setStudent(initialState);
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-6 rounded-t-2xl">
          <h1 className="text-3xl font-bold">
            🎓 {editStudent? "Update Student" : "Student Registration"}
          </h1>
          <p className="text-blue-100 mt-2">Fill all details carefully.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8"
        >
          {/* Student ID */}
          <div>
            <label className="font-semibold block mb-2">
              Student ID <span className="text-red-500">*</span>
            </label>
            <input
              ref={inputRef}
              type="text"
              name="id"
              value={student.id}
              onChange={handleChange}
              disabled={!!editStudent}
              placeholder="Enter 4-10 digit ID"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          {/* Student Name */}
          <div>
            <label className="font-semibold block mb-2">
              Student Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter Student Name"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold block mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="font-semibold block mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              maxLength="10"
              value={student.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit Phone"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="font-semibold block mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={student.gender}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="font-semibold block mb-2">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dob"
              value={student.dob}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Department */}
          <div>
            <label className="font-semibold block mb-2">
              Department <span className="text-red-500">*</span>
            </label>
            <select
              name="department"
              value={student.department}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Department</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
            </select>
          </div>

          {/* Academic Year */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Academic Year <span className="text-red-500">*</span>
            </label>
            <select
              name="year"
              value={student.year}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Status
            </label>
            <select
              name="status"
              value={student.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              rows="4"
              value={student.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Reset
            </button>

            <button
              type="submit"
              className={`px-6 py-3 text-white rounded-lg transition ${
                editStudent
                 ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {editStudent? "Update Student" : "Register Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;