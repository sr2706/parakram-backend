const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
app.use('/api/teams', require('./routes/teamroutes'));
app.use('/api/accommodation', require('./routes/accommodationroutes'));
app.use('/api/payments', require('./routes/paymentroutes'));
app.use('/api/admin', require('./routes/adminroutes'));
app.use('/api/auth', require('./routes/authroutes'));

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;