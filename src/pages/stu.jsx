
import { useEffect, useState } from "react";
import api from "../api/api";

import StudentForm from "../components/StudentForm";
import StudentFilters from "../components/StudentFilters";
import StudentTable from "../components/StudentTable";
import StudentPagination from "../components/StudentPagination";
import StudentModal from "../components/StudentModal";

import studentsData from "../students/students.json";

export default function Students() {
const [students, setStudents] = useState([]);

useEffect(() => {
  console.log("Students State:", students);
}, [students]);

  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("");

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("view");

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

 useEffect(() => {
  loadStudents();
}, []);

const loadStudents = async () => {
  try {
    const res = await api.get("/students");

    console.log("Students Loaded:", res.data);

    setStudents([...res.data]); 

  } catch (err) {
    console.error(err);
  }
};

 // Add Student
const handleAddStudent = async (student) => {
  try {
    await api.post("/students", student);

    await loadStudents(); 

    setSearchTerm("");
    setDepartment("");
    setYear("");
    setStatus("");

      setCurrentPage(1);

    alert("Student Added Successfully!");
  } catch (err) {
    console.error("Error adding student:", err);
    alert("Failed to add student.");
  }
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
  const handleSave = async (updatedStudent) => {
  await api.put(
    `/students/${updatedStudent.id}`,
    updatedStudent
  );

  loadStudents();
};

  // Delete
const handleDelete = async (id) => {
  if (window.confirm("Delete Student?")) {
    await api.delete(`/students/${id}`);
    loadStudents();
  }
};

  // Search & Filter
const filteredStudents = students.filter((student) => {
  const search = searchTerm.trim().toLowerCase();

  const matchesSearch =
    search === "" ||
    Object.values(student).some((value) =>
      String(value).toLowerCase().includes(search)
    );

  const matchesDepartment =
    department === "" || student.Department === department;

  const matchesYear =
    year === "" || String(student.Year) === String(year);

  const matchesStatus =
    status === "" || student["Fee Status"] === status;

  return (
    matchesSearch &&
    matchesDepartment &&
    matchesYear &&
    matchesStatus
  );
});
  // Pagination

 const totalPages = Math.max(
  1,
  Math.ceil(filteredStudents.length / studentsPerPage)
);

const startIndex = (currentPage - 1) * studentsPerPage;

const currentStudents = filteredStudents.slice(
  startIndex,
  startIndex + studentsPerPage
);

  return (
   <div className="mx-2 bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl px-8 py-8">

      {/* Header */}

     <div className="mx-2 bg-[#1E293B] border border-slate-700 rounded-3xl shadow-xl px-8 py-8">
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