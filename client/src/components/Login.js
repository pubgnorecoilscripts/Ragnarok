import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';  // Custom styles

const Login = ({ onLogin }) => {
  const [licenseKey, setLicenseKey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send a request to the server to verify the license key
      const response = await axios.post('/api/login', { licenseKey });

      if (response.data.valid) {
        onLogin(response.data.userType); // Pass userType (admin/user)
      } else {
        setErrorMessage('Invalid License Key');
      }
    } catch (error) {
      setErrorMessage('Error during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="/favicon.ico" alt="Ragnarok Logo" className="logo" />
        <h1 className="ragnarok-title">Ragnarok</h1>
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Enter License Key"
          value={licenseKey}
          onChange={(e) => setLicenseKey(e.target.value)}
          className="license-input"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="login-btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
