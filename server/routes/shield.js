const express = require('express');
const router = express.Router();
const ShieldEntry = require('../models/ShieldEntry');

// POST route to handle shield entry
router.post('/shield-entry', async (req, res) => {
  const { shieldHours } = req.body;

  try {
    const shieldEntry = new ShieldEntry({
      userId: req.user.id, // Assuming you're storing user info in session or token
      shieldHours,
      entryTime: new Date(),
    });

    await shieldEntry.save();
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error saving shield time:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
