// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port (use Azure's provided PORT or default to 3000)
const port = process.env.PORT || 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, Azure Web App Service!');
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
