// LicensePage.js
import React, { useState } from 'react';
import './LicensePage.css';

function LicensePage() {
  const [licenseKey, setLicenseKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your license validation logic
    if (licenseKey === 'your_admin_key') {
      window.location.href = '/admin';
    } else if (licenseKey === 'your_user_key') {
      window.location.href = '/shield-entry';
    } else {
      alert('Invalid License Key');
    }
  };

  return (
    <div className="license-container">
      <h1>Enter License Key</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={licenseKey} 
          onChange={(e) => setLicenseKey(e.target.value)} 
          placeholder="Enter License Key" 
          required 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LicensePage;
