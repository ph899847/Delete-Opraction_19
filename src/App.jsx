
import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Patel", course: "BCA" },
    { id: 2, name: "Priya Shah", course: "BBA" },
    { id: 3, name: "Amit Joshi", course: "B.Sc IT" },
    { id: 4, name: "Neha Desai", course: "MCA" },
    { id: 5, name: "Karan Mehta", course: "BCA" }
  ]);

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>
      <p className="subtitle">Delete Operation</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">
                No students available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <p className="count">
        Total Students: {students.length}
      </p>
    </div>
  );
}

export default App;