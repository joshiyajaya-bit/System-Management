import { useState } from "react";
import {
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaCalendarAlt,
  FaTransgender,
  FaCheckCircle,
} from "react-icons/fa";

export default function StudentForm({ onAddStudent }) {
  const initialState = {
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    gender: "",
    dob: "",
    status: "Active",
  };

  const [student, setStudent] = useState(initialState);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !student.id ||
      !student.name ||
      !student.email ||
      !student.phone ||
      !student.department ||
      !student.year ||
      !student.gender ||
      !student.dob
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (onAddStudent) {
      onAddStudent(student);
    }

    alert("Student Added Successfully!");

    setStudent(initialState);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Add New Student
        </h2>

        <p className="text-gray-500 mt-2">
          Fill the student details below.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Student ID */}

          <div>
            <label className="font-semibold text-gray-700">
              Student ID
            </label>

            <div className="relative mt-2">
              <FaUserGraduate className="absolute left-4 top-4 text-blue-500" />

              <input
                type="text"
                name="id"
                value={student.id}
                onChange={handleChange}
                placeholder="ST001"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Name */}

          <div>
            <label className="font-semibold text-gray-700">
              Full Name
            </label>

            <div className="relative mt-2">
              <FaUserGraduate className="absolute left-4 top-4 text-blue-500" />

              <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleChange}
                placeholder="Rahul Kumar"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Email */}

          <div>
            <label className="font-semibold text-gray-700">
              Email
            </label>

            <div className="relative mt-2">
              <FaEnvelope className="absolute left-4 top-4 text-green-500" />

              <input
                type="email"
                name="email"
                value={student.email}
                onChange={handleChange}
                placeholder="student@gmail.com"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          {/* Phone */}

          <div>
            <label className="font-semibold text-gray-700">
              Phone Number
            </label>

            <div className="relative mt-2">
              <FaPhone className="absolute left-4 top-4 text-cyan-500" />

              <input
                type="text"
                name="phone"
                value={student.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>
          </div>

          {/* Department */}

          <div>
            <label className="font-semibold text-gray-700">
              Department
            </label>

            <div className="relative mt-2">
              <FaBuilding className="absolute left-4 top-4 text-orange-500" />

              <select
                name="department"
                value={student.department}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="">Select Department</option>
                <option>CSE</option>
                <option>IT</option>
                <option>AIDS</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>MECH</option>
                <option>CIVIL</option>
              </select>
            </div>
          </div>

          {/* Year */}

          <div>
            <label className="font-semibold text-gray-700">
              Year
            </label>

            <select
              name="year"
              value={student.year}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Year</option>
              <option>I Year</option>
              <option>II Year</option>
              <option>III Year</option>
              <option>IV Year</option>
            </select>
          </div>

          {/* Gender */}

          <div>
            <label className="font-semibold text-gray-700">
              Gender
            </label>

            <div className="relative mt-2">
              <FaTransgender className="absolute left-4 top-4 text-pink-500" />

              <select
                name="gender"
                value={student.gender}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* DOB */}

          <div>
            <label className="font-semibold text-gray-700">
              Date of Birth
            </label>

            <div className="relative mt-2">
              <FaCalendarAlt className="absolute left-4 top-4 text-red-500" />

              <input
                type="date"
                name="dob"
                value={student.dob}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
          </div>

          {/* Status */}

          <div>
            <label className="font-semibold text-gray-700">
              Status
            </label>

            <div className="relative mt-2">
              <FaCheckCircle className="absolute left-4 top-4 text-green-500" />

              <select
                name="status"
                value={student.status}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

        </div>

        {/* Buttons */}

        <div className="mt-10 flex justify-end gap-4">

          <button
            type="reset"
            onClick={() => setStudent(initialState)}
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition"
          >
            Add Student
          </button>

        </div>

      </form>

    </div>
  );
}