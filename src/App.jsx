// src/App.js

import React from 'react';
import StudentManagementPage from './pages/StudentManagementPage';
import './App.css'; // ← ADD THIS LINE

function App() {
  return (
    <div className="App">
      <StudentManagementPage />
    </div>
  );
}

export default App;
