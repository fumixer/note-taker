// Dependency
const express = require('express');
const path = require('path');

// Express.js: Create an express server
const app = express();

// Set PORT
const PORT = process.env.PORT || 3001;

// Point Server to the route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Parse incoming JSON data
app.use(express.json());
// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Provide file path to a location in our app and insturct the server to make these files static resouces
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Make our server to listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});