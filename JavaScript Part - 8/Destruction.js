// Destrucing
let names = ["Tony","Bruce","Peter","Steve"];
let[winner,runnerup,secondRunnerup] = names; // usind Destrucing, you can also use REST concept as well

// Destruction in Objects
const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi","English","Math","Science"],
    username: "karan@123",
    password: "abcd"
}

let { username, password, city="China" } = student; 
