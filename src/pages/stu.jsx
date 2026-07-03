import StudentForm from "../components/StudentForm";

export default function Students() {
  const handleAddStudent = (student) => {
    console.log(student);
    // Later you'll save it to JSON server or your API
  };

  return (
    <div className="space-y-6">
      <StudentForm onAddStudent={handleAddStudent} />
    </div>
  );
}