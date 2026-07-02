import students from "../students/students.json";

export const dashboardData = {
  totalStudents: students.length,
  totalTeachers: 10,
  totalCourses: 5,

  avgScore:
    students.reduce((acc, s) => acc + s["Marks (%)"], 0) /
    students.length,

  attendanceRate:
    students.reduce((acc, s) => acc + s["Attendance (%)"], 0) /
    students.length,
};