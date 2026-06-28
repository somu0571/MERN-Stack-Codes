const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me your extra sheets",
    created_at: new Date(),
    },
    {
    from: "amit",
    to: "naman",
    msg: "All the best",
    created_at: new Date(),
    },
    {
    from: "chaman",
    to: "manan",
    msg: "I love Football",
    created_at: new Date(),
    },
    {
    from: "vedika",
    to: "janhvi",
    msg: "I love Football",
    created_at: new Date(),
    },
];

Chat.insertMany(allChats);