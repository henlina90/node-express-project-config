// The app.js file is where you will configure your Express application.

// You require the Express package and assign it to a variable.
const express = require("express");

// The Express package exports a function. When you invoke that function, you get a new Express application and assign it to a variable.
const app = express();

// You export the Express application to be used in the server.js file.
module.exports = app;
