const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");

app.get("/err", (req,res) => {
    abcd = abcd
});

// Error Handling in Express (Format)
// app.use((err, req, res, next) => {
//     console.log("----- ERROR -----");
//     next(err) // this use to trigger the express default error
// });

// Custom Error class uses

const checkToken = (req,res,next) => {
    let {token} = req.query;
    if(token === "givenaccess") {
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/admin",(req,res) => {
    throw new ExpressError(403, "Access to admin to Forbidden");
});

app.get("/api", checkToken, (req,res) => {
    res.send("data");
});

app.listen(port, () => {
    console.log("Server started");
});