const express = require("express");
const app = express();

const port = 8080

const path = require("path");

app.listen(port,() => {
    console.log(`listening to the server port : ${port}`)
});


// app.use((req,res) => {
//     res.send("this is home");
// })

app.get("/",(req,res) => {
    res.render("home");
});

// Using EJS
app.set("view engine","ejs");              // view engine -> template engine use for rendering

app.set("views", path.join(__dirname, "views")); // incase you are activating server in outside the window.

// app.get("/rolldice",(req,res) => {
//     res.render("rolldice.ejs");            
// });

// when using key value pair
app.get("/rolldice",(req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice", {num : diceVal});            
});

// Instagram EJS
app.get("/ig/:username",(req, res) => {
    // const followers = ["adam","bob","steve","abc"];
    // let {username} = req.params;
    // res.render("instagram.ejs",{username, followers});
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    if(data) {
        res.render("instagram.ejs",{data});
    } else {
        res.render("error.ejs");
    }
});

// Serving Static Files, we can write this commands many times 
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));