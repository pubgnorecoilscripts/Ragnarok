// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>Ragnarok Shield Tracker</h2>
      <div>
        <Link to="/">Login</Link>
        <Link to="/license">License</Link>
        <Link to="/admin">Admin Dashboard</Link>
        <Link to="/shield-entry">Enter Shield</Link>
      </div>
    </nav>
  );
};

export default Navbar;
