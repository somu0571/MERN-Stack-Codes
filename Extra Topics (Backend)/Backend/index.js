const express = require("express");
const app = express();
const port = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));  // to decode data from URL for Express.js
app.use(express.json()); // to decode data from json format for express.js

// GET route
app.get("/register", (req, res) => {
    let { user, password } = req.query;
    console.log("GET request received:", user, password); // logs to terminal
    res.send(`GET response: Welcome ${user}`);
});

// POST route
app.post("/register", (req, res) => {
    console.log(req.body); // for terminal logs
    res.send(`POST response: Welcome`);
});

// Start server
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


