import { useState } from "react";

import StudentForm from "../components/StudentForm";
import StudentFilters from "../components/StudentFilters";
import StudentTable from "../components/StudentTable";
import StudentPagination from "../components/StudentPagination";
import StudentModal from "../components/StudentModal";

import studentsData from "../students/students.json";

export default function Students() {
  const [students, setStudents] = useState(studentsData);

  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("");

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("view");

  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 10;

  // Add Student
  const handleAddStudent = (student) => {
    setStudents([student, ...students]);
    setCurrentPage(1);
  };

  // View
  const handleView = (student) => {
    setSelectedStudent(student);
    setMode("view");
    setModalOpen(true);
  };

  // Edit
  const handleEdit = (student) => {
    setSelectedStudent(student);
    setMode("edit");
    setModalOpen(true);
  };

  // Save
  const handleSave = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student["Student ID"] === updatedStudent["Student ID"]
          ? updatedStudent
          : student
      )
    );
  };

  // Delete
  const handleDelete = (studentId) => {
    if (window.confirm("Delete this student?")) {
      setStudents(
        students.filter(
          (student) =>
            student["Student ID"] !== studentId
        )
      );
    }
  };

  // Search & Filter

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student["Full Name"]
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      student.Email
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      String(student.Phone).includes(searchTerm);

    const matchesDepartment =
      department === "" ||
      student.Department === department;

    const matchesYear =
      year === "" ||
      String(student.Year) === String(year);

    const matchesStatus =
      status === "" ||
      student["Fee Status"] === status;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesYear &&
      matchesStatus
    );
  });

  // Pagination

  const totalPages = Math.ceil(
    filteredStudents.length / studentsPerPage
  );

  const startIndex =
    (currentPage - 1) * studentsPerPage;

  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  return (
   <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1E293B] p-6 space-y-8">

      {/* Header */}

     <div className="bg-[#1E293B]/90 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-2xl">

        <div className="flex items-center justify-between">

          <div>

           <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Student Management
            </h1>

           <p className="text-slate-300 mt-3 text-lg">
              Manage students, admissions, records and academic details.
            </p>

          </div>

          <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 shadow-lg">

<span className="text-5xl">
              🎓
            </span>

          </div>

        </div>

      </div>

      {/* Add Student */}

    <div className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl p-6">
  <StudentForm
    onAddStudent={handleAddStudent}
  />
</div>

      {/* Filters */}

    {/* Filters */}

<div className="bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl p-6">

  <StudentFilters
    searchTerm={searchTerm}
    setSearchTerm={(value) => {
      setSearchTerm(value);
      setCurrentPage(1);
    }}
    department={department}
    setDepartment={(value) => {
      setDepartment(value);
      setCurrentPage(1);
    }}
    year={year}
    setYear={(value) => {
      setYear(value);
      setCurrentPage(1);
    }}
    status={status}
    setStatus={(value) => {
      setStatus(value);
      setCurrentPage(1);
    }}
  />

</div>

{/* Statistics Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

  <div className="bg-[#1E293B] rounded-2xl border border-cyan-500/20 p-5">
    <h3 className="text-slate-400 text-sm">Total Students</h3>
    <h1 className="text-3xl text-white font-bold mt-2">
      {students.length}
    </h1>
  </div>

  <div className="bg-[#1E293B] rounded-2xl border border-green-500/20 p-5">
    <h3 className="text-slate-400 text-sm">Departments</h3>
    <h1 className="text-3xl text-green-400 font-bold mt-2">
      {new Set(students.map((s) => s.Department)).size}
    </h1>
  </div>

  <div className="bg-[#1E293B] rounded-2xl border border-blue-500/20 p-5">
    <h3 className="text-slate-400 text-sm">Paid Fees</h3>
    <h1 className="text-3xl text-blue-400 font-bold mt-2">
      {students.filter((s) => s["Fee Status"] === "Paid").length}
    </h1>
  </div>

  <div className="bg-[#1E293B] rounded-2xl border border-red-500/20 p-5">
    <h3 className="text-slate-400 text-sm">Pending Fees</h3>
    <h1 className="text-3xl text-red-400 font-bold mt-2">
      {students.filter((s) => s["Fee Status"] === "Pending").length}
    </h1>
  </div>

</div>

{/* Student Table */}

<div className="shadow-2xl rounded-3xl overflow-hidden border border-slate-700">

  <StudentTable
    students={currentStudents}
    onView={handleView}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />

</div>      {/* Pagination */}
<div className="flex justify-center mt-8">
<StudentPagination
      <StudentPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
</div>
      {/* Modal */}

      <StudentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        student={selectedStudent}
        mode={mode}
        onSave={handleSave}
      />

    </div>
  );
}
