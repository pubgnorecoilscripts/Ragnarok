// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LicensePage from './components/LicensePage';
import AdminDashboard from './components/AdminDashboard';
import ShieldEntry from './components/ShieldEntry';

function App() {
  return (
    <Router>
      <div>
        {/* No Navbar initially */}
        <Routes>
          <Route path="/" element={<LicensePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/shield-entry" element={<ShieldEntry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
