const express = require("express");
const app = express();

console.dir(app);

let port = 3000; // port :- is the logical endpoints which communicate between web client & web server

app.listen(port, () => {   // listen :- is used in Express to check for incomming request
    console.log(`app is listening on port ${port}`);
});

// Handling Request

//  use() method, it targets all types of http request , eg GET,POST,DELETE etc.

// app.use((req,res) => {  
//     console.log("request recieved");  // when we recived the output in terminal means request was send
//     res.send("Hello World");  // sending response
//     res.send({
//         name: "apple",
//         color: "red"
//     })
// });

// Routing
// get() function use

app.get("/",(req, res) => {  // get() method is specially used for GET request in http
    res.send("MESSI ANKARA MESSI GOAL GOAL !!!");
})

app.get("/arg",(req,res) => {
    res.send("LIONEL MESSI");
})

app.get("/:username",(req,res) => {   // path parameter /:username
    console.log(res.params);
    res.send("THIAGO MESSI")
})

// Query String
app.get("/search",(req,res) => {
    console.log(req.query);
    res.send("no results");
})