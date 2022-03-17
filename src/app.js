// The app.js file is where you will configure your Express application.
const express = require("express");

const app = express();

const morgan = require("morgan");

const sayHello = (req, res, next) => {
  res.send("Hello!");
};

// Attach middleware to the pipeline
app.use(morgan("dev"));
app.use(sayHello);

module.exports = app;
