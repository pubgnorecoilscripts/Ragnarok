const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Check if MONGO_URI is loaded correctly from .env
console.log('MONGO_URI from .env:', process.env.MONGO_URI);

// Database Connection
mongoose.set('strictQuery', true); // You can configure this as per your needs
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes (Import your route files here)
const loginRoute = require('./routes/login');
const shieldRoute = require('./routes/shield');

// Use routes
app.use('/api/login', loginRoute);
app.use('/api/shield-entry', shieldRoute);

// Add a basic root route to avoid the Heroku "Welcome" page
app.get('/', (req, res) => {
  res.send('Welcome to the Shield Tracker App!');
});

// Serve static assets in production (like your frontend)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
