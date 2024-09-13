import React, { useState } from 'react';
import axios from 'axios';
import './ShieldEntry.css'; // Create a CSS file for styling

const ShieldEntry = () => {
  const [shieldHours, setShieldHours] = useState('');
  const [message, setMessage] = useState('');

  const handleShieldEntry = async (e) => {
    e.preventDefault();
    if (!shieldHours || isNaN(shieldHours) || shieldHours <= 0) {
      setMessage('Please enter a valid number of hours.');
      return;
    }

    try {
      const response = await axios.post('/api/shield-entry', {
        shieldHours,
      });

      if (response.data.success) {
        setMessage('Shield time has been successfully entered!');
      } else {
        setMessage('Failed to enter shield time. Try again.');
      }
    } catch (error) {
      console.error('Error entering shield time', error);
      setMessage('Error: Please try again later.');
    }
  };

  return (
    <div className="shield-entry-container">
      <h1>Enter Your Shield Time</h1>
      <form onSubmit={handleShieldEntry}>
        <input
          type="number"
          placeholder="Enter shield time in hours"
          value={shieldHours}
          onChange={(e) => setShieldHours(e.target.value)}
          className="shield-input"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ShieldEntry;
