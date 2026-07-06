import { useState } from "react";
import {
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaTransgender,FaCheckCircle,} from "react-icons/fa";

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

  const [student, setStudent] = useState(initialState);

  const handleChange = (e) => {
    setStudent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setStudent(initialState);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !student["Student ID"]?.trim() ||
    !student["Full Name"]?.trim() ||
    !student.Email?.trim() ||
    !student.Phone?.trim() ||
    !student.Department ||
    !student.Year ||
    !student.Gender
  ) {
    alert("Please fill all required fields.");
    return;
  }

  const newStudent = {
    id: Date.now(),
    ...student,
  };

  try {
    await onAddStudent(newStudent);

    alert("Student Added Successfully!");

    handleReset();
  } catch (error) {
    console.error(error);
    alert("Failed to add student.");
  }
};

  return (
    <div className="bg-[#111827] border border-slate-700 rounded-3xl shadow-2xl p-8">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-white">
          Add New Student
        </h2>

        <p className="text-slate-400 mt-2">
          Register a new student into JKNS ERP
        </p>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Student ID */}

          <div>

            <label className="block text-slate-300 font-medium mb-2">
              Student ID
            </label>

            <div className="relative">

              <FaUserGraduate
                className="absolute left-4 top-4 text-cyan-400"
              />

              <input
                type="text"
                name="Student ID"
                value={student["Student ID"]}
                onChange={handleChange}
                placeholder="ST001"
                className="
                  w-full
                  bg-[#1E293B]
                  border
                  border-slate-700
                  rounded-xl
                  pl-12
                  pr-4
                  py-3
                  text-white
                  placeholder-slate-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              />

            </div>

          </div>

          {/* Full Name */}

          <div>

            <label className="block text-slate-300 font-medium mb-2">
              Full Name
            </label>

            <div className="relative">

              <FaUserGraduate
                className="absolute left-4 top-4 text-cyan-400"
              />

              <input
                type="text"
                name="Full Name"
                value={student["Full Name"]}
                onChange={handleChange}
                placeholder="Rahul Kumar"
                className="
                  w-full
                  bg-[#1E293B]
                  border
                  border-slate-700
                  rounded-xl
                  pl-12
                  pr-4
                  py-3
                  text-white
                  placeholder-slate-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="block text-slate-300 font-medium mb-2">
              Email
            </label>

            <div className="relative">

              <FaEnvelope
                className="absolute left-4 top-4 text-cyan-400"
              />

              <input
                type="email"
                name="Email"
                value={student.Email}
                onChange={handleChange}
                placeholder="student@jkns.edu.in"
                className="
                  w-full
                  bg-[#1E293B]
                  border
                  border-slate-700
                  rounded-xl
                  pl-12
                  pr-4
                  py-3
                  text-white
                  placeholder-slate-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              />

            </div>

          </div>

          {/* Phone */}

          <div>

            <label className="block text-slate-300 font-medium mb-2">
              Phone Number
            </label>

            <div className="relative">

              <FaPhone
                className="absolute left-4 top-4 text-cyan-400"
              />

              <input
                type="text"
                name="Phone"
                value={student.Phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="
                  w-full
                  bg-[#1E293B]
                  border
                  border-slate-700
                  rounded-xl
                  pl-12
                  pr-4
                  py-3
                  text-white
                  placeholder-slate-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              />

            </div>

          </div>

                    {/* Department */}

          <div>

            <label className="block text-slate-300 font-medium mb-2">
              Department
            </label>

            <div className="relative">

              <FaBuilding className="absolute left-4 top-4 text-cyan-400" />

              <select
                name="Department"
                value={student.Department}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#1E293B]
                  border
                  border-slate-700
                  rounded-xl
                  pl-12
                  pr-4
                  py-3
                  text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              >
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="AIDS">AIDS</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="MECH">MECH</option>
                <option value="CIVIL">CIVIL</option>
              </select>

            </div>

          </div>

          {/* Year */}

          <div>

            <label className="block text-slate-300 font-medium mb-2">
              Year
            </label>

            <select
              name="Year"
              value={student.Year}
              onChange={handleChange}
              className="
                w-full
                bg-[#1E293B]
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-500
              "
            >
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>

          </div>

          {/* Semester */}

          <div>

            <label className="block text-slate-300 font-medium mb-2">
              Semester
            </label>

            <select
              name="Semester"
              value={student.Semester}
              onChange={handleChange}
              className="
                w-full
                bg-[#1E293B]
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-500
              "
            >
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>

          </div>

          {/* Gender */}

          <div>

            <label className="block text-slate-300 font-medium mb-2">
              Gender
            </label>

            <div className="relative">

              <FaTransgender className="absolute left-4 top-4 text-cyan-400" />

              <select
                name="Gender"
                value={student.Gender}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#1E293B]
                  border
                  border-slate-700
                  rounded-xl
                  pl-12
                  pr-4
                  py-3
                  text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

            </div>

          </div>

          {/* Fee Status */}

          <div>

            <label className="block text-slate-300 font-medium mb-2">
              Fee Status
            </label>

            <div className="relative">

              <FaCheckCircle className="absolute left-4 top-4 text-cyan-400" />

              <select
                name="Fee Status"
                value={student["Fee Status"]}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#1E293B]
                  border
                  border-slate-700
                  rounded-xl
                  pl-12
                  pr-4
                  py-3
                  text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              >
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </select>

            </div>

          </div>

          {/* Attendance */}

          <div>

            <label className="block text-slate-300 font-medium mb-2">
              Attendance (%)
            </label>

            <input
              type="number"
              name="Attendance (%)"
              value={student["Attendance (%)"]}
              onChange={handleChange}
              placeholder="95"
              className="
                w-full
                bg-[#1E293B]
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                placeholder-slate-500
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-500
              "
            />

          </div>

          {/* Marks */}

          <div>

            <label className="block text-slate-300 font-medium mb-2">
              Marks (%)
            </label>

            <input
              type="number"
              name="Marks (%)"
              value={student["Marks (%)"]}
              onChange={handleChange}
              placeholder="88"
              className="
                w-full
                bg-[#1E293B]
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                placeholder-slate-500
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-500
              "
            />

          </div>

                  </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-10">

          {/* Reset */}

          <button
            type="button"
            onClick={handleReset}
            className="
              px-6
              py-3
              rounded-xl
              border
              border-slate-600
              bg-[#1E293B]
              text-slate-300
              hover:bg-slate-700
              hover:text-white
              transition-all
              duration-300
            "
          >
            Reset
          </button>

          {/* Add Student */}

          <button
            type="submit"
            className="
              px-8
              py-3
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              font-semibold
              shadow-lg
              shadow-cyan-500/20
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Add Student
          </button>

        </div>

      </form>

    </div>
  );
}