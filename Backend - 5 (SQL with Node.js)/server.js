const express = require("express");
const app = express();
const port = 8080;
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({  
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'tiger'
});

let getRandomUser = () => { 
    return [
        faker.string.uuid(),        
        faker.internet.username(),   
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// HOME ROUTE
app.get("/", (req,res) => {
    let q = "select count(*) from user";
    try {
        connection.query(q,(err,result) => {
            if(err) throw err;
            let count = result[0]["count(*)"]
            // res.send("Success ! check your VS Code Terminal for actual value");
            res.render("home.ejs",{count});
        })
    } catch (err) {
        console.log(err);
        res.send("Some Error Occured in Database");
    }
})

// SHOW ROUTE
app.get("/user", (req,res) => {
    let q = "select * from user";
    try {
        connection.query(q,(err,result) => {
            if (err) throw err;
            console.log(result);
            // res.send(result);
            res.render("showusers.ejs", {result});
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

//EDIT ROUTE
app.get("/user/:id/edit",(req,res) => {
    let { id } = req.params;
    let q = `select * from user where id='${id}'`;

    try {
        connection.query(q,(err,result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs",{ user });
        });
    } catch (err) {
        console.log(err);
        res.send("some error on Database");
    }
});

// UPDATE ROUTE
app.patch("/user/:id",(req,res) => {
    let { id } = req.params;
    let {password: formPass, username: newUsername } = req.body;
    let q = `select * from user where id='${id}'`;

    try {
        connection.query(q,(err,result) => {
            if (err) throw err;
            let user = result[0];
            if(formPass != user.password) {
                res.send("WRONG password !");
            } else {
                let q2 = `update user set username= '${newUsername}' where id='${id}'`;
                connection.query(q2,(err,result) => {
                    if(err) throw err;
                    res.redirect("/user");
                })
            }
        });
    } catch (err) {
        console.log(err);
        res.send("some error on Database");
    }
});

// ADD new user
app.get("/user/new",(req,res) => {
    res.render("new.ejs");
});

app.post("/user/new",(req,res) => {
    let {username, email, password} = req.body;
    let id = faker.string.uuid();  // faker uuid.
    let q = `insert into user (id,username,email,password) values ('${id}','${username}','${email}','${password}')`;

    try {
        connection.query(q,(err,result) => {
            if (err) throw err;
            console.log("Added User");
            res.redirect("/user");
        })
    } catch (err) {
        res.send("Error with Database");
    }
}) 

// DELETE ROUTE
app.delete("/user/:id",(req,res) => {
    let {id} = req.params;
    let q = `delete from user where id = '${id}'`;

    try {
        connection.query(q,(err,result) => {
            if (err) throw err;
            console.log(result);
            console.log("deleted");
            res.redirect("/user");
        })
    } catch (err) {
        res.send("Error occured in Databases");
    }
})

app.listen(port, () => {
    console.log("Server is started at 8080");
})