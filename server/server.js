require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Connect to MongoDB (using the db.js file we created earlier)
require('./config/db');

// Middleware
app.use(express.json()); // Body parser for JSON data
app.use(express.urlencoded({ extended: false })); // Body parser for URL-encoded data
app.use(cors()); // Enable CORS for all origins (for simplicity, as per some lecturer examples)

// Serve static files from the React app (will be used later for deployment)
app.use(express.static(path.join(__dirname, '../client/build')));

// Basic Route (for testing server is alive)
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes (will be added here later, uncomment as we add them)
// const usersRoutes = require('./routes/users');
// const carsRoutes = require('./routes/cars');
// app.use('/users', usersRoutes);
// app.use('/cars', carsRoutes);

// Error handling middleware (basic, as per some lecturer examples)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
