// Create web server
const express = require('express');
const app = express();

// Create a function to handle requests
function handleRequest(req, res) {
    res.send('Hello, world');
}

// Create a route to handle GET requests
app.get('/', handleRequest);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});