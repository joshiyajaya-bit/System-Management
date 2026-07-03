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
    <div className="min-h-screen bg-[#0F172A] p-6 space-y-8">

      {/* Header */}

      <div className="bg-[#1E293B] border border-slate-700 rounded-3xl p-8 shadow-xl">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Student Management
            </h1>

            <p className="text-slate-400 mt-2">
              Manage students, admissions, records and academic details.
            </p>

          </div>

          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/20">

            <span className="text-3xl">
              🎓
            </span>

          </div>

        </div>

      </div>

      {/* Add Student */}

      <StudentForm
        onAddStudent={handleAddStudent}
      />

      {/* Filters */}

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

      {/* Student Table */}

      <StudentTable
        students={currentStudents}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Pagination */}

      <StudentPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

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