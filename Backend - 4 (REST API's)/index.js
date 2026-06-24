const express = require("express");
const app = express();
const port = 8080;
const path = require("path");   // this line use to activate paths so that express.js can use directories as well
const { v4: uuidv4 } = require("uuid");  // IMP ! :- uuid connecting method to backend
const methodOverride = require("method-override");

app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));

// For EJS
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username : "somu0571",
        content : "I love AI/ML"
    },
    {
        id: uuidv4() ,
        username : "manujbhaweja2026",
        content : "I love Web Development"
    },
    {
        id: uuidv4() ,
        username : "sneha_m_1807",
        content : "I love BasketBall"
    },
]

// Created REST API's

app.get("/posts",(req,res) => {   // first Page 
    res.render("index.ejs", {posts});
});

app.get("/posts/new",(req,res) => {   // Form page
    res.render("new.ejs");
});

app.post("/posts",(req,res) => {    // sending data to first page once collected & stored from POST
    let {username, content} = req.body;
    posts.push({ id: uuidv4(), username, content });
    // res.send("Post Request Working")
    res.redirect("/posts");  // automatic going back to first page
});

// app.get("/posts/:id", (req,res) => {
//     let {id} = req.params;
//     let post = posts.find((p) => id === p.id);
//     // console.log(post);
//     // res.send("request working");
//     res.render("show.ejs",{post});
// }) 

// SHOW
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find(p => p.id === id);
  res.render("show", { post });
});

// UPDATE ROUTE
app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find(p => p.id === id);
    post.content = newContent;
    console.log(post);
    // res.send("patch request working");
    res.redirect("/posts");
});

// EDIT ROUTE
app.get("/posts/:id/edit",(req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
    // res.redirect("/posts");
});

// DELETE ROUTE
app.delete("/posts/:id", (req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});


app.listen(port, () => {
    console.log(`Server listining to port : ${port}`);
});

