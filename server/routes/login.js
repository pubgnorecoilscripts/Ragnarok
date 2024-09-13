const express = require('express');
const router = express.Router();

// Example login route
router.post('/', (req, res) => {
  const { licenseKey } = req.body;

  // Here, you would typically validate the licenseKey against your database
  if (licenseKey === 'admin-key') {
    return res.status(200).json({ valid: true, userType: 'admin' });
  } else if (licenseKey === 'user-key') {
    return res.status(200).json({ valid: true, userType: 'user' });
  } else {
    return res.status(400).json({ valid: false });
  }
});

module.exports = router;
