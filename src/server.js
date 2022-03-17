// The server.js file is where you will run your Express application.
const { PORT = 5000 } = process.env;

const app = require("./app");

const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);
