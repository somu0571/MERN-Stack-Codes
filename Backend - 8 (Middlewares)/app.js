const express = require("express");
const app = express();
const port = 8080;

// Defining middleware :- it can either respond or request
// app.use((req,res,next) => {
//     console.log("Hi, I am 1st middleware");
//     next(); // refer notes.txt for more
// });

// app.use((req,res,next) => {
//     console.log("Hi, I am 2nd middleware");
//     next(); // refer notes.txt for more
// });

// Creating a Utility Middleware (Note:- Middleware should be written GET/POST etc.. request , if not , it will not work)
// Logger
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.pathname, req.time);
//     next();
// });

app.use("/random",(req,res,next) => {
    console.log("I am only for random");
    next();
});

// using middleware for authentication
// app.use("/api",(req,res,next) => {
//     let {token} = req.query;
//     if(token === "givenaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED!");
// })

// As a function
const checkToken = (req,res,next) => {
    let {token} = req.query;
    if(token === "givenaccess") {
        next();
    }
    throw new Error("ACCESS DENIED!");
}

// Error Handling by default express
// app.get("/wrong",(req,res) => {
//     abcd = abcd
// })

// API token as Query String (Activity)
app.get("/api", checkToken, (req,res) => {
    res.send("data");
})

app.get("/",(req,res) => {
    res.send("Hi, I am root");
});

app.get("/random",(req,res) => {
    res.send("this is a random page");
})

app.listen(port, () => {
    console.log(`Server started with port : ${port}`);
})