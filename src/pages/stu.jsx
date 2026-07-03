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
    setStudents([
      {
        ...student,
        id: Date.now(),
      },
      ...students,
    ]);
  };

  // View Student
  const handleView = (student) => {
    setSelectedStudent(student);
    setMode("view");
    setModalOpen(true);
  };

  // Edit Student
  const handleEdit = (student) => {
    setSelectedStudent(student);
    setMode("edit");
    setModalOpen(true);
  };

  // Save Student
  const handleSave = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );
  };

  // Delete Student
  const handleDelete = (id) => {
    if (window.confirm("Delete this student?")) {
      setStudents(
        students.filter((student) => student.id !== id)
      );
    }
  };

  // Filtering
  const filteredStudents = students.filter((student) => {

    const search =
      student.name
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      student.email
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      student.phone
        ?.includes(searchTerm);

    const dept =
      department === "" ||
      student.dept === department ||
      student.department === department;

    const yr =
      year === "" ||
      String(student.year) === year;

    const sts =
      status === "" ||
      student.status === status;

    return search && dept && yr && sts;
  });

  // Pagination
  const totalPages = Math.ceil(
    filteredStudents.length / studentsPerPage
  );

  const start = (currentPage - 1) * studentsPerPage;

  const currentStudents =
    filteredStudents.slice(
      start,
      start + studentsPerPage
    );

  return (
    <div className="space-y-6">

      {/* Heading */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Student Management
        </h1>

        <p className="text-gray-500">
          Add, Edit, Search and Manage Students
        </p>

      </div>

      {/* Form */}

      <StudentForm
        onAddStudent={handleAddStudent}
      />

      {/* Filters */}

      <StudentFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        department={department}
        setDepartment={setDepartment}
        year={year}
        setYear={setYear}
        status={status}
        setStatus={setStatus}
      />

      {/* Table */}

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