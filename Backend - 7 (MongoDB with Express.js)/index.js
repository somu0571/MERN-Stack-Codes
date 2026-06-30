const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}


app.get("/", (req, res) => {
    res.send("rest is working");
})

// Index Route (Showing all data)
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
})

// New Route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page not found");
    res.render("new.ejs")
})

// Create Route
app.post("/chats", (req, res) => {
    try {
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date(),
        });
    }
    catch (err) {
        next(err);
    }
    newChat.save()
        .then((res) => {
            console.log("Chat was saved");
        })
        .catch((res) => {
            console.log(err);
        });

    res.redirect("/chats");
});
// using of async wrap (means async function ke andar bhi async function)
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    }
}

// NEW - Show Route  // for handling async errors
app.get("/chats/:id", async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
});

// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
    }
})

// PUT Route (Patch Route edit & saves specific field , while Put Route can edit entire entry)
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    )

    console.log(updatedChat);
    res.redirect("/chats");
})

// Delete Route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

const handleValidationErr = (err) => {
    console.log("Validation Error");
    console.dir(err);
    return err;
}


// Error Handling for mongoose
app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") {
        handleValidationErr(err);
    }
    next(err);
})

// Error Handling Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "some error occurred" } = err;
    res.status(status).send(message);
})

app.listen(port, () => {
    console.log("Server is started at ", `${port}`);
})