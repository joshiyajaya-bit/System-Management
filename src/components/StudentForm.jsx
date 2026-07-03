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
  "Student ID": "",
  "Full Name": "",
  Email: "",
  Phone: "",
  Department: "",
  Year: "",
  Semester: "",
  Gender: "",
  "Fee Status": "Paid",
  "Attendance (%)": "",
  "Marks (%)": "",
};

 const [student, setStudent] = useState({ ...initialState });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

const handleReset = () => {
  setStudent({ ...initialState });
};


const handleSubmit = (e) => {
  e.preventDefault();
 if (
    !student["Student ID"] ||
    !student["Full Name"] ||
    !student.Email ||
    !student.Phone ||
    !student.Department ||
    !student.Year ||
    !student.Gender
  ) {
    alert("Please fill all fields.");
    return;
  }

    if (onAddStudent) {
      onAddStudent(student);
    }

    alert("Student Added Successfully!");

    handleReset();
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
                name="Student ID"
value={student["Student ID"]}
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
               name="Full Name"
value={student["Full Name"]}
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
               name="Email"
value={student.Email}
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
                name="Phone"
value={student.Phone}
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
             name="Department"
value={student.Department}
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
            name="Year"
value={student.Year}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
             <option value="">Select Year</option>
<option value="1">1st Year</option>
<option value="2">2nd Year</option>
<option value="3">3rd Year</option>
<option value="4">4th Year</option>
            </select>
          </div>

          <div>
  <label className="font-semibold text-gray-700">
    Semester
  </label>

  <select
    name="Semester"
   value={student.Semester || ""}
    onChange={handleChange}
    className="w-full mt-2 border rounded-xl px-4 py-3"
  >
    <option value="">Select Semester</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
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
                name="Gender"
value={student.Gender}
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

         
          {/* Status */}

          <div>
            <label className="font-semibold text-gray-700">
               Fee Status
            </label>

            <div className="relative mt-2">
              <FaCheckCircle className="absolute left-4 top-4 text-green-500" />

             <select
name="Fee Status"
value={student["Fee Status"]}
onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="Paid">Paid</option>
<option value="Pending">Pending</option>
              </select>
            </div>
          </div>

        </div>

        <div>
  <label className="font-semibold">
    Attendance (%)
  </label>

  <input
    type="number"
    name="Attendance (%)"
   value={student["Attendance (%)"] || ""}
    onChange={handleChange}
    className="w-full border rounded-xl px-4 py-3 mt-2"
  />
</div>

<div>
  <label className="font-semibold">
    Marks (%)
  </label>

  <input
    type="number"
    name="Marks (%)"
    value={student["Marks (%)"] || ""}
    onChange={handleChange}
    className="w-full border rounded-xl px-4 py-3 mt-2"
  />
</div>

        {/* Buttons */}

        <div className="mt-10 flex justify-end gap-4">

          <button
  type="button"
  onClick={handleReset}
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