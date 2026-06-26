const { faker } = require("@faker-js/faker");  // Faker Connection
const mysql = require("mysql2"); // my sql2 require line

const connection = mysql.createConnection({  // setting up mysql2
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'tiger'
});

// Faker Function SetUp
let getRandomUser = () => { // convert from object to list items
    return [
        faker.string.uuid(),        // Updated from datatype.uuid()
        faker.internet.username(),   // Updated from internet.userName() (lowercase 'n')
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// asking queries from databases
// try {
//     connection.query("SHOW TABLES",(err,result) => {
//         if (err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }

// inserting into tables
let q = "insert into user (id, username, email, password) values ?";
// let users = [
//   ["u101", "somsubhra_ch", "somsubhra@example.com", "pass123"],
//   ["u102", "aarav_sharma", "aarav@example.com", "secure456"],
//   ["u103", "priya_verma", "priya@example.com", "mypassword"],
//   ["u104", "rohan_gupta", "rohan@example.com", "rohan789"],
//   ["u105", "ananya_singh", "ananya@example.com", "ananya321"]
// ];

// Inserting data using fakers
let data = [];
for(let i=1; i<=100; i++) {
    data.push(getRandomUser());
}

// Query for my sql used wheather you can create, insert , manipulation etc.. in tables
try {
    connection.query(q,[data],(err, result) => {
        if(err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

connection.end();  // closing the connection



